import React from "react";
import { useDispatch } from "react-redux";
import { deleteItem } from "../store/slice/cart";
import useCart from "../hooks/useCart";

function CartTile({ productItem }) {
  // const dispatch = useDispatch();
  // function handleRemoveItem() {
  //   dispatch(deleteItem(productItem));
  // }
  const { handleRemoveItem } = useCart();

  return (
    <div className="w-full border-gray-700 border rounded-lg p-4 h-[160px] flex justify-between items-start gap-2">
      <div className="h-full w-[100px]">
        <img
          className="object-cover w-full h-full "
          src={productItem.thumbnail}
          alt={productItem.title}
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="truncate w-full">{productItem.title}</div>
        <div className="w-full">${productItem.price}</div>
        <button
          className="bg-slate-600 text-white font-semibold rounded-lg hover:bg-slate-400 px-5 py-3"
          onClick={() => handleRemoveItem(productItem)}
        >
          Remove Item
        </button>
      </div>
    </div>
  );
}

export default CartTile;
