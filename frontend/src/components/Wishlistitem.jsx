import Rating from "@mui/material/Rating";
import style from "../css/wishlist.module.css";
import { add_cart } from "../redux/Cart/cart.actions";
import { useDispatch } from "react-redux";

function Wishlistitem({ x, dele }) {
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

  return (
    <div className={style.mainproductdiv}>
      <div className={style.proimg}>
        <img src={x.img_url} alt="" height={"110"} />
      </div>
      <div>
        <Rating
          name="size-small"
          readOnly
          defaultValue={x.rating}
          style={{ color: "orange" }}
          size="small"
        />
        <p className={style.titlep}>{x.title}</p>
        <div className={style.priceline}>
          <img
            src="https://img2.hkrtcdn.com/react/static/media/loyalty/premium-logo-new.svg"
            alt=""
            height={"18px"}
          />
          <p>₹{x.discountedPrice}</p>
          <p>₹{x.originalPrice}</p>
          <p>20% off</p>
        </div>
        <div className={style.hkline}>
          <img
            src="https://img8.hkrtcdn.com/react/static/media/payment/hk_cash_coin.svg"
            alt=""
            height={"18px"}
          />
          <p>Earn HK cash</p>
          <p>₹{Math.floor((x.discountedPrice * 7) / 100)}</p>
        </div>
      </div>

      <div className={style.deladdbtn}>
        <div onClick={() => dele(x._id)} className={style.removeaddcart}>
          <img
            src="https://img2.hkrtcdn.com/react/static/media/common/empty-delete-icon.svg"
            height={"15px"}
            alt=""
          />{" "}
          <button>Remove</button>
        </div>
        <div onClick={() => addCartFunc(x)} className={style.removeaddcart}>
          <img
            src="https://img2.hkrtcdn.com/react/static/media/common/cart-icon.svg"
            alt=""
            height={"15px"}
          />{" "}
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Wishlistitem;
