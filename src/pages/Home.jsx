import React, { useEffect, useState } from "react";
import ProductTile from "../components/ProductTile";
import { Circles } from "react-loader-spinner";

function Home() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      setIsLoading(true);
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProducts();
  }, []);
  return (
    <div className="max-w-screen-xl w-10/12 mx-auto mt-5 flex justify-center">
      {isLoading ? (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Circles
            height={"120"}
            width={"120"}
            color="rgb(127,29,29)"
            visible={true}
          />
        </div>
      ) : null}
      {products && products.length ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-5">
          {products.map((item) => (
            <ProductTile productItem={item} key={item.id} />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default Home;
