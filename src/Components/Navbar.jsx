import React, { useState, useEffect } from "react";
import "../Scss/Home.scss";
import { FaInstagram, FaRocketchat, FaShoppingCart } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import Sidebar from "./Sidebar.jsx";
import ShopCard from "./ShopCard";
import ChatBox from "./ChatBox";
import { useSelector, useDispatch } from "react-redux";
import { SEARCH } from "../Redux/Action";

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  const [isOpen2, setisOpen2] = useState(false);
  const [isOpen3, setisOpen3] = useState(false);
  const [badge, setbadge] = useState(0);
  const [input, setInput] = useState("");
  const orginalItems = useSelector((state) => state.items);
  const dispach = useDispatch();

  const showNavHandler = () => {
    setisOpen2(false);
    setisOpen3(false);
    setisOpen(true);
  };
  const showCardHandler = () => {
    setisOpen(false);
    setisOpen3(false);
    setisOpen2(true);
  };
  const showChatBoxHandler = () => {
    setisOpen2(false);
    setisOpen(false);
    setisOpen3(true);
  };
  const closeHandler = (isclose) => {
    setisOpen(isclose);
  };
  const closeCardHandler = (isclose) => {
    setisOpen2(isclose);
  };
  const closeChatBoxHandler = (isclose) => {
    setisOpen3(isclose);
  };
  const openChatBoxHandler = (isclose) => {
    setisOpen3(isclose);
  };

  useEffect(() => {
    _badgeUpdeteHandler();
  }, [badge, orginalItems]);
  useEffect(() => {
    dispach(SEARCH(input));
  }, [input]);

  const _badgeUpdeteHandler = () => {
    setbadge(orginalItems);
  };

  if (isOpen && isOpen3) return setisOpen(false);

  const inputChangeHandler = async (e) => {
    e.preventDefault();
    const userData = await e.target.value;
    setInput(userData);
  };

  return (
    <div className="navbar">
      {isOpen ? <Sidebar close={closeHandler} /> : null}
      {isOpen2 ? <ShopCard close={closeCardHandler} /> : null}
      {isOpen3 ? (
        <ChatBox close={closeChatBoxHandler} isOpenHandler={isOpen3} />
      ) : (
        <ChatBox open={openChatBoxHandler} isOpenHandler={isOpen3} />
      )}
      <div className="navItem">
        <MdMenu className="menu" onClick={showNavHandler} />
      </div>
      <div className="search">
        <input
          type="search"
          name="serach"
          onChange={inputChangeHandler}
          placeholder="  تایپ کنید مثلا  'ورزشی ' ..."
        />
      </div>
      <div className="icon">
        <p
          className={
            badge === 0
              ? "icon_badge badge badge-pill badge-pink text-white"
              : "icon_badge badge badge-pill badge-primary  text-white "
          }
          onClick={() => _badgeUpdeteHandler}
        >
          {badge}
        </p>
        <FaRocketchat
          className="icon_item icon_item_chat"
          onClick={showChatBoxHandler}
        />
        <FaShoppingCart className="icon_item" onClick={showCardHandler} />
        <FaInstagram className="icon_item" />
      </div>
    </div>
  );
};

export default Navbar;
