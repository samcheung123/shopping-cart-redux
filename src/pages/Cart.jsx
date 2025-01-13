import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartTile from "../components/CartTile";
import useCart from "../hooks/useCart";

function Cart() {
  // const cart = useSelector((state) => state.cart);
  const { cart } = useCart();
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  useEffect(() => {});

  return (
    <div className="max-w-screen-xl flex justify-between gap-1 px-10 items-center mx-auto mt-5 ">
      <div className="flex flex-col gap-2 w-9/12">
        {cart.map((item) => (
          <CartTile productItem={item} key={item.id} />
        ))}
      </div>
      <div className="max-w-[150px]">
        <div>Total Quantity: {cart.length}</div>
        <div>Total Amount: {totalAmount}</div>
      </div>
    </div>
  );
}

export default Cart;
