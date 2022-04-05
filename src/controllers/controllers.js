/**/
import mongoose from 'mongoose';
import use_schema from '../models/models.js';

let Product = mongoose.model('Product', use_schema);

export function addnewProduct(req, res) {
    let newProduct = new Product(req.body);
    newProduct.save((err, Product) => {
        if (err) return handleError(err);
        console.log(`Response: ${res.json}, Produce: ${Product}`);
    })
}