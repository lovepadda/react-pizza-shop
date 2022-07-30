import React, { useReducer } from "react";

import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_ALL_FROM_CART } from "./types";
import Context from "./Context";
import Reducer from "./Reducer";

export default function GlobalState(props) {
  const products = [
    
    {
      id: 3,
      title: 'Supreme Pizza',
      imageURL: "https://i.ibb.co/ZXNwhLy/4812-jpg-wh860.jpg",
      price: 19.99,
    },
    {
      id: 4,
      title: 'Hawaiian Paradise',
      imageURL: "https://i.ibb.co/g7jMQmV/fernando-andrade-P76tr-HTWDE-unsplash.jpg",
      price: 16.99,
    },
    {
      id: 5,
      title: 'Veggie Overload',
      imageURL: "https://i.ibb.co/QPsdcF9/foad-roshan-Y6-Ogisi-GBj-M-unsplash.jpg",
      price: 14.99,
    },
    {
      id: 6,
      title: 'Pepperoni Pizza',
      imageURL: "https://i.ibb.co/7vSBs2c/fernando-andrade-33-GPuo-FI7v8-unsplash.jpg",
      price: 19.99,
    },
    {
      id: 3,
      title: 'Cherry Cake',
      imageURL: "https://i.ibb.co/bN0ZKsW/jacob-thomas-6j-Hpc-BPw7i8-unsplash.jpg",
      price: 19.99,
    },
    {
      id: 4,
      title: 'Veggie Supreme',
      imageURL: "https://i.ibb.co/8x9B0BM/Pepperoni-pizza-with-fresh-ingredients-isolated-on-white-background-top-view-Banner-or-wallpaper-n.jpg",
      price: 16.99,
    },
    {
      id: 5,
      title: 'Veggie and Fetta',
      imageURL: "https://i.ibb.co/9Ywg8bv/31900411-pizza-margherita-on-dark-wooden-background-top-view.webp",
      price: 14.99,
    },
    {
      id: 6,
      title: 'Chocolate Donut',
      imageURL: "https://i.ibb.co/s5dZP3t/kobby-mendez-WXJ33-HOrzv-E-unsplash.jpg",
      price: 19.99,
    },
    
  
  ];

  const [state, dispatch] = useReducer(Reducer, { carts: [] });

  // # add product to cart
  const addProductToCart = (product) => {
    dispatch({
      type: ADD_TO_CART,
      payload: product,
    });
  };

  // # remove product from cart
  const removeProductFromCart = (productID) => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: productID,
    });
  };

  // # clear all product from cart
  const clearCart = () => {
    dispatch({
      type: CLEAR_ALL_FROM_CART,
    });
  };

  return (
    <Context.Provider
      value={{
        products: products,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
        clearCart: clearCart,
        carts: state.carts,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
