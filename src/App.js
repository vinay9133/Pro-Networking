import "./App.css";
import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import AboutUs from "./pages/AboutUs/AboutUs";
import Homepage from "./pages/HomePages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile/Profile/Profile";
import FeedDescriptionPage from "./pages/FeedDescriptionPage/FeedDescriptionPage";
import Login from "./pages/Login/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
      {isLoggedIn ? (
        <div>
        <Navbar setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/about-us" element={<AboutUs />} />
          <Route exact path="/Profile" element={<Profile />} />
          <Route
            exact path="/feed-description/:id" element={<FeedDescriptionPage />}
          />
        </Routes>
        </div>
      ) : (
        <div><Login setLoggedIn={setIsLoggedIn} /></div>
      )}
      </BrowserRouter>
    </div>
  );
}

export default App;