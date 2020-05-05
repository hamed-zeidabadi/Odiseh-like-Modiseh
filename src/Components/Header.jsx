import React from "react";
import "../Scss/Home.scss";
import Navbar from "./Navbar";
import logo from "../images/logo.svg";

const Header = () => {
	return (
		<div className="header container-fluid ">
			<div className="icon">
				<img src={logo} alt="icon" />
			</div>
			<Navbar />
		</div>
	);
};

export default Header;
