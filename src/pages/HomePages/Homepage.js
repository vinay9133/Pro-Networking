import React from "react";
import "./Homepage.css";
import Sidebar from "../../Components/UserDetails/Sidebar";
import Recents from "../../Components/Recents/Recents";
import Feed from "../../Components/Feed/Feed";
import RightMenu from "../../Components/RightMenu/RightMenu";

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
