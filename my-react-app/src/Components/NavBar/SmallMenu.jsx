import React, { useState } from "react";

import Offcanvas from "react-bootstrap/Offcanvas";
import "./smallMenu.css";
import Smallicon from "./smallMenuButton.svg";

export default function SmallMenu() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div>
        <img id="smallMenuButton" src={Smallicon} onClick={handleShow} />
      </div>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <h1>Menu</h1>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h3>Home</h3>
          <br />
          <h3>General</h3>
          <ul>
            <li>New Patient</li>
            <li>All Patient Forms</li>
            <li>Location & Hours</li>
            <li>Financial Information & Insurance</li>
            <li>FAQs</li>
          </ul>
          <br />
          <h3>About Us</h3>
          <ul>
            <li>About Elma Family Dental</li>
            <li>Meet the Dentists</li>
            <li>Meet the Dental Staff</li>
            <li>Meet the Office Staff</li>
          </ul>
          <br />
          <h3>Services</h3>
          <ul>
            <li>Preventative Dental Care</li>
            <li>Dental Restorations</li>
            <li>Emergency Treatment</li>
            <li>Cosmetic Dentistry</li>
            <li>Teeth Replacement & Implants</li>
            <li>Technology</li>
            <li>Advanced & Specialty Dental Treatment</li>
            <li>Sedation Dentistry</li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
