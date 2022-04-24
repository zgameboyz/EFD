import React from "react";
import "../../index.css";
import "./Nav.css";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";

class Nav extends React.Component {
  render() {

    return (
      <>
        <header id="siteHeader">
          <div id='elmaFamilyDentalTitleText'>Elma Family Dental</div>
          <div id="dropdownContainer">
            
      <Button id='homeButton'>Home</Button>
          <Dropdown >
  <Dropdown.Toggle variant="success" id="generalDropdown" className="headerButtons" >
   General
  </Dropdown.Toggle>
  
  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">New Patient</Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item href="#/action-2">All Patient Forms</Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item href="#/action-3">Location & Hours</Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item href="#/action-4">Financial Information & Insurance</Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item href="#/action-5">FAQs</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

<Dropdown>
  <Dropdown.Toggle variant="success" id="aboutusDropdown" className="headerButtons">
    About Us
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action2-1">About Elma Family Dental</Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item href="#/action2-2">Meet the Dentists</Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item href="#/action2-3">Meet the Dental Staff</Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item href="#/action2-4">Meet the Office Staff</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

<Dropdown>
  <Dropdown.Toggle variant="success" id="servicesDropdown" className="headerButtons">
    Services
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action3-1">Preventative Dental Care</Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item href="#/action3-2">Dental Restorations</Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item href="#/action3-3">Emergency Treatment</Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item href="#/action3-4">Cosmetic Dentistry</Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item href="#/action3-5">Teeth Replacement & Implants</Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item href="#/action3-6">Technology</Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item href="#/action3-7">Advanced and Specialty Dental Treatment</Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item href="#/action3-8">Sedation Dentistry</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
</div>
<div id='theDivide'>Come See Why Everyone Is Smiling!</div>
        </header>
      </>
    );
  }
}

export default Nav;
