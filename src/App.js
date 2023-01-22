
import './App.css';
import Navbar from './Navbar/Navbar';
import UserDetails from './UserDetails/Sidebar';
import RightMenu from './RightMenu/RightMenu';
import Recents from './Recents/Recents';
import Feed from './Feed/Feed';


function App() {
  return (
    <div className="App">
      <Navbar />
      <UserDetails />
      <RightMenu />
      <Recents />
      <Feed />
    </div>
  );
}

export default App;
