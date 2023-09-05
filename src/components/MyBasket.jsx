import React from "react";
import { useAppContext } from "../context";
import Product from "./Product";

const MyBasket = () => {
  const { myBasket } = useAppContext();
  return (
    <main>
      <div className="products">
        {myBasket.length === 0 && (
          <h1 className="title">You don't have any product in basket</h1>
        )}
        {myBasket.map((item, index) => {
          return <Product key={index} product={item} />;
        })}
      </div>
    </main>
  );
};

export default MyBasket;
