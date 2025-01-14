import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import routes from './src/routes/routes';

const app = express();
const PORT = 1025;

//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/productsdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 

// executing routes function with express app
routes(app);

app.get('/', (req, res) =>
    res.send(`Store server running on port ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT}`)
);

