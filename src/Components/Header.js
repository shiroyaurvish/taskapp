import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="navbar">
        <Link to={"/"}>
          <h1 className="header1">Task App</h1>
        </Link>
        <div className="dropdown">
          <button className="dropbtn">App Drawer</button>
          <div className="dropdown-content">
            <Link to={"/mostlikedposts"}>Most Liked Posts</Link>
            <Link to={"/mostcommentedposts"}>Most Commented Posts</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
