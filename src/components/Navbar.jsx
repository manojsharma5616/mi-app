import React from "react";
import "../styles/Navbar.css";
import data from "../data/data.json";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo">
        <Link to="/">
          <img src={data.logo} alt="Not" id="logoImage" />
        </Link>
      </div>
      <Link to={"/"} className="navlinks">
        Mi Phones
      </Link>
      <Link to={"/redmiphones"} className="navlinks">
        Redmi Phones
      </Link>
      <Link to={"/tv"} className="navlinks">
        TV
      </Link>
      <Link to={"/laptops"} className="navlinks">
        Laptops
      </Link>
      <Link to={"/lifestyle"} className="navlinks">
        Fitness & LifeStyle
      </Link>
      <Link to={"/home"} className="navlinks">
        Home
      </Link>
      <Link to={"/audio"} className="navlinks">
        Audio
      </Link>
      <Link to={"/accessories"} className="navlinks">
        Accessories
      </Link>
      <div className="searchbox">
        <input type="text" name="search" placeholder="Search Products" />
        <IoIosSearch />
      </div>
    </div>
  );
};
export default Navbar;
