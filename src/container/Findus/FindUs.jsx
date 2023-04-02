import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";
import "./FindUs.css";

const FindUs = () => (
  <div
    className="app__findus app__bg app__wrapper section__padding"
    id="contact"
  >
    <div className="app__findus-contact ">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant">Find Us</h1>
      <div className="app__findus-contact-address">
        <p className="p__opensans">
          Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
        </p>
      </div>
      <div className="app__findus-contact_hours">
        <p className="p__cormorant" style={{ color: "#DCCA87" }}>
          Opening Hours
        </p>
        <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
        <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
      </div>
      <button type="button" className="custom__button">
        Visit Us
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.findus} alt="Find Us" />
    </div>
  </div>
);

export default FindUs;
