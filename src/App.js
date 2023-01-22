import "./App.css";
import Navbar from "./Navbar/Navbar";
import UserDetails from "./UserDetails/Sidebar";
import RightMenu from "./RightMenu/RightMenu";
import Recents from "./Recents/Recents";
import Feed from "./Feed/Feed";
import AboutUs from "./pages/AboutUs/AboutUs";
import Homepage from "./pages/HomePages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile/Profile/Profile";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route exact path="/about-us" element={<AboutUs />} />
      <Route exact path="/Profile" element={<Profile />} />
      </Routes>
      {/* <AboutUs /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
