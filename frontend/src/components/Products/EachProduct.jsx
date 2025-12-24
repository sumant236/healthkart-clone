import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import Styles from "../../css/Products/EachProduct.module.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import axios from "axios";
import { Reviews } from "./Reviews";
import NavbarTopSec from "../NavbarTopSec";
import { Navbar } from "../Navbar";
import { useDispatch } from "react-redux";
import { add_cart } from "../../redux/Cart/cart.actions";

export default function EachProduct() {
  const [user, setUser] = useState({});
  const [count, setCount] = useState(1);
  const pharms = useParams();
  useEffect(() => {
    if (pharms.id) {
      fetch(
        `https://healthkart-clone-backend.onrender.com/products/${pharms.id}`
      )
        .then((r) => r.json())
        .then((data) => setUser(data));
    }
  }, [pharms]);

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

  const dispatch = useDispatch();

  const addCartFunc = (x) => {
    const obj = {
      id: x._id,
      title: x.title,
      price: x.originalPrice,
      img: x.img_url,
      qty: count,
      initPrice: x.originalPrice,
    };

    dispatch(add_cart(obj));
  };

  return (
    <div>
      <NavbarTopSec />
      <Navbar />
      <div className={Styles.container}>
        <div className={Styles.containerImage}>
          <img src={user.img_url} alt="" />
          <div className={Styles.imgDisp}>
            <img src={user.img_url} alt="" />
            <img src={user.img_url} alt="" />
            <img src={user.img_url} alt="" />
            <img src={user.img_url} alt="" />
          </div>
          <button
            className={Styles.wishlist}
            onClick={() => {
              handleWishList(user);
            }}
          >
            <FavoriteBorderIcon className={Styles.wishlistLogo} />
            Add to wishlist
          </button>
        </div>

        <div className={Styles.containerData}>
          <div>
            <h3 className={Styles.byProduct1}>{user.title}</h3>
            <p className={Styles.byProduct}>
              By <span>HealthKart</span>
            </p>
            <h5 className={Styles.rate}>
              {user.rating}{" "}
              <img
                src="https://static1.hkrtcdn.com/hknext/static/media/pdp/star-filled-new.svg"
                alt=""
              />{" "}
            </h5>
            <button className={Styles.offer}>{`${Math.floor(
              (user.originalPrice - user.discountedPrice) / 100
            )}% OFF`}</button>
            <div className={Styles.price}>
              <h2>{`₹${user.discountedPrice}`}</h2>
              <h2>{user.originalPrice}</h2>
              <p>
                +{" "}
                <img
                  src="https://static1.hkrtcdn.com/hknext/static/media/common/hk-cash-yellow.svg"
                  alt=""
                />{" "}
                Get HK Cash +₹175
              </p>
            </div>
            <div className={Styles.premium}>
              <img
                src="https://static1.hkrtcdn.com/hknext/static/media/loyalty/premium-logo-new.svg"
                alt=""
              />
              <p>Premium Member Price : ₹{user.premiumPrice}</p>
            </div>
            <div className={Styles.offers}>
              <p>3 interent free payments of ₹175</p>
              <ErrorOutlineIcon className={Styles.eme} />
            </div>
            <div className={Styles.offers}>
              <p>+ Get 10% cashback up to ₹500</p>
              <ErrorOutlineIcon className={Styles.eme} />
            </div>
            <div className={Styles.buy}>
              <div className={Styles.counter}>
                <button
                  onClick={() => {
                    if (count > 1) {
                      setCount(count - 1);
                    }
                  }}
                >
                  -
                </button>
                <p>{count}</p>
                <button onClick={() => setCount(count + 1)}>+</button>
              </div>
              <button
                className={Styles.cartAdd}
                onClick={() => addCartFunc(user)}
              >
                <img
                  src="https://static1.hkrtcdn.com/hknext/static/media/pdp/add-to-cart-black.svg"
                  alt=""
                />{" "}
                ADD TO CART
              </button>
              <button className={Styles.directBuy}>
                <img
                  src="https://static1.hkrtcdn.com/hknext/static/media/pdp/thunder.svg"
                  alt=""
                />{" "}
                QUICK BUY
              </button>
            </div>
            <div className={Styles.weight}>
              <p>WEIGHT</p>
              {
                user?.containsWeight?.map((r) => {
                  return (
                    <button className={Styles.weightButton}>{`${r} lb`}</button>
                  );
                })
              }
            </div>
          </div>

          {/* <div className={Styles.delivery} >
              <p>Delivery Option</p>
              <div className={Styles.input} >
                   <input type="text" placeholder="Enter Pincode" />
                   <button>Check</button>
              </div>
              <p><GpsFixedIcon style={{fontSize:"13px"}} /> USE MY LOCATION</p>
              <p><DoneIcon style={{fontSize:"13px"}}/> Free Shiping</p>
              <p><DoneIcon style={{fontSize:"13px"}}/> Cash on Delivery Available</p>
              <p><DoneIcon style={{fontSize:"13px"}}/> 14 days Return</p>
        </div>       */}
          <div className={Styles.sponsor}>
            <img
              src="https://static1.hkrtcdn.com/hknext/static/media/pdp/fssai.png"
              alt=""
            />
            <p>10015064000576</p>
          </div>
        </div>
      </div>
      {/* content ends */}
      <Reviews />
    </div>
  );
}
