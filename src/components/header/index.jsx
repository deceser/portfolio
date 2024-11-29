import React from "react";
import { NavLink } from "react-router-dom";
import { VscGrabber, VscClose } from "react-icons/vsc";

import { socialProfils } from "src/utils/fakeData/social";
import { logoText } from "src/utils/fakeData/content_option";

import ThemeToggle from "../themeToggle";

import "./index.css";

const Header = () => {
  const [isActive, setActive] = React.useState("false");

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between items">
          <NavLink className="navbar-brand nav_ac" to="/">
            {logoText}
          </NavLink>
          <div className="d-flex align-items-center">
            <ThemeToggle />
            <button className="menu__button  nav_ac" onClick={handleToggle}>
              {isActive ? <VscGrabber /> : <VscClose />}
            </button>
          </div>
        </div>

        <div className={`site__navigation ${!isActive ? "menu__opend" : ""}`}>
          <div className="bg__menu h-100">
            <div className="menu__wrapper">
              <div className="menu__container p-3">
                <ul className="the_menu">
                  <li className="menu_item ">
                    <NavLink onClick={handleToggle} to="/" className="my-3">
                      Home
                    </NavLink>
                  </li>
                  <li className="menu_item">
                    <NavLink onClick={handleToggle} to="portfolio" className="my-3">
                      Portfolio
                    </NavLink>
                  </li>
                  <li className="menu_item">
                    <NavLink onClick={handleToggle} to="about" className="my-3">
                      About
                    </NavLink>
                  </li>
{/*                   <li className="menu_item">
                    <NavLink onClick={handleToggle} to="contact" className="my-3">
                      Contact
                    </NavLink>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
          <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">
            <div className="d-flex">
              <a href={socialProfils.instagram}>Instagram</a>
              <a href={socialProfils.telegram}>Telegram</a>
              <a href={socialProfils.github}>Github</a>
            </div>
          </div>
        </div>
      </header>
      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div>
    </>
  );
};

export default Header;
