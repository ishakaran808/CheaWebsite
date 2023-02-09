import React from "react";
import logo from "./logos/logo.png";

const Navbar = () => {
  return (
    <>
    <div className="container">
    <nav className="navbar navbar-expand-md navbar-light fixed-top mt-0 navbar-scrolled">
      <a href="#" className="navbar-brand mb-0 h1">
        <img
          className="d-inline-block "
          src={logo}
          alt="logo"
          width="130"
        />
        ChEA
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a href="#" className="nav-link">
              HOME
            </a>
          </li>

          <li className="nav-item active">
            <a href="#" className="nav-link">
              EVENTS
            </a>
          </li>

          <li className="nav-item active">
            <a href="#" className="nav-link">
              REGISTER HERE
            </a>
          </li>

          <li className="nav-item active">
            <a href="#footer" className="nav-link">
              CONTACT US
            </a>
          </li>
        </ul>
      </div>
    </nav>
    </div> 
        </>
  );
};
const navEl= document.querySelector('.navbar');
window.addEventListener('scroll',()=>{
  if(window.scrollY>60){
    navEl.classList.add('navbar-scrolled');
  }
  else if(window.scrollY<60){
    navEl.classList.remove('navbar-scrolled');
  }
})

export default Navbar;
