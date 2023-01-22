import React from "react";
import"./AboutUs.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";

const AboutUs= () => {
    return (
        <div className="Aboutus_text">
        <h1>About Us</h1>
        <p>-Pro Network is a platform where people can create professional networks, talk with with various professionals by communicating, sharing knowledge, guiding people, get guided by people and so on.</p>
        <p>-At Pro Network, we have designed a system that works well for both students and professionals, and streamlined the networking/mentoring process making it easy and efficient.</p>
        <p>- Join the amazing community of immense professionals and start helping/benefitting from awesome posts!</p>
       <button className="Home_button">GO TO HOME</button>
       
        </div>
        
    )
}
export default AboutUs ;