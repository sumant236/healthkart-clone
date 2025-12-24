import React, { useEffect, useState } from "react";
import style from "../../css/cartpage.module.css";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";

import { add_cart, totalCalculate } from "../../redux/Cart/cart.actions";
import { Link, useNavigate } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";

function CartPage() {
  const [enterPin, setEnterPin] = useState(false);
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState("");

  const [totalPrice, setTotalPrice] = useState(0);
  const [hkcash, sethkcash] = useState(0);

  const [totalDiscount, setTotalDis] = useState(0);
  const [loyalty, setLoyalty] = useState(0);
  const [totalSave, setTotalSave] = useState(0);

  const [cartEmpty, setCartEmpty] = useState(true);

  const cart = useSelector((state) => state.cart.cart);
  const total = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getCity = (pincode) => {
    fetch(`https://api.postalpincode.in/pincode/${pincode}`)
      .then((res) => res.json())
      .then((re) => setCity(re[0].PostOffice[0].District));
  };

  const calculateDiscount = (totalprice) => {
    let percent = totalprice * (25 / 100);
    let totalamt = percent + totalprice;
    let hkcash = Math.floor(totalprice * (2 / 100));
    setTotalPrice(totalamt);
    sethkcash(hkcash);
  };

  const calculation = () => {
    let totalDis = totalPrice - total;
    let loyal = Math.floor((totalDis * 12) / 100);
    let rem = totalDis - loyal;
    setTotalDis(rem);
    setLoyalty(loyal);
    setTotalSave(totalDis);
  };

  const [hideDiscount, setHideDiscount] = useState(false);

  const [coupon, setCoupon] = useState("");

  useEffect(() => {
    dispatch(totalCalculate());
    calculateDiscount(total);
    calculation();
    if (cart.length === 0) {
      setCartEmpty(false);
    }

    // eslint-disable-next-line
  }, [total, cart, totalPrice]);

  return (
    <>
      <div className={!hideDiscount ? style.background : style.backgroundBlu}>
        <div className={style.maxScreenNav}>
          <div className={style.navMain}>
            <img
              onClick={() => navigate("/")}
              src="https://i.ibb.co/NWKgftw/Screenshot-13.png"
              alt="logo"
              height={"60px"}
            />
            <div className={style.process}>
              <img
                src="https://i.ibb.co/hHt7ppH/icons8-check-circle-50.png"
                alt="currentPage"
                height={"20px"}
              />
              <p>CART</p>
              <hr className={style.hrLine} />

              <img
                src="https://i.ibb.co/hHt7ppH/icons8-check-circle-50.png"
                alt="currentPage"
                height={"20px"}
              />
              <p>ADDRESS</p>
              <hr className={style.hrLine} />

              <img
                src="https://i.ibb.co/hHt7ppH/icons8-check-circle-50.png"
                alt="currentPage"
                height={"20px"}
              />
              <p>PAYMENT</p>
            </div>
          </div>
        </div>

        <div className={style.navforsmaller}>
          <div className={style.navfirstLine}>
            <div className={style.cartleftNav}>
              <AiOutlineArrowLeft onClick={() => navigate("/")} />
              <p>Cart ({cart.length} items)</p>
            </div>
            <div
              onClick={() => navigate("/wishlist")}
              className={style.cartrightNav}
            >
              <FiHeart />
              <p>My Wishlist</p>
            </div>
          </div>
          <div className={style.navsecline}>
            <div className={style.mobileprocess}>
              <img
                src="https://i.ibb.co/hHt7ppH/icons8-check-circle-50.png"
                alt="currentPage"
                height={"20px"}
              />
              <p>CART</p>
              <hr className={style.hrLine} />

              <img
                src="https://i.ibb.co/hHt7ppH/icons8-check-circle-50.png"
                alt="currentPage"
                height={"20px"}
              />
              <p>ADDRESS</p>
              <hr className={style.hrLine} />

              <img
                src="https://i.ibb.co/hHt7ppH/icons8-check-circle-50.png"
                alt="currentPage"
                height={"20px"}
              />
              <p>PAYMENT</p>
            </div>
          </div>
        </div>

        {cartEmpty ? (
          <div className={style.divider}>
            <div className={style.leftsection}>
              <div className={style.cartTop}>
                <h3>My Cart ({cart.length} items)</h3>

                <div
                  onClick={() => navigate("/wishlist")}
                  className={style.wishlistbtn}
                >
                  <img
                    src="https://i.ibb.co/vd1SVV0/icons8-heart-32.png"
                    height={"20px"}
                    alt=""
                  />
                  <h3>My Wishlist</h3>
                </div>
              </div>

              <div className={style.pincodeBoxsmall}>
                <div className={style.finalpayblesmall}>
                  <p>Final Payable</p>
                  <p>₹{total}</p>
                </div>
                {!enterPin ? (
                  <div className={style.pincodeDivsmall}>
                    <img
                      src="https://i.ibb.co/C7p2R7F/icons8-location-48.png"
                      alt=""
                      height={"18px"}
                    />
                    <input
                      type="text"
                      placeholder="Enter Pin Code"
                      onChange={(e) => setPincode(e.target.value)}
                      value={pincode}
                    />
                    <button
                      onClick={() => {
                        getCity(pincode);
                        setEnterPin(!enterPin);
                      }}
                    >
                      Check
                    </button>
                  </div>
                ) : (
                  <div className={style.pincodeShowsmall}>
                    <img
                      src="https://i.ibb.co/C7p2R7F/icons8-location-48.png"
                      alt=""
                      height={"18px"}
                    />
                    <p>
                      Delivery to{" "}
                      <b>
                        {pincode}, {city.toUpperCase()}
                      </b>
                    </p>
                    <button onClick={() => setEnterPin(!enterPin)}>
                      Change
                    </button>
                  </div>
                )}
              </div>

              <div
                className={style.discountBoxsmall}
                onClick={() => setHideDiscount(true)}
              >
                <div className={style.disocountDivsmall}>
                  <img
                    src="https://i.ibb.co/cwVtv17/icons8-discount-50.png"
                    alt=""
                    height={"25px"}
                  />
                  <p>Apply Coupon</p>
                  <img
                    className={style.discountarrowsmall}
                    src="https://i.ibb.co/st0gMxP/icons8-right-arrow-90-removebg-preview.png"
                    alt=""
                    height={"18px"}
                  />
                </div>
              </div>

              <div className={style.productsDiv}>
                {cart.map((product) => {
                  return (
                    <div key={product.id}>
                      <Product product={product} />
                    </div>
                  );
                })}
              </div>

              <Link className={style.countinueShop} to={"/"}>
                Continue Shopping
              </Link>
            </div>

            <div className={style.rightsection}>
              <div className={style.pincodeBox}>
                {!enterPin ? (
                  <div className={style.pincodeDiv}>
                    <img
                      src="https://i.ibb.co/C7p2R7F/icons8-location-48.png"
                      alt=""
                      height={"18px"}
                    />
                    <input
                      type="text"
                      placeholder="Enter Pin Code"
                      onChange={(e) => setPincode(e.target.value)}
                      value={pincode}
                    />
                    <button
                      onClick={() => {
                        getCity(pincode);
                        setEnterPin(!enterPin);
                      }}
                    >
                      Check
                    </button>
                  </div>
                ) : (
                  <div className={style.pincodeShow}>
                    <img
                      src="https://i.ibb.co/C7p2R7F/icons8-location-48.png"
                      alt=""
                      height={"18px"}
                    />
                    <p>
                      Delivery to{" "}
                      <b>
                        {pincode}, {city.toUpperCase()}
                      </b>
                    </p>
                    <button onClick={() => setEnterPin(!enterPin)}>
                      Change
                    </button>
                  </div>
                )}
              </div>

              <div className={style.discountBox}>
                <div
                  className={style.disocountDiv}
                  onClick={() => setHideDiscount(true)}
                >
                  <img
                    src="https://i.ibb.co/cwVtv17/icons8-discount-50.png"
                    alt=""
                    height={"25px"}
                  />
                  <p>Apply Coupon</p>
                  <img
                    className={style.discountarrow}
                    src="https://i.ibb.co/st0gMxP/icons8-right-arrow-90-removebg-preview.png"
                    alt=""
                    height={"18px"}
                  />
                </div>
              </div>

              <div
                className={style.proceedbtndiv}
                onClick={() => navigate("/address")}
              >
                <button onClick={() => navigate("/address")}>
                  Procced to Pay ₹{total}
                </button>
              </div>

              <div className={style.ordersumbox} id="ordersum">
                <div className={style.ordersumdiv}>
                  <p>Order Summary</p>
                </div>

                <div className={style.orderinnerdiv}>
                  <div className={style.leftOrderdet}>
                    <p>Total MRP</p>
                    <p>
                      Total Discounts{" "}
                      <img
                        src="https://i.ibb.co/pyq0ZMG/icons8-info-50-1.png"
                        alt=""
                        height={"12px"}
                      />{" "}
                    </p>
                    <p>Loyalty Savings</p>
                    <p>Shipping Charges</p>
                  </div>
                  <div className={style.rightOrderdet}>
                    <p>₹{totalPrice}</p>
                    <p className={style.discountRed}>- ₹{totalDiscount}</p>
                    <p className={style.discountRed}>- ₹{loyalty}</p>
                    <p>FREE</p>
                  </div>
                </div>
                <hr className={style.hrforsummary} />
                <div className={style.finalPayable}>
                  <p>Final Payable</p>
                  <p>₹{total}</p>
                </div>
                <p className={style.savetitle}>
                  You will Save ₹{totalSave} & Earn ₹{hkcash} HK Cash on this
                  order
                </p>
              </div>

              <p className={style.copyright}>
                Copyright © 2022, HealthKart.com, or its affiliates
              </p>
            </div>
          </div>
        ) : (
          <div className={style.nocartBox}>
            <div className={style.noproductDiv}>
              <IconContext.Provider value={{ color: "grey", size: "100px" }}>
                <div>
                  <BsFillCartFill />
                </div>
              </IconContext.Provider>
              <div className={style.noproductinner}>
                <h1>No Product, No Results.</h1>
                <p>You need to add something to your cart</p>
                <button onClick={() => navigate("/")}>BACK TO SHOPPING</button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className={style.buttomPaynow}>
        <div className={style.viewsum}>
          <p>₹{total}</p>
          <a href="#ordersum">View Summary</a>
        </div>
        <button
          onClick={() => navigate("/address")}
          className={style.proceedpaybotm}
        >
          Proceed to Pay
        </button>
      </div>

      <div
        className={
          hideDiscount ? style.discountpagediv : style.disountpagedivsec
        }
      >
        <div className={style.applycoupon}>
          <img
            onClick={() => setHideDiscount(false)}
            className={style.canceldiscount}
            src="https://i.ibb.co/hXPZxc7/icons8-cross-48.png"
            alt=""
          />
          <p>Apply Coupon</p>
          <div>
            <input
              type="text"
              placeholder="Enter Coupon Code"
              value={coupon}
              onChange={(e) => setCoupon(e.currentTarget.value)}
            />
            <button>Apply</button>
          </div>
        </div>
        <div className={style.mainmiddleoffers}>
          <p className={style.specialdiscount}>Special Offers for you</p>
          <div className={style.mainmiddleoffers}>
            <div className={style.firstofferdis}>
              <div className={style.firstdicountpro}>
                <img
                  src="https://img8.hkrtcdn.com/14648/prd_1464767-HealthKart-Omega-3-1000mg-with-180mg-EPA-and-120mg-DHA-90-softgels_o.jpg"
                  height={"55px"}
                  alt=""
                />
                <div className={style.detailsofproduct}>
                  <p>Additional Rs.50 off on Healthkart Omega</p>
                  <p>
                    Add HealthKart Omega 3 1000mg with 180mg EPA and 120mg DHA,
                    90 softgels at cart and get Rs 451 off on MRP.
                  </p>
                </div>
              </div>
              <button
                onClick={() =>
                  dispatch(
                    add_cart({
                      id: 9998,
                      title:
                        "HealthKart HK Vitals Omega 3 1000mg with 180mg EPA and 120mg DHA",
                      price: 509,
                      img: "https://img8.hkrtcdn.com/14648/prd_1464767-HealthKart-Omega-3-1000mg-with-180mg-EPA-and-120mg-DHA-90-softgels_o.jpg",
                      qty: 1,
                      initPrice: 509,
                      discount: "0%",
                      discountedPrice: 459,
                    })
                  )
                }
                className={style.addcartbtndis}
              >
                Add To Cart
              </button>
            </div>
            <div className={style.firstofferdis}>
              <div className={style.firstdicountpro}>
                <img
                  src="https://img10.hkrtcdn.com/12771/prd_1277019-TrueBasics-Lung-Detox-30-capsules_o.jpg"
                  height={"55px"}
                  alt=""
                />
                <div className={style.detailsofproduct}>
                  <p>Additional Rs.35 off on TB Lung Detox 30 Tablets</p>
                  <p>
                    Buy any product in below categories and get TrueBasics Lung
                    Detox 30 tablet(s)
                  </p>
                </div>
              </div>
              <button
                onClick={() =>
                  dispatch(
                    add_cart({
                      id: 9999,
                      title: "TrueBasics Lung Detox,  30 tablet(s)",
                      price: 633,
                      img: "https://img10.hkrtcdn.com/12771/prd_1277019-TrueBasics-Lung-Detox-30-capsules_o.jpg",
                      qty: 1,
                      initPrice: 633,
                      discount: "0%",
                      discountedPrice: 598,
                    })
                  )
                }
                className={style.addcartbtndis}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartPage;
