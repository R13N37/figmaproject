import React from "react";

import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import News from "./components/News/News";
import Slider from "./components/Slider/Slider";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Header></Header>
      <div className="separator"></div>
      <Slider></Slider>
      <News></News>
      <Footer></Footer>
    </div>
  );
}

export default App;
