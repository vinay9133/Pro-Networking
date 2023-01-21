import React from "react";
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar_left">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2dYFM1O8GbZ52Bc3lQqGXRSOsJrK3RnHbaQ&usqp=CAU"></img>
               <div className="search">
               <svg className="searchicon" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
               <input className="searchbar" placeholder="Search User" />
                </div>
            </div>
            
            <div className="navbar_right">
            <button onclick="myFunction()">HI,VINAYAK</button>
            <button onclick="myFunction()">HOME</button>
            <button onclick="myFunction()">ABOUT US</button>
            <button onclick="myFunction()">PROFILE</button>
            <button onclick="myFunction()">DARK MODE</button>

                <div className="navbar_last">
                <button onclick="myFunction()">LogOut</button>
                
                </div>

            </div>
            </div>


    );
};

export default Navbar;