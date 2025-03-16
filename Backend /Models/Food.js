const mongoose= require('mongoose');

const FoodItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant',
    },
    prince: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
    },
    category: {
        type: String,
        required: true,
    },
    ingredients: {
        type: [String],
    },
    qrCode: {
        type: String,
        required: true,
    },
    expirationDate: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        enum: ['available', 'unavailable'],
        default: 'available',
    },
}, { timestamps: true });

module.exports = mongoose.model('FoodItem', FoodItemSchema);
