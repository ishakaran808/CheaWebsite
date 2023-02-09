import React, { useEffect } from "react";
import { useState } from "react";
import Countup from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import {FaUserFriends} from 'react-icons/fa';
import {GiTargetPrize} from 'react-icons/gi'
import {BsMegaphoneFill} from "react-icons/bs"
const Counterup = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <>
      <section className="section-data">
        <h1>Our previous year stats</h1>
        <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          ></ScrollTrigger>
        <div className="grid-column">
          <div className="data">
            <a href=""> <BsMegaphoneFill/></a>
            <h2>
              {counterOn && (
                <Countup start={25000} end={30000} duration={2} delay={0} />
                )}
              +
            </h2>
            <p>Our social-media reach</p>
          </div>

          <div className="data">
                <a href=""><FaUserFriends/></a>
            <h2>
              {counterOn && (
                <Countup start={1000} end={2000} duration={2} delay={0} />
              )}
              +
            </h2>
            <p>Number of student participated last year</p>
          </div>

          <div className="data">
            <a href=""><GiTargetPrize/></a>
            <h2>
              {counterOn && (
                <Countup start={1} end={10} duration={0.5} delay={0} />
              )}
              +
            </h2>
            <p>Number of events</p>
          </div>
            <div>
              {/* <h1>
                {counterOn && (
                  <Countup start={10000} end={30000} duration={2} delay={0} />
                )}
                +
              </h1>
              <h1>
                {counterOn && (
                  <Countup start={1000} end={2000} duration={2} delay={0} />
                )}
                +
              </h1>
              <h1>
                {counterOn && (
                  <Countup start={1} end={10} duration={0.5} delay={0} />
                )}
                +
              </h1> */}
            </div>
          {/* </ScrollTrigger> */}
        </div>

      </section>
    </>
  );
};

export default Counterup;
