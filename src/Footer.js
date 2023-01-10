import React from "react";
import logo from "./logos/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Container } from "react-bootstrap";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer-section" id="footer">
      
        <div className="row1">
          <div className="desc">
            <img src={logo} alt="" className="foot" />
            <h3>ChEA</h3>
            <div className="text-center">
              <p>
                Department of Chemical Engineering,
                <br /> IIT Kharagpur,
                <br /> West Bengal
              </p>
            </div>
            <container>
              <h4 className="text-center">Follow Us</h4>
              <div className="singleCol social-media-icons-white d-flex justify-content-evenly">
                <a href="http://facebook.com">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>

                <a href="http://twitter.com">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>

                <a href="http://instagram.com">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="http://linkedin.com">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </container>
          </div>
        </div>
        <div className="div"></div>
        <div className="row1 text-center bg-light ">
          <div className="descr mt-5">
            <h3>Contact Us</h3>
            {/* <FontAwesomeIcon icon={faPhoneVolume} size="1.5x" />    */}
            <p>
              123-456-7890 123 Anywhere St.,
              <br /> Any City, ST 12345 <br />
              hello@reallygreatsite.com
            </p>
          </div>
          <div className="team">
            <a href="">Core Team</a>
            <a href="">Tech Team</a>
            <a href="">Design Team</a>
          </div>
        </div>
      </div>

  );
};

export default Footer;
