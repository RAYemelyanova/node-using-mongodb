/**/
import mongoose from 'mongoose';
import addnewProduct from '../controllers/controllers.js';

export function routes (app) {
    app.route("/products").post(addnewProduct);
}
