import React, { useState, useEffect } from "react";
// import axios from "axios";
// import fake_data from "../Data/data";
import fake_data_item from "../Data/data_product";
import "../Scss/Home.scss";
import Header from "../Components/Header";
// import Card from "../Components/Card";
import Footer from "../Components/Footer";
import loading_gif from "../images/loading.gif";
import CardProduct from "../Components/CardProduct";
import { useDispatch, useSelector } from "react-redux";
import { ADD } from "../Redux/Action";

const Home = () => {
  const [items, setItems] = useState([]);
  const [loading, setloading] = useState(true);
  const dispach = useDispatch();

  const userInput = useSelector((state) => state.value);

  useEffect(() => {
    try {
      //Fetch data from 'Fake' Api :)
      setItems(fake_data_item);
      setloading(false);
      if (userInput.trim() !== "" || userInput.length !== 0) {
        setItems(filterData);
      }
    } catch (err) {
      setloading(true);
      console.log(err);
    }
  }, [items, userInput]);

  const _addToCardHandler = (price) => {
    dispach(ADD(price));
  };

  const filterData = items.filter((_) => {
    return _.title.trim().indexOf(userInput.toLowerCase().trim()) !== -1;
  });

  return (
    <div className="home container-fluid">
      <Header />
      <div className="home_cart">
        {items.length === 0 ? (
          <div className="loading">
            <img src={loading_gif} alt="loading" />
          </div>
        ) : (
          items.map((_) => (
            <CardProduct
              Add_TO={_addToCardHandler}
              id={_.id}
              title={_.title}
              discount={_.discount}
              image={_.image}
              price={_.price}
            />
          ))
        )}
      </div>
      <div className="home_footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
