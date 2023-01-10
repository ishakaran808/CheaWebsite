import React from "react";
import logo from "./logos/logo.png";
import iitkgplogo from "./logos/iitkgplogo.png";
import logoiiche from "./logos/logoiiche.png";

const About = () => {
  return (
    <div className="bodied">
      <div className="container">
        <div className="card">
          <div className="img-logo">
            <img src={iitkgplogo} alt="" height={80} />
          </div>
          <div className="contain">
            <h3>Indian Institute of Technology Kharagpur</h3>
            <a href="#">Read More</a>
            <p>
            Indian Institute of Technology Kharagpur (IIT Kharagpur) is a public technical university established by the government of India in Kharagpur, West Bengal, India. Established in 1951, the institute is the first of the IITs to be established and is recognised as an Institute of National Importance. In 2019 it was awarded the status of Institute of Eminence by the government of India.
            </p>
          </div>
        </div>

        <div className="card">
        <div className="img-logo">
            <img src={logoiiche} alt="" />
          </div>
          <div className="contain">
            {/* <h2>02</h2> */}
            <h3>Indian Institute of Chemical Engineers</h3>
            <a href="#">Read More</a>
            <p>
            The Indian Institute of Chemical Engineers (IIChE) is the professional body for chemical engineers in India. The headquarter of IIChE is in the campus of Jadavpur University, Kolkata. The organization has 42 regional centers along with 172 student chapters spread throughout India.[1] The institution's membership comprises academics, professionals from the chemical industry, researchers, and students.
            </p>
          </div>
        </div>

        <div className="card">
        <div className="img-logo">
            <img src={logo} alt="" width={220} />
          </div>
          <div className="contain text-center">
            <h3>Chemical Engineering Association, IIT Kharagpur</h3>
            <a href="#">Read More</a>
            <p>
            Chemical Engineering Association, IIT Kharagpur( also known as ChEA-IITKGP) is the Official Student Body of the Department of Chemical Engineering, IIT Kharagpur. At present, the department is deeply involved in activities in the field of Pollution Control, Transport Processes, Coal and Petroleum Technology, and Membrane Processes.
            </p>
          </div>
        </div>
      </div>

      <div className="about">
        <h1 className="text-center">Our Vision</h1>
          <div className="row1">
            <div className="col1">

            </div>
            <div className="col1">
              <p>Fugacity is the departmental fest of the Chemical Engineering Department, IIT Kharagpur, organised by the Chemical Engineering Association and Kharagpur Regional Chapter, Indian Institute of Chemical Engineers. The fest is to be held on 12th and 13th February this year in a virtual mode. Over 1500 enthusiastic participants from various IITs, NITs and other reputed colleges across the country will be competing in an array of events lined up over the two days. Esteemed Professors across the globe, Industry Experts and emerging Researchers will grace the fest will their insightful lectures and warm presence. We cordially invite you to our fest and request you to support our endeavours</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
