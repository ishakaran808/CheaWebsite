import React from "react";
import Navbar from "./Navbar";
import Fugacity from "./logos/Fugacity.png";
import  DEMO from "./images/DEMO.png";

const Home = () => {
  return (
    <div>
      <Navbar />
      <section id="header" className="">
        <div className="container-fluis nav_bg">
        {/* <img src={DEMO}  alt="logo" height={700} /> */}
          <div className="row text-center">
            <section className="text-center">
              <div class="content text-center">
                <h2>Fugacity </h2>
                <h2>Fugacity </h2>
              </div>
            </section>
            <div className="col3">
              <h2 className="line"> XX March 2023-XX March 2023</h2>
            </div>
            <div className="mt-3 text-center">
              <a href="" className="btn get-started">
                Register Here
              </a>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 header-img text-center">
            <img src={Fugacity} className="img-fluid" alt="logo" />
          </div>
        </div>
n
      </section>
    </div>
  );
};

export default Home;
