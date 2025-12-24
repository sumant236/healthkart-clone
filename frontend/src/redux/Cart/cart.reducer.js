import {
  addQty,
  deleteValue,
  removeQty,
  setTotal,
  updateValue,
} from "../../utils/localStorage";
import {
  ADD_QTY,
  ADD_TO_CART,
  DELETE_TO_CART,
  REMOVE_QTY,
  UPDATE_TOTAL,
} from "./cart.actionTypes";
import { initialState } from "./cart.constants";

function sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i].discountedPrice;
  }
  return sum;
}

export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART: {
      setTotal("total", sum(state.cart));
      updateValue("cart", payload);
      return {
        ...state,
        cart: [...state.cart, payload],
        total: sum(state.cart),
      };
    }

    case DELETE_TO_CART: {
      setTotal("total", sum(state.cart));
      deleteValue("cart", payload);
      return {
        ...state,
        cart: state.cart.filter((x) => x.id !== payload),
        total: sum(state.cart),
      };
    }

    case ADD_QTY: {
      addQty("cart", payload);
      setTotal("total", sum(state.cart));
      return {
        ...state,
        cart: state.cart.map((x) => {
          if (x.id === payload) {
            x.qty += 1;
            x.price = x.price + x.initPrice;
            return x;
          } else {
            return x;
          }
        }),
        total: sum(state.cart),
      };
    }
    case REMOVE_QTY: {
      removeQty("cart", payload);
      setTotal("total", sum(state.cart));
      return {
        ...state,
        cart: state.cart.map((x) => {
          if (x.id === payload) {
            x.qty -= 1;
            x.price = x.price - x.initPrice;
            return x;
          } else {
            return x;
          }
        }),
        total: sum(state.cart),
      };
    }

    case UPDATE_TOTAL: {
      setTotal("total", sum(state.cart));
      return {
        ...state,
        total: Number(sum(state.cart)),
      };
    }

    default: {
      return state;
    }
  }
};
