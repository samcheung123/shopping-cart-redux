import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="max-w-screen-xl mx-auto w-8/12 flex justify-between items-center mt-5">
      <h1 className="font-bold text-2xl text-orange-800 ">
        <Link to={"/"}>Redux Shopping Cart</Link>
      </h1>

      <ul className="flex gap-5 font-semibold">
        <li className="hover:text-gray-600 hover:underline transition-all">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="hover:text-gray-600 hover:underline transition-all">
          <Link to={"/cart"}>Cart</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
