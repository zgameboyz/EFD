import React from "react";
import "./Style/reset.css";
import "./Style/App.css";
import Nav from "./Components/NavBar/Nav.jsx";
import CarouselC from "./Components/Carousel/CarouselC";
import Title from "./Components/TitleSvg/Title";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div id="grid">
        <div id="nav">
          <Nav />
        </div>
        <div id="menu">
          <Title id="titleImg" />
        </div>
        <div id="parralax"></div>
        <div id="carousel">
          <CarouselC />
        </div>
      </div>
    </>
  );
}

export default App;
