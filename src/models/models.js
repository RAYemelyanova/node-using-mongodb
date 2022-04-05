/**/
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const use_schema = new Schema({
    name: {type: String, required: 'Enter product name' },
    description: {type: String, required: 'Enter product description' },
    category: String,
    price: Number,
    created_date: {type: Date, default: Date.now() },
});