import React from "react";
import "./LeftMenu.css";
import Recents from "./Recents/Recents";
import UserDetails from "./UserDetails/Sidebar";

function LeftMenu() {
  return (
    <div className="left_menu_container">
      <UserDetails />
      <Recents />
    </div>
  );
}

export default LeftMenu;