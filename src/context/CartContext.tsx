import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducer/cartReducer";
import { Product } from "../models/product";

interface CartState {
  cartList: Product[];
  total: number;
}

const initialState: CartState = {
  cartList: [],
  total: 0,
};

const CartContext = createContext(
  initialState as {
    cartList: Product[];
    total: number;
    addToCart: (product: Product) => void;
    removeFromCart: (product: Product) => void;
  }
);

interface CartProviderProps {
  children: React.ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product: Product) => {
    const updatedCartList = state.cartList.concat(product);

    dispatch({
      type: "ADD_TO_CART",
      payload: {
        products: updatedCartList,
      },
    });

    updateTotal(updatedCartList);
  };

  const removeFromCart = (product: Product) => {
    const updatedCartList = state.cartList.filter(
      (current: Product) => current.id !== product.id
    );

    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        products: updatedCartList,
      },
    });

    updateTotal(updatedCartList);
  };

  const updateTotal = (products: Product[]) => {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
      total += products[i].price;
    }

    dispatch({
      type: "UPDATE_TOTAL",
      payload: {
        total,
      },
    });
  };

  const value = {
    cartList: state.cartList,
    total: state.total,
    addToCart,
    removeFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};
