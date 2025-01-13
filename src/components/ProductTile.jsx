import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem } from "../store/slice/cart";
import useCart from "../hooks/useCart";

function ProductTile({ productItem }) {
  // const cart = useSelector((state) => state.cart);
  // const cart = useSelector((state) => state.cart);
  // const dispatch = useDispatch();
  // function handleAddToCart() {
  //   dispatch(addItem(productItem));
  //   console.log(cart);
  // }
  // function handleRemoveItem() {
  //   dispatch(deleteItem(productItem));
  // }
  const { cart, handleAddToCart, handleRemoveItem } = useCart();

  return (
    <div className="w-[260px] border-gray-700 border rounded-lg p-4 h-[300px] flex flex-col items-start gap-2">
      <div className="h-[120px] w-full">
        <img
          className="object-cover w-full h-full "
          src={productItem.thumbnail}
          alt={productItem.title}
        />
      </div>
      <div className="truncate w-full">{productItem.title}</div>
      <div className="w-full">${productItem.price}</div>

      {cart.some((item) => item.id === productItem.id) ? (
        <button
          className="bg-slate-600 text-white font-semibold rounded-lg hover:bg-slate-400 px-5 py-3"
          onClick={() => handleRemoveItem(productItem)}
        >
          Remove Item
        </button>
      ) : (
        <button
          className="bg-black text-white font-semibold rounded-lg hover:bg-black/70 px-5 py-3"
          onClick={() => handleAddToCart(productItem)}
        >
          Add to cart
        </button>
      )}
    </div>
  );
}

export default ProductTile;
