// const mongoose = require('mongoose');

// const OrderSchema = new mongoose.Schema({
//     user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Customer placing the order
//     items: [
//         {
//             menuItem: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem', required: true },
//             quantity: { type: Number, required: true }
//         }
//     ],
//     totalPrice: { type: Number, required: true },
//     status: { 
//         type: String, 
//         enum: ['Pending', 'Preparing', 'Completed', 'Cancelled'], 
//         default: 'Pending' 
//     },
//     createdAt: { type: Date, default: Date.now }
// });

// module.exports = mongoose.model('Order', OrderSchema);
