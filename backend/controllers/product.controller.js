const express = require("express");
const router = express.Router();
const ProductModel = require("../models/products.model");

router.get("/", async (req, res) => {
  let products = await ProductModel.find({});
  res.status(200).json(products);
});

router.get("/flashsale", async (req, res) => {
  let products = await ProductModel.find({ section: "flashSale" });
  res.status(200).json(products);
});

router.get("/trendingnow", async (req, res) => {
  let products = await ProductModel.find({ section: "trendingNow" });
  res.status(200).json(products);
});

router.get("/trendingwheypro", async (req, res) => {
  let products = await ProductModel.find({
    section: "trendingInWheyProtein",
  });
  res.status(200).json(products);
});

router.get("/trendingmassgainer", async (req, res) => {
  let products = await ProductModel.find({ section: "trendingInMassGainer" });
  res.status(200).json(products);
});

router.get("/trendingpremiumsuppements", async (req, res) => {
  let products = await ProductModel.find({
    section: "trendingInPremiumSupplements",
  });
  res.status(200).json(products);
});

router.get("/justlaunched", async (req, res) => {
  let products = await ProductModel.find({ section: "justLaunchedProducts" });
  res.status(200).json(products);
});

router.get("/whatarelooking", async (req, res) => {
  let products = await ProductModel.find({
    section: "whatAreYouLookingFor",
  });
  res.status(200).json(products);
});

router.get("/popularweightloss", async (req, res) => {
  let products = await ProductModel.find({ section: "popularInWeightLoss" });
  res.status(200).json(products);
});

router.get("/popularsportsnut", async (req, res) => {
  let products = await ProductModel.find({
    section: "popularInSportsNutrition",
  });
  res.status(200).json(products);
});

router.get("/popularhealthfoodanddrink", async (req, res) => {
  let products = await ProductModel.find({
    section: "popularInHealthFoodsDrinks",
  });
  res.status(200).json(products);
});

router.get("/popularinfitness", async (req, res) => {
  let products = await ProductModel.find({ section: "popularInFitness" });
  res.status(200).json(products);
});

router.get("/whey", async (req, res) => {
  let products = await ProductModel.find({ section: "whey" });
  res.status(200).json(products);
});

router.get("/:id", async (req, res) => {
  let product = await ProductModel.findById(req.params.id);
  res.status(200).json(product);
});

module.exports = router;
