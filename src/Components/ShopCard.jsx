import React, { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { DELETE } from "../Redux/Action";

const ShopCard = ({ close }) => {
  const orginalCount = useSelector((state) => state.count);
  const orginalItems = useSelector((state) => state.items);
  const dispach = useDispatch();

  return (
    <div className="shopC">
      <div className="shopC_icon">
        <MdClose onClick={() => close(false)} />
      </div>
      <div className="shopC_items">
        {orginalCount === 0 ? (
          <p> سبد خرید شما خالی است</p>
        ) : (
          <>
            <p> تعداد کالا : {orginalItems} عدد</p>
            <p> مبلغ کل خرید : {orginalCount + "000"} تومان</p>
            <button className="btn btn-primary mt-1">پرداخت</button>
            <button
              className="btn btn-warning mr-1 mt-1 "
              onClick={()=>dispach(DELETE())}
            >
              {" "}
              حذف{" "}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ShopCard;
