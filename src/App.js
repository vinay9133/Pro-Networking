import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import UserDetails from "./Components/UserDetails/Sidebar";
import RightMenu from "./Components/RightMenu/RightMenu";
import Recents from "./Components/Recents/Recents";
import Feed from "./Components/Feed/Feed";
import AboutUs from "./pages/AboutUs/AboutUs";
import Homepage from "./pages/HomePages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile/Profile/Profile";
import Login from "./Components/Login/Login";
import FeedDescriptionPage from "./pages/FeedDescriptionPage/FeedDescriptionPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/about-us" element={<AboutUs />} />
          <Route exact path="/Profile" element={<Profile />} />
          <Route exact path="/Login" element={<Login />} />
          <Route
            exact path="/feed-description/:id" element={<FeedDescriptionPage />}
          />
        </Routes>
        {/* <AboutUs /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
