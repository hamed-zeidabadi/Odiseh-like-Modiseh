import React from "react";
import "../Scss/Home.scss";
import { MdClose } from "react-icons/md";

const Sidebar = ({ close }) => {
  return (
    <div className="sidebar">
      <div className="sidebar_icon">
        <MdClose onClick={() => close(false)} />
      </div>
      <div className="sidebar_item">
        <ul>
          <li>
            <a href="#">خانه</a>
          </li>
          <li>
            <a href="#">راهنمای خرید</a>
          </li>
          <li>
            <a href="#">قوانین خرید</a>
          </li>
          <li>
            <a href="#">تماس با ما</a>
          </li>
          <li>
            <a href="#">ورود</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
