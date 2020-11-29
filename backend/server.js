const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;
const connection = mongoose.connection;

const productsRouter = require('./routes/products');
const usersRouter = require('./routes/users');

require('dotenv').config();
const uri = process.env.DATABASE_URL;

app.use(cors());
app.use(express.json());
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true
});
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

app.use('/products', productsRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});