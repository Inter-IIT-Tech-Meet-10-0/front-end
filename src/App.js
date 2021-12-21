import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Navbar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
// import ComingSoon from "./components/ComingSoon/ComingSoon";
import AboutUs from "./components/AboutUs/AboutUs";
import Events from "./components/Events/Events";
import Team from "./components/Team/Team";
import Timeline from "./components/Timeline/Timeline";
import Footer from "./components/Footer/Footer";
import { Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Timeline" element={<Timeline />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
