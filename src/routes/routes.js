/**/
import mongoose from 'mongoose';
import { addnewProduct } from '../controllers/controllers';

const routes = (app) => {
    app.route("/products")
    
    // Post endpoint
    .post(addnewProduct);
}

export default routes;