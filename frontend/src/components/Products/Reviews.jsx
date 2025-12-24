import React, { useEffect, useState } from "react";
import Styles from "../../css/Products/Reviews.module.css";
import StarIcon from "@mui/icons-material/Star";
import ReviewForm from "./SimpleDialog";

export const Reviews = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://healthkart-clone-backend.onrender.com/reviews`)
      .then((r) => r.json())
      .then((r) => setData(r));
  }, []);
  return (
    <div>
      <div className={Styles.container}>
        <h4>Details</h4>
        <hr />
        <p>
          Details MB Fuel One aims at offering the best nutrition at the best
          value so that you can fulfill your muscle-building goals with least
          worries. Your level of training has been highly considered while
          crafting the products in MB Fuel One so that you get the best of
          nutrition to scale up your performance and be a better version of you.
          MB Fuel One Whey Protein Immunity+ is now no longer just a
          post-workout protein drink. It is India’s only whey protein supplement
          packed with immunity-boosting agents to enhance your immunity and
          improve your overall well-being. A scoop of protein can now help you
          with immunity building along with bodybuilding. This is a unique
          formula that is enriched with Vitamin C, D, Zinc to improve the health
          and functioning of your immune system and boost your body’s defense
          mechanism. The revolutionary product, MB Fuel One Whey Protein
          Immunity+, is invented to soothe your muscles after intense workout
          sessions and help in faster muscle recovery while taking care of the
          much needed strong & robust immune system.
        </p>
        <br />
        <br />
        <h6>Benefits of MB Fuel One Whey Protein Immunity+ </h6>
        <ul>
          <li>
            Boosts immunity: With this product, not only you can have maximum
            gains, but also maximum immunity. It is fortified with
            immunity-boosting ingredients like Zinc, Vitamin C & Vitamin D that
            boost your body’s defense mechanism by strengthening your immune
            system. In a single product, you enjoy great immunity and get to
            build sturdy muscles with the help of premium quality whey protein.
          </li>
          <li>
            100% RDA of Vitamin C, D, and Zinc: MB Fuel One Whey Protein
            Immunity+ has 100% RDA of all these immunity-developing
            micronutrients to ensure that you get 100% of the daily requirement
            of these super-agents and improve your health. Vitamin C boosts the
            production of white blood cells to protect you against infections.
            Vitamin D helps modulate the immune system response and Zinc is
            essential for optimum immune function and helps keep inflammation
            under control.
          </li>

          <li>
            Premium Quality Whey Protein: With every serving of MB Fuel One Whey
            Protein Immunity+, you get 24g of protein that helps you in
            maintaining muscle mass and have a rich bodybuilding experience.
            This whey is sourced from USA. The primary source of protein is whey
            protein concentrate with a PDCAAS score of 1 which demonstrates the
            maximum amino acid digestibility.
          </li>
          <li>
            Faster muscle recovery: Each serving of this product fuels you with
            5.3g of naturally occurring BCAAs to boost muscle recovery after
            intense workouts. BCAAs are also helpful in soothing muscle soreness
            and reducing fatigue. This makes it a perfect post-workout fuel.
          </li>
          <li>
            Free from Maltodextrin and sugar: The product is steered clear oo
            maltodextrin, an ingredient often used in low-quality supplements.
            Also, it is rich in taste with its chocolaty flavour but all
            calorie- conscious people can consume it without any worries as it
            contains no added sugars.{" "}
          </li>
        </ul>
      </div>
      <hr />
      <div className={Styles.reviewContainer}>
        <h2>Rating and Reviews</h2>
        <div className={Styles.reviews}>
          <div className={Styles.reviewImage}>
            <img
              src="https://github.com/devchetan123/healthkart-clone/blob/product_page/frontend/src/img/review.png?raw=true"
              alt=""
            />
            <hr />
            <ReviewForm />
          </div>
          <div>
            {data.map((item) => {
              return (
                <div className={Styles.reviewBox} key={item.id}>
                  <div className={Styles.reviewsRender}>
                    <p>
                      {item.star} <StarIcon style={{ fontSize: "10px" }} />
                    </p>
                    <h4>{item.title}</h4>
                  </div>
                  <p>{item.review}</p>
                  <div className={Styles.controller}>
                    <button>Helpful</button>
                    <button>|</button>
                    <button>Report Abuse</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
