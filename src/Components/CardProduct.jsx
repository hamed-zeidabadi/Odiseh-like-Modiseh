import React from "react";
import { FaPlus } from "react-icons/fa";

const CardProduct = ({ title, discount, image, price, Add_TO }) => {
  return (
    <div className="card_product ">
      <p className="card_product_price"> {price + ".000"} تومان </p>
      <img src={image} alt="shoes" className="card_product_img" />
      <p className="card_product_discount">{discount}</p>
      <button className="btn btn-danger mb-1 ">{title}</button>
      <button className="btn_i btn btn-primary mb-1">
        <FaPlus className="btn_i_item" onClick={() => Add_TO(price)} />
      </button>
    </div>
  );
};

export default CardProduct;
