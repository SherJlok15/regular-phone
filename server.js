const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const path = require('path')

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())

const mongoUri = process.env.MONGO_URI;
mongoose.connect(mongoUri, {})
const connection = mongoose.connection;
connection.once('open', () => {
	console.log('MongoDB connected')
})

const productRoutes = require('./routes/products');
app.use('/products', productRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static('client/build'));
}

app.listen(port, () => {
	console.log(`Server is running on port ${port}`)
})
