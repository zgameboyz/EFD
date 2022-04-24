import React from 'react';
import './Style/reset.css'
import './Style/App.css';
import Nav from './Components/NavBar/Nav.jsx';
import CarouselC from './Components/Carousel/CarouselC';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <div id="grid">
        <div id="item1">
        
          <Nav/>
        </div>   
        
       
        <div id="item2">
        
          <CarouselC/>
        </div>   
      </div>
      
    </>
  );
}

export default App;
