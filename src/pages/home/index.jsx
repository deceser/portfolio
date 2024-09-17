import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { NavLink } from "react-router-dom";
import Typewriter from "typewriter-effect";

import { meta } from "src/utils/meta";
import { introData } from "src/utils/fakeData/intro";

import "./index.css";

const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center  ">
          <div className="align-self-center w-100 d-flex ">
            <div className="intro mx-auto">
              <h2 className="mb-1x">{introData.title}</h2>
              <h1 className="fluidz-48 mb-1x">
                <Typewriter
                  options={{
                    strings: [
                      introData.animated.first,
                      introData.animated.second,
                      introData.animated.third,
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 10,
                  }}
                />
              </h1>
              <p className="mb-1x">{introData.description}</p>
              <div className="intro_btn-action pb-5">
                <NavLink to="portfolio" className="text_2">
                  <div id="button_p" className="ac_btn btn ">
                    My Portfolio
                    <div className="ring one"></div>
                    <div className="ring two"></div>
                    <div className="ring three"></div>
                  </div>
                </NavLink>
                {/* <NavLink to="contact">
                  <div id="button_h" className="ac_btn btn">
                    Contact Me
                    <div className="ring one"></div>
                    <div className="ring two"></div>
                    <div className="ring three"></div>
                  </div>
                </NavLink> */}
                <NavLink to="about">
                  <div id="button_p" className="ac_btn btn">
                    About Me
                    <div className="ring one"></div>
                    <div className="ring two"></div>
                    <div className="ring three"></div>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};

export default Home;
