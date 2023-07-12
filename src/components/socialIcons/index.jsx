import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaTelegram } from "react-icons/fa";

import { socialProfils } from "src/utils/fakeData/social";

import "./index.css";

const SocialIcons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialProfils.telegram && (
          <li>
            <a href={socialProfils.telegram}>
              <FaTelegram />
            </a>
          </li>
        )}
        {socialProfils.instagram && (
          <li>
            <a href={socialProfils.instagram}>
              <FaInstagram />
            </a>
          </li>
        )}
        {socialProfils.github && (
          <li>
            <a href={socialProfils.github}>
              <FaGithub />
            </a>
          </li>
        )}

        {socialProfils.linkedin && (
          <li>
            <a href={socialProfils.linkedin}>
              <FaLinkedin />
            </a>
          </li>
        )}
      </ul>
      <p>Follow Me</p>
    </div>
  );
};

export default SocialIcons;
