const Address = require('../models/Address');

// Получить все адреса пользователя
exports.getUserAddresses = async (req, res) => {
  try {
    const addresses = await Address.find({ 
      user: req.user.id, 
      isActive: true 
    }).sort({ isDefault: -1, createdAt: -1 });

    res.json({
      success: true,
      data: { addresses }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Получить адрес по ID
exports.getAddressById = async (req, res) => {
  try {
    const address = await Address.findOne({
      _id: req.params.id,
      user: req.user.id
    });

    if (!address) {
      return res.status(404).json({
        success: false,
        message: 'Адрес не найден'
      });
    }

    res.json({
      success: true,
      data: { address }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Создать новый адрес
exports.createAddress = async (req, res) => {
  try {
    const address = new Address({
      ...req.body,
      user: req.user.id
    });

    await address.save();

    res.status(201).json({
      success: true,
      message: 'Адрес успешно создан',
      data: { address }
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// Обновить адрес
exports.updateAddress = async (req, res) => {
  try {
    const address = await Address.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      req.body,
      { new: true, runValidators: true }
    );

    if (!address) {
      return res.status(404).json({
        success: false,
        message: 'Адрес не найден'
      });
    }

    res.json({
      success: true,
      message: 'Адрес успешно обновлен',
      data: { address }
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// Удалить адрес
exports.deleteAddress = async (req, res) => {
  try {
    const address = await Address.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id
    });

    if (!address) {
      return res.status(404).json({
        success: false,
        message: 'Адрес не найден'
      });
    }

    // Если удаляемый адрес был по умолчанию, назначить другой адрес по умолчанию
    if (address.isDefault) {
      const firstAddress = await Address.findOne({ 
        user: req.user.id, 
        isActive: true 
      });
      if (firstAddress) {
        firstAddress.isDefault = true;
        await firstAddress.save();
      }
    }

    res.json({
      success: true,
      message: 'Адрес успешно удален'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Установить адрес по умолчанию
exports.setDefaultAddress = async (req, res) => {
  try {
    // Убрать флаг по умолчанию у всех адресов пользователя
    await Address.updateMany(
      { user: req.user.id },
      { isDefault: false }
    );

    // Установить новый адрес по умолчанию
    const address = await Address.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      { isDefault: true },
      { new: true }
    );

    if (!address) {
      return res.status(404).json({
        success: false,
        message: 'Адрес не найден'
      });
    }

    res.json({
      success: true,
      message: 'Адрес установлен по умолчанию',
      data: { address }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};