const express = require("express");
const router = express.Router();
const WishlistModel = require("../models/wishlist.model");

router.get("/", async (req, res) => {
  let wishlist = await WishlistModel.find({});
  res.status(200).json(wishlist);
});

router.post("/", async (req, res) => {
  const wishlist = await WishlistModel.create(req.body);
  res.status(200).json(wishlist);
});

router.delete("/:id", async (req, res) => {
  const delWishlist = await WishlistModel.findByIdAndDelete(req.params.id);
  res.status(200).json(delWishlist);
});

module.exports = router;
