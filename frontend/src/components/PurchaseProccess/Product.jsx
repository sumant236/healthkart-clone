import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  add_qty,
  remove_cart,
  remove_qty,
} from "../../redux/Cart/cart.actions";
import style from "../../css/product.module.css";
import { useNavigate } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { AiOutlineMinus } from "react-icons/ai";
import axios from "axios";

function Product({ product }) {
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [hkcash, sethkcash] = useState(0);
  const navigate = useNavigate();

  const calculateDiscount = (product) => {
    let prodDiscount = product.discount.split("%")[0];
    let percent = Number(prodDiscount);
    setDiscount(percent);
    let totalamt = product.discountedPrice;
    let hkcash = Math.floor(product.price * (2 / 100));
    setTotalPrice(totalamt);
    sethkcash(hkcash);
  };

  useEffect(() => {
    calculateDiscount(product);
  }, [product]);

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
    <div className={style.mainProductDiv}>
      <div className={style.mainDiv}>
        <div>
          <img
            className={style.productImg}
            src={product.img}
            alt="product-view"
            height={"100px"}
          />
          <div className={style.deliveryDate}>
            <p>Delivery by</p>
            <p>5 Apr</p>
          </div>
        </div>

        <div className={style.middlesection}>
          <h5
            onClick={() => navigate(`/products/${product.id}`)}
            className={style.phead}
          >
            {product.title}
          </h5>
          <div className={style.priceLine}>
            <img
              src="https://i.ibb.co/1mzp32d/premium-logo-new.png"
              height={"22px"}
              alt="premium-logo"
            />
            <h3 className={style.totalP}>₹{product.price}</h3>
            <h5 className={style.price}>₹{totalPrice}</h5>
            <h3 className={style.discount}>{discount}% Off</h3>
            <div className={style.hkcashline}>
              <img
                src="https://i.ibb.co/w0bmRn3/hkcash.png"
                alt=""
                height={"12px"}
              />
              <div className={style.internalhk}>
                <h3 className={style.hktitle}>HK Cash</h3>
                <h3 className={style.hkcash}>₹{hkcash}</h3>
              </div>
            </div>
          </div>

          <div className={style.addminusbtns}>
            <button
              className={style.addbtn}
              onClick={() =>
                product.qty > 1 && dispatch(remove_qty(product.id))
              }
            >
              <AiOutlineMinus />
            </button>
            <input className={style.qtyinput} type="text" value={product.qty} />
            <button
              className={style.minusbtn}
              onClick={() => dispatch(add_qty(product.id))}
            >
              <FiPlus />
            </button>
          </div>
        </div>

        <div className={style.delwishbtns}>
          <button>
            <img
              src="https://i.ibb.co/1675Lqn/icons8-heart-24-3.png "
              height={"20.2px"}
              alt=""
            />
          </button>
          <button onClick={() => dispatch(remove_cart(product.id))}>
            <img
              src="https://i.ibb.co/PMXXZZz/icons8-delete-24.png"
              height={"19px"}
              alt=""
            />
          </button>
        </div>
      </div>
      <div className={style.delandwishbtnsmaller}>
        <button onClick={() => dispatch(remove_cart(product.id))}>
          <img
            src="https://i.ibb.co/PMXXZZz/icons8-delete-24.png"
            height={"20.2px"}
            alt=""
          />
          Remove
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleWishList(product);
          }}
        >
          <img
            src="https://i.ibb.co/1675Lqn/icons8-heart-24-3.png "
            height={"19px"}
            alt=""
          />
          Move to Wishlist
        </button>
      </div>
    </div>
  );
  // https://i.ibb.co/NWWXC6p/icons8-plus-48-1.png
  // https://i.ibb.co/bNxLvfZ/icons8-minus-48.png
}

export default Product;
