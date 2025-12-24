import React, { useState } from "react";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Rating from "@mui/material/Rating";
import styles from "./LandingPage.module.css";
import DoneIcon from "@mui/icons-material/Done";
import { add_cart } from "../../redux/Cart/cart.actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Container = ({ item }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();
  if (open) {
    var displayDetails = {
      display: "block",
      position: "absolute",
    };
    var containerHover = {
      boxShadow: "1px 0px 10px 5px #E6E6E6",
    };
    var buttonHover = {
      backgroundColor: "#00C2C1",
    };
  }

  const dispatch = useDispatch();

  const addCartFunc = (x) => {
    const obj = {
      id: x._id,
      title: x.title,
      price: x.originalPrice,
      img: x.img_url,
      qty: 1,
      initPrice: x.originalPrice,
      discount: x.discount,
      discountedPrice: x.discountedPrice,
    };

    dispatch(add_cart(obj));
  };

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

  return (
    <div>
      <div key={item.id}>
        <div
          className={styles.container}
          style={containerHover}
          onMouseEnter={handleOpen}
          onMouseLeave={handleClose}
        >
          <div className={styles.benefitsWrapper} style={displayDetails}>
            <h5>Benefits</h5>
            <div>
              <div className={styles.benefitsTitles}>
                {item.Benefits.map((benefit, index) => (
                  <div className={styles.benefitsList} key={index}>
                    <DoneIcon sx={{ color: "#00AFAE", fontSize: "12px" }} />{" "}
                    <p>{benefit}</p>
                  </div>
                ))}
              </div>
              <div className={styles.ingredientsWrapper}>
                <p style={{ textAlign: "left", marginLeft: "5px" }}>
                  {item.productDetails}
                </p>
                <div className={styles.ingredients}>
                  {item.containsWeight.map((val, index) => (
                    <h6 key={index}>{val}</h6>
                  ))}
                </div>
                <div className={styles.ingredients}>
                  {item.containsCal.map((val, index) => (
                    <h5 key={index}>{val}</h5>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.imageWrapper}>
            <div
              onClick={(e) => {
                e.stopPropagation();
                handleWishList(item);
              }}
              className={styles.wishlistIcon}
            >
              <img
                src="https://static1.hkrtcdn.com/hknext/static/media/common/variant/wishlist/heart_plus.svg"
                alt="wishlist-icon"
              />
            </div>
            <img
              src={item.img_url}
              className={styles.itemImage}
              alt="Item-Images"
            ></img>
            <div>
              <button className={styles.discountBtn}>{item.discount}</button>
            </div>
          </div>
          <div className={styles.detailsWrapper}>
            <h5
              className={styles.title}
              onClick={() => navigate(`/products/${item._id}`)}
            >
              {item.title}
            </h5>
            {item.rating ? (
              <div className={styles.ratingWrapper}>
                <Rating
                  value={item.rating}
                  readOnly
                  precision={0.1}
                  size="small"
                  sx={{ color: "#008497" }}
                ></Rating>
                <h6 className={styles.rating}>{item.rating}</h6>
              </div>
            ) : (
              <div className={styles.ratingWrapper}></div>
            )}
            <div className={styles.priceAndAdd}>
              <div className={styles.price}>
                <h5 className={styles.discountPrice}>
                  <CurrencyRupeeIcon
                    sx={{ color: "black", fontSize: "12px" }}
                  />
                  {item.discountedPrice}
                </h5>
                <h5 className={styles.originalPrice}>
                  <CurrencyRupeeIcon
                    sx={{ color: "#929495", fontSize: "10px" }}
                  />
                  {item.originalPrice}
                </h5>
              </div>
              <div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    addCartFunc(item);
                  }}
                  className={styles.addBtn}
                  style={buttonHover}
                >
                  <div
                    style={{
                      display: "flex",
                      width: "35px",
                      margin: "auto",
                      cursor: "pointer",
                    }}
                  >
                    <AddShoppingCartIcon
                      sx={{ color: "#004b5d", fontSize: "12px" }}
                    />
                    <p style={{ margin: "2px" }}>ADD</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.premiumPriceBox}>
          <h5 style={{ margin: "0px", display: "flex", alignItems: "center" }}>
            Premium Price:
            <CurrencyRupeeIcon sx={{ color: "black", fontSize: "14px" }} />
            {item.premiumPrice}
          </h5>
          <LockOutlinedIcon sx={{ fontSize: "12px" }} />
        </div>
      </div>
    </div>
  );
};
