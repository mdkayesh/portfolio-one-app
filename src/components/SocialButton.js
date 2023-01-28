import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaDribbble,
} from "react-icons/fa";

const SocialButton = () => {
  const socialLink = [
    {
      url: "www.facebook.com",
      icon: <FaFacebookF />,
    },
    {
      url: "www.twitter.com",
      icon: <FaTwitter />,
    },
    {
      url: "www.github.com",
      icon: <FaGithub />,
    },
    {
      url: "www.linkedin.com",
      icon: <FaLinkedin />,
    },
    {
      url: "www.dribble.com",
      icon: <FaDribbble />,
    },
  ];

  return (
    <div className="social-buttons">
      <ul>
        {socialLink.map((item, index) => (
          <li key={index}>
            <Link url={item.url}>
              <span className="default-link">{item.icon}</span>
              <span className="hover-link">{item.icon}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialButton;
