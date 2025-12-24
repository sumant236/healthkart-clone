import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { totalCalculate } from "../../redux/Cart/cart.actions";
import { useNavigate } from "react-router-dom";
import style from "../../css/paymentpage.module.css";

function PaymentSuccess() {
  const navigate = useNavigate();

  const selectAddress = useSelector((state) => state.address.selectAddress);

  const total = useSelector((state) => state.cart.total);
  const cart = useSelector((state) => state.cart.cart);

  const [totalPrice, setTotalPrice] = useState(0);
  const [hkcash, sethkcash] = useState(0);

  const [totalDiscount, setTotalDis] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(totalCalculate());
    calculateDiscount(total);
    calculation();

    // eslint-disable-next-line
  }, [total, cart, totalPrice]);

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
  };

  return (
    <>
      <div className={style.successNav}>
        <img
          src="https://i.ibb.co/5FTjg7T/Screenshot-13-removebg-preview.png"
          onClick={() => navigate("/")}
          alt=""
          height={"60px"}
        />
        <div className={style.mainTopDivNavSucc}>
          <div>
            <img
              src="https://i.ibb.co/FHXgRBp/icons8-heart-50.png"
              alt=""
              height={"20px"}
            />
            <p>Trusted by over 2 million customers</p>
          </div>
          <div>
            <img
              src="https://i.ibb.co/1v7pFDb/icons8-security-lock-50.png"
              alt=""
              height={"20px"}
            />
            <p>100% Safe & Secure Payments</p>
          </div>
          <div>
            <img
              src="https://i.ibb.co/dbJw2QF/icons8-assignment-return-50.png"
              alt=""
              height={"20px"}
            />
            <p>14 Days return policy</p>
          </div>
        </div>
      </div>

      <div className={style.successmsg}>
        <img
          src="https://i.ibb.co/QPLrxVb/icons8-done-64.png"
          alt=""
          height={"50px"}
        />
        <p>Thank you</p>
        <p>Your order is placed successfully!</p>
      </div>

      <div className={style.orderandpaydetailssucc}>
        <div className={style.orderDetailsSucc}>
          <div>
            {" "}
            <div className={style.ordersucessh}>Order Details</div>
            <div className={style.orderDetails}>
              <div>
                <p>Status</p>
                <p>Order Total</p>
                <p>Order ID</p>
                <p>Total Items</p>
                <p>HK Cash Earned</p>
              </div>
              <div>
                <p>DEBIT CARD</p>
                <p>Rs. {total}</p>
                <p>HKD-646271-47839227</p>
                <p>{cart.length}</p>
                <p>Rs. {hkcash}</p>
              </div>
            </div>
          </div>

          <div>
            <div className={style.shippingaddsuch}>Shipping Address</div>
            <div className={style.addresssuccessp}>
              <p>
                {selectAddress.name} {selectAddress.mobile}
              </p>
              <p>{selectAddress.address}</p>
              <p>{selectAddress.pincode}</p>
            </div>
          </div>
          <div className={style.infoimposucc}>
            <p>Important Information:</p>
            <p>
              Please find the estimated dispatch and delivery dates below for
              each product.
            </p>
          </div>
        </div>

        <div className={style.mainpaymentDetdicsucc}>
          <div className={style.mainsmallerpaysucc}>
            <p className={style.paymentrighthsucc}>Payment Details</p>
            <div className={style.paymentDetailsDiv}>
              <div className={style.leftpaysucc}>
                <p>Total MRP</p>
                <p>HealthKart price</p>
                <p>Shipping</p>
                <p>Total Discount</p>
                <p>HK Cash redeemed</p>
                <hr />
                <p>Order Total</p>
              </div>
              <div className={style.rightpaysucc}>
                <p>Rs. {totalPrice}</p>
                <p>Rs. {total}</p>
                <p>FREE</p>
                <p>Rs. {totalDiscount}</p>
                <p>Rs. 0</p>
                <hr />
                <p>Rs. {total}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PaymentSuccess;
