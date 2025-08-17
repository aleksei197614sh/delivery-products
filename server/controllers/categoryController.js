const Category = require('../models/Category');

// Получить все категории
exports.getAllCategories = async (req, res) => {
  try {
    const filter = {};
    if (req.query.isActive !== undefined) {
      filter.isActive = req.query.isActive === 'true';
    }
    if (req.query.parentCategory) {
      filter.parentCategory = req.query.parentCategory === 'null' ? null : req.query.parentCategory;
    }

    const categories = await Category.find(filter)
      .populate('parentCategory', 'name slug')
      .populate('subcategories')
      .sort({ sortOrder: 1, name: 1 });

    res.json({
      success: true,
      data: { categories }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Получить категорию по ID или slug
exports.getCategoryById = async (req, res) => {
  try {
    const identifier = req.params.id;
    const query = mongoose.Types.ObjectId.isValid(identifier) 
      ? { _id: identifier } 
      : { slug: identifier };

    const category = await Category.findOne(query)
      .populate('parentCategory', 'name slug')
      .populate('subcategories')
      .populate({
        path: 'products',
        match: { isActive: true },
        options: { sort: { name: 1 } }
      });

    if (!category) {
      return res.status(404).json({
        success: false,
        message: 'Категория не найдена'
      });
    }

    res.json({
      success: true,
      data: { category }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Создать новую категорию
exports.createCategory = async (req, res) => {
  try {
    const category = new Category(req.body);
    await category.save();

    res.status(201).json({
      success: true,
      message: 'Категория успешно создана',
      data: { category }
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'Категория с таким названием уже существует'
      });
    }
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// Обновить категорию
exports.updateCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate('parentCategory', 'name slug');

    if (!category) {
      return res.status(404).json({
        success: false,
        message: 'Категория не найдена'
      });
    }

    res.json({
      success: true,
      message: 'Категория успешно обновлена',
      data: { category }
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// Удалить категорию
exports.deleteCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);

    if (!category) {
      return res.status(404).json({
        success: false,
        message: 'Категория не найдена'
      });
    }

    // Проверить, есть ли подкатегории
    const subcategories = await Category.find({ parentCategory: category._id });
    if (subcategories.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Нельзя удалить категорию, у которой есть подкатегории'
      });
    }

    // Проверить, есть ли товары в категории
    const Product = require('../models/Product');
    const products = await Product.find({ category: category._id });
    if (products.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Нельзя удалить категорию, в которой есть товары'
      });
    }

    await Category.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: 'Категория успешно удалена'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Получить дерево категорий
exports.getCategoryTree = async (req, res) => {
  try {
    const categories = await Category.find({ isActive: true })
      .sort({ sortOrder: 1, name: 1 });

    // Построение дерева категорий
    const buildTree = (categories, parentId = null) => {
      return categories
        .filter(cat => String(cat.parentCategory) === String(parentId))
        .map(cat => ({
          ...cat.toObject(),
          children: buildTree(categories, cat._id)
        }));
    };

    const tree = buildTree(categories);

    res.json({
      success: true,
      data: { categories: tree }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};