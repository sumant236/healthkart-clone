import React from "react";
import styles from "../../css/productsPage/right.module.css";
import { Box } from "@mui/material";
import { add_cart } from "../../redux/Cart/cart.actions";

import { FaRupeeSign, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Sortcomponent } from "./Sortcomponent";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Right = ({ items, setItems }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleWishList = (x) => {
    const payload = {
      title: x.title,
      img_url: x.img_url,
      originalPrice: x.originalPrice,
      rating: x.rating,
      discountedPrice: x.discountedPrice,
      discount: x.discount,
    };
    const con = {
      url: `https://healthkart-clone-backend.onrender.com/wishlist`,
      method: "post",
      data: payload,
    };
    return axios(con);
  };

  const addCartFunc = (x) => {
    const obj = {
      id: x._id,
      title: x.title,
      price: x.originalPrice,
      img: x.img_url,
      qty: 1,
      initPrice: x.originalPrice,
    };

    dispatch(add_cart(obj));
  };

  return (
    <div>
      <div>
        <span>
          <img
            src="https://img2.hkrtcdn.com/10922/bnr_1092171_o.jpg"
            alt="Protein img"
            claaName={styles.proteinimg}
          />
        </span>
        <div className={styles.discountandheart}>
          <div>
            <h2>Whey Protein </h2>
          </div>
          <div>
            <img
              src="https://static1.hkrtcdn.com/hknext/static/media/common/misc/authenticity.svg"
              alt="auth img"
            />
            <img
              src="https://static1.hkrtcdn.com/hknext/static/media/common/misc/delivery_icon.svg"
              alt="auth img"
            />
          </div>
        </div>
        <div className={styles.toptext}>
          <p>
            For your bodybuilding goals, you can completely rely on the whey
            protein. Whey protein provides all the necessary protein and
            nutrients and helps in improving great energy levels and allows you
            to achieve your bodybuilding goals safely and effectively. It also
            benefits the overall health of the body. At HealthKart, we have some
            of the trusted protein supplement brands such as DYMATIZE,
            MuscleBlaze, ON, MyProtein, Ultimate Nutrition, MuscleTech etc at a
            very affordable price. So, what are you waiting for? Visit
            HealthKart and grab the best whey protein powder from the domestic
            and international brands and enjoy some amazing offers, deals, and
            discounts.
          </p>
        </div>
        <hr />
        <div className={styles.sorting}>
          <Sortcomponent items={items} setItems={setItems} />
        </div>
        <hr />
        <div className={styles.productswrapper}>
          <Box
            className={styles.singleprodwrapper}
            sx={{
              display: "grid",
              columnGap: 3,
              rowGap: 3,
              gridTemplateColumns: {
                xl: "repeat(3, 1fr)",
                lg: "repeat(3, 1fr)",
                md: "repeat(3, 1fr)",
                sm: "repeat(2, 1fr)",
                xs: "repeat(1, 1fr)",
              },
            }}
          >
            {items.map((item) => (
              <div id={item.id}>
                <div className={styles.card}>
                  <div className={styles.discountandheart}>
                    <span className={styles.discount}>{item.discount}%Off</span>
                    {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                      &nbsp; &nbsp; &nbsp; &nbsp;   */}

                    <div
                      className={styles.iconContainer}
                      onClick={() => handleWishList(item)}
                    >
                      {/* <FaRegHeart className={styles.heart}/> */}
                      <img
                        src="	https://static1.hkrtcdn.com/hknext/static/media/common/variant/wishlist/whistlist.svg"
                        alt="heart"
                      />
                      <img
                        src="https://static1.hkrtcdn.com/hknext/static/media/common/variant/wishlist/hover-heart.svg"
                        alt="heart"
                      />
                    </div>
                  </div>
                  <span className={styles.vegimgspan}>
                    <img
                      src="https://static1.hkrtcdn.com/hknext/static/media/common/variant/Vegetarian.svg"
                      alt="veg"
                      className={styles.vegimg}
                    />
                  </span>

                  <div>
                    <img
                      src={item.img_url}
                      alt="Product"
                      className={styles.prodimg}
                    />
                  </div>
                  <p
                    onClick={() => navigate(`/products/${item._id}`)}
                    className={styles.title}
                  >
                    {item.title}
                  </p>
                  {/* <span><Rating name="size-medium" defaultValue={4} className={styles.rating}/>
                                 {item.rating}</span> */}
                  <p className={styles.star}>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                    <span style={{ color: "black" }}>{item.rating}</span>
                  </p>

                  <div>
                    <p>
                      <FaRupeeSign />
                      <span className={styles.pricebold}>
                        {item.originalPrice}
                      </span>
                      &nbsp;&nbsp;
                      <span className={styles.pricelinethrough}>
                        <FaRupeeSign />
                        {`${item.originalPrice + 2000}`}
                      </span>
                      <span>
                        <button
                          onClick={() => {
                            addCartFunc(item);
                            navigate("/payment");
                          }}
                          className={styles.quickbuy}
                        >
                          <img
                            src="	https://static1.hkrtcdn.com/hknext/static/media/pdp/thunder-buy.svg"
                            alt="flash"
                          />
                          Quickbuy
                        </button>
                      </span>
                    </p>
                    <button className={styles.premiumprice}>
                      <img
                        src="https://static1.hkrtcdn.com/hknext/static/media/loyalty/premium-logo-new.svg"
                        alt="crown"
                        className={styles.crownimg}
                      />
                      Premium Member Price: <FaRupeeSign />
                      {item.originalPrice - 400}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Box>
        </div>
      </div>
    </div>
  );
};
