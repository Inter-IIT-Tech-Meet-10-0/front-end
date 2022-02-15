import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
// import ComingSoon from "./components/ComingSoon/ComingSoon";
import AboutUs from "./components/AboutUs/AboutUs";
import Events from "./components/Events/Events";
import Team from "./components/Team/Team";
import Timeline from "./components/Timeline/Timeline";
import Footer from "./components/Footer/Footer";
import { Routes } from "react-router-dom";
import {useState,useEffect} from 'react';
import Loader from "react-js-loader"

function App() {


  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    setLoading(false);
  },[]);

  return (
    <>
    {loading ? 
    <>
    <Loader type="spinner-cub" bgColor={"#050222"} title={"Loading"} color={'#050222'} size={100}/>
    </> : (

      <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<AboutUs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Timeline" element={<Timeline />} />

        </Routes>
        <Footer />
      </Router>
      </div>
    )}
    
    </>
    
  );
}

export default App;
