const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  items: [{ 
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    image: { type: String, required: true }
  }],
  total: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
