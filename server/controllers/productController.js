const Product = require('../models/Product');
const Category = require('../models/Category');

// Получить все товары с фильтрацией и пагинацией
exports.getAllProducts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 12;
    const skip = (page - 1) * limit;

    // Построение фильтра
    const filter = {};
    
    if (req.query.category) filter.category = req.query.category;
    if (req.query.isActive !== undefined) filter.isActive = req.query.isActive === 'true';
    if (req.query.inStock !== undefined) filter.inStock = req.query.inStock === 'true';
    if (req.query.isOrganic !== undefined) filter.isOrganic = req.query.isOrganic === 'true';
    if (req.query.isFeatured !== undefined) filter.isFeatured = req.query.isFeatured === 'true';
    
    // Фильтр по цене
    if (req.query.minPrice || req.query.maxPrice) {
      filter.price = {};
      if (req.query.minPrice) filter.price.$gte = parseFloat(req.query.minPrice);
      if (req.query.maxPrice) filter.price.$lte = parseFloat(req.query.maxPrice);
    }

    // Поиск по тексту
    if (req.query.search) {
      filter.$text = { $search: req.query.search };
    }

    // Построение сортировки
    let sort = {};
    switch (req.query.sortBy) {
      case 'price-asc':
        sort = { price: 1 };
        break;
      case 'price-desc':
        sort = { price: -1 };
        break;
      case 'rating':
        sort = { 'rating.average': -1 };
        break;
      case 'popular':
        sort = { salesCount: -1 };
        break;
      case 'newest':
        sort = { createdAt: -1 };
        break;
      default:
        sort = { name: 1 };
    }

    const products = await Product.find(filter)
      .populate('category', 'name slug')
      .sort(sort)
      .skip(skip)
      .limit(limit);

    const total = await Product.countDocuments(filter);

    res.json({
      success: true,
      data: {
        products,
        pagination: {
          page,
          limit,
          total,
          pages: Math.ceil(total / limit)
        }
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Получить товар по ID или slug
exports.getProductById = async (req, res) => {
  try {
    const identifier = req.params.id;
    const query = mongoose.Types.ObjectId.isValid(identifier) 
      ? { _id: identifier } 
      : { slug: identifier };

    const product = await Product.findOne(query)
      .populate('category', 'name slug')
      .populate({
        path: 'reviews',
        match: { isApproved: true },
        populate: { path: 'user', select: 'name' },
        options: { sort: { createdAt: -1 } }
      });

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Товар не найден'
      });
    }

    // Увеличить счетчик просмотров
    await Product.findByIdAndUpdate(product._id, { $inc: { viewsCount: 1 } });

    res.json({
      success: true,
      data: { product }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Создать новый товар
exports.createProduct = async (req, res) => {
  try {
    // Проверить существование категории
    const category = await Category.findById(req.body.category);
    if (!category) {
      return res.status(400).json({
        success: false,
        message: 'Указанная категория не существует'
      });
    }

    const product = new Product(req.body);
    await product.save();

    await product.populate('category', 'name slug');

    res.status(201).json({
      success: true,
      message: 'Товар успешно создан',
      data: { product }
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'Товар с таким названием или штрихкодом уже существует'
      });
    }
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// Обновить товар
exports.updateProduct = async (req, res) => {
  try {
    // Если обновляется категория, проверить ее существование
    if (req.body.category) {
      const category = await Category.findById(req.body.category);
      if (!category) {
        return res.status(400).json({
          success: false,
          message: 'Указанная категория не существует'
        });
      }
    }

    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate('category', 'name slug');

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Товар не найден'
      });
    }

    res.json({
      success: true,
      message: 'Товар успешно обновлен',
      data: { product }
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// Удалить товар
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Товар не найден'
      });
    }

    res.json({
      success: true,
      message: 'Товар успешно удален'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Поиск товаров
exports.searchProducts = async (req, res) => {
  try {
    const { q, category, minPrice, maxPrice, inStock, isOrganic } = req.query;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 12;
    const skip = (page - 1) * limit;

    const filter = { isActive: true };

    if (q) {
      filter.$text = { $search: q };
    }
    if (category) filter.category = category;
    if (inStock === 'true') filter.inStock = true;
    if (isOrganic === 'true') filter.isOrganic = true;
    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = parseFloat(minPrice);
      if (maxPrice) filter.price.$lte = parseFloat(maxPrice);
    }

    const products = await Product.find(filter)
      .populate('category', 'name slug')
      .sort(q ? { score: { $meta: 'textScore' } } : { name: 1 })
      .skip(skip)
      .limit(limit);

    const total = await Product.countDocuments(filter);

    res.json({
      success: true,
      data: {
        products,
        pagination: {
          page,
          limit,
          total,
          pages: Math.ceil(total / limit)
        },
        query: q
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Получить рекомендуемые товары
exports.getRecommendedProducts = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 8;

    const products = await Product.find({
      isActive: true,
      inStock: true,
      $or: [
        { isFeatured: true },
        { 'rating.average': { $gte: 4.5 } },
        { salesCount: { $gte: 50 } }
      ]
    })
    .populate('category', 'name slug')
    .sort({ 'rating.average': -1, salesCount: -1 })
    .limit(limit);

    res.json({
      success: true,
      data: { products }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Получить статистику товаров
exports.getProductStats = async (req, res) => {
  try {
    const stats = await Product.aggregate([
      {
        $group: {
          _id: null,
          totalProducts: { $sum: 1 },
          activeProducts: { $sum: { $cond: ['$isActive', 1, 0] } },
          inStockProducts: { $sum: { $cond: ['$inStock', 1, 0] } },
          organicProducts: { $sum: { $cond: ['$isOrganic', 1, 0] } },
          averagePrice: { $avg: '$price' },
          totalViews: { $sum: '$viewsCount' },
          totalSales: { $sum: '$salesCount' }
        }
      }
    ]);

    const categoryStats = await Product.aggregate([
      { $match: { isActive: true } },
      {
        $lookup: {
          from: 'categories',
          localField: 'category',
          foreignField: '_id',
          as: 'categoryInfo'
        }
      },
      { $unwind: '$categoryInfo' },
      {
        $group: {
          _id: '$category',
          name: { $first: '$categoryInfo.name' },
          count: { $sum: 1 },
          averagePrice: { $avg: '$price' }
        }
      },
      { $sort: { count: -1 } }
    ]);

    res.json({
      success: true,
      data: {
        general: stats[0] || {},
        byCategory: categoryStats
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};