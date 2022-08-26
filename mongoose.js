const mongoose = require("mongoose");
const Product = require("./models/product");
const url =
  "mongodb+srv://will-cecom:En8b6FhhCDsKzxFZGaUV@cluster0.txkupje.mongodb.net/products_test?retryWrites=true&w=majority";

mongoose
  .connect(url)
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

const createProduct = async (req, res, next) => {
  const createdProduct = new Product({
    name: req.body.name,
    price: req.body.price,
  });
  const result = await createdProduct.save();
  console.log(typeof createdProduct._id);
  res.json(result);
};

const getProducts = async (req, res, next) => {
  const products = await Product.find().exec(); // mongoose find returns array

  res.json(products);
};

exports.createProduct = createProduct;
exports.getProducts = getProducts;
