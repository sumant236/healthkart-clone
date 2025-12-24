require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8000;
const cors = require("cors");

const DB_URL = process.env.MONGODB_URL;

const productController = require("./controllers/product.controller");
const wishlistController = require("./controllers/wishlist.controller");

let app = express();

app.use(cors());
app.use(express.json());

app.use("/products", productController);
app.use("/wishlist", wishlistController);

const connect = () => {
  return mongoose.connect(DB_URL);
};

mongoose.set("strictQuery", true);

app.listen(PORT, async () => {
  try {
    await connect();
    console.log(`listening on port ${PORT}`);
  } catch (e) {
    console.log(e.message);
  }
});
