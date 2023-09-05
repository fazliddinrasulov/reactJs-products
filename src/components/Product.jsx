import React, { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import "./Product.css";
import { useAppContext } from "../context";

const Product = ({ product }) => {
  const { myBasket, setMyBasket } = useAppContext();
  const { images, id } = product;
  const [liked, setLiked] = useState(false);
  const handleBasket = () => {
    setLiked((prev) => !liked);
    if (!liked) {
      setMyBasket([...myBasket, product]);
    }
    if (myBasket.find((item) => item.id === id)) {
      const newBasket = myBasket.filter((item) => item.id !== id);
      setMyBasket(newBasket);
    }
  };
  return (
    <article className="single-product">
      <img src={images[0]} alt="" className="img" />
      <span className="like-btn" onClick={handleBasket}>
        {myBasket.find((item) => item.id === id) ? <FaHeart /> : <FaRegHeart />}
      </span>
    </article>
  );
};

export default Product;
