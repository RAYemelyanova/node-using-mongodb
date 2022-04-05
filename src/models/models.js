/**/
import mongoose from 'mongoose';

export let use_schema = new Schema({
    name: {type: String, required: true },
    description: {type: String, required: true },
    category: String,
    price: Number,
    created_date: {type: Date, default: Date.now() },
});