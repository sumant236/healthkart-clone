import React, { useEffect, useState } from "react";
import { FlashSale } from "./FlashSale";
import { TrendingNow } from "./TrendingNow";
import { SwiperSlider } from "./SwiperSlider";
import { TrendingInWheyProtein } from "./TrendingInWheyProtein";
import { TrendingInMassGainer } from "./TrendingInMassGainer";
import { TrendingInPremiumSupplements } from "./TrendingInPremiumSupplements";
import { JustLaunchedProducts } from "./JustLaunchedProducts";
import { WhatAreYouLookingFor } from "./WhatAreYouLookingFor";
import { PopularsContainer } from "./PopularsContainer";
import { DownloadWrapper } from "./DownloadWrapper";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar";
import NavbarTopSec from "../NavbarTopSec";

export const LandingPage = () => {
  const [weightLossData, setWeightLossData] = useState([]);
  const [sportsNutritionData, setSportsNutritionData] = useState([]);
  const [foodsDrinksData, setFoodsDrinksData] = useState([]);
  const [fitnessData, setFitnessData] = useState([]);

  const getWeightLossData = () => {
    fetch(
      "https://healthkart-clone-backend.onrender.com/products/popularweightloss"
    )
      .then((res) => res.json())
      .then((res) => {
        setWeightLossData(res);
      })
      .catch((err) => console.log(err));
  };

  const getSportsNutritionData = () => {
    fetch(
      "https://healthkart-clone-backend.onrender.com/products/popularweightloss"
    )
      .then((res) => res.json())
      .then((res) => {
        setSportsNutritionData(res);
      })
      .catch((err) => console.log(err));
  };

  const getFoodsDrinksData = () => {
    fetch(
      "https://healthkart-clone-backend.onrender.com/products/popularweightloss"
    )
      .then((res) => res.json())
      .then((res) => {
        setFoodsDrinksData(res);
      })
      .catch((err) => console.log(err));
  };

  const getFitnessData = () => {
    fetch(
      "https://healthkart-clone-backend.onrender.com/products/popularweightloss"
    )
      .then((res) => res.json())
      .then((res) => {
        setFitnessData(res);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getWeightLossData();
    getSportsNutritionData();
    getFoodsDrinksData();
    getFitnessData();
  }, []);
  return (
    <>
      <NavbarTopSec />
      <Navbar />
      <div style={{ background: "#F7F7F7" }}>
        <SwiperSlider />
        <FlashSale />
        <TrendingNow />
        <WhatAreYouLookingFor />
        <PopularsContainer
          items={sportsNutritionData}
          tag={"Popular In Sports Nutrition"}
        />
        <PopularsContainer
          items={weightLossData}
          tag={"Popular In Weight Loss"}
        />
        <TrendingInWheyProtein />
        <PopularsContainer
          items={foodsDrinksData}
          tag={"Popular in Health Foods & Drinks"}
        />
        <TrendingInMassGainer />
        <PopularsContainer items={fitnessData} tag={"Popular in Fitness"} />
        <TrendingInPremiumSupplements />
        <JustLaunchedProducts />
        <DownloadWrapper />
        <Footer />
      </div>
    </>
  );
};
