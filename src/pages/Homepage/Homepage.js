import React from "react";
import "./Homepage.css";
import Sidebar from "../../UserDetails/Sidebar";
import Recents from "../../Recents/Recents";
import Feed from "../../Feed/Feed";
import RightMenu from "../../RightMenu/RightMenu";

function Homepage() {
  return (
    <div className="homepage_container">
      {/* Left Part */}
      <div className="left_menu">
        <Sidebar />
        <Recents />
      </div>
      {/* Middle Part */}
      <Feed />
      {/* Right Part */}
      <RightMenu />
    </div>
  );
}

export default Homepage;
