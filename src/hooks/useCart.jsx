import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem } from "../store/slice/cart";

function useCart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  function handleAddToCart(item) {
    dispatch(addItem(item));
  }
  function handleRemoveItem(item) {
    dispatch(deleteItem(item));
  }

  return {
    cart,
    handleAddToCart,
    handleRemoveItem,
  };
}

export default useCart;
