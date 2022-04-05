/**/
import mongoose from 'mongoose';
import { use_schema } from '../models/models';

const Product = mongoose.model('Product', use_schema);

export const addnewProduct = (req, res) => {
    let newProduct = new Product(req.body);
    newProduct.save((err, Product) => {
        if (err) {
            res.send(err);
        }
        res.json(Product);
    });
}