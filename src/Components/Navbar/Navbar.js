
import React, { useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
function Navbar({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const isAboutUsPage = window.location.href.includes("about-us");
  const isProfilePage = window.location.href.includes("profile");
  
  const value = localStorage.getItem("email");
  console.log("value", value);

  function logout() {
    setIsLoggedIn(false);
    localStorage.setItem("isUserLoggedIn", false);
  }

  return (
    <div className={`navbar_container ${isAboutUsPage && "navbar_about_us"}`}>
      <div className="navbar">
        <div className="navbar_left">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2dYFM1O8GbZ52Bc3lQqGXRSOsJrK3RnHbaQ&usqp=CAU"></img>
          <div className="search">
            <svg
              className="searchicon"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
            </svg>
            {!isAboutUsPage && !isProfilePage && (
            <input className="searchbar" placeholder="Search User" />
            )}
          </div>
        </div>

        <div className="navbar_right">
          <button onclick="myFunction()">HI,VINAYAK</button>
          <button onClick={() => navigate("/")}>HOME</button>
          <button onClick={() => navigate("/about-us")}>ABOUT US</button>
          <button onClick={() => navigate("/profile")}>PROFILE</button>
          <button onclick="myFunction()">DARK MODE</button>
          

          <div className="navbar_last">
          {!isAboutUsPage && !isProfilePage && (
            <button onClick={logout}>Logout</button>
          )}
          </div>
          <div></div>
        </div>
      </div>
      <hr className="navbar_line" />
    </div>
  );
};
export default Navbar;
