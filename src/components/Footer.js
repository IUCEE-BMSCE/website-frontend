import React from "react";
import styled from "styled-components";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaReact
} from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

const Footer = (props) => {
  return (
    <Foot>
      <SocialIcons>
        <a
          href="https://github.com/parjanyamodi"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/parjanya_modi/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/parjanyamodi/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://www.youtube.com/channel/UCLNn5vP3X38s8Kdf5Mjk0QA/featured"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaYoutube />
        </a>
        <a
          href="mailto:parjanyamodi@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <HiMail />
        </a>
      </SocialIcons>

      <span>
        Made with ❤️ by{" "}
        <a
          href="/aboutus"
          rel="noopener noreferrer"
          target="_blank"
        >
          <strong>
            Team
          </strong>
        </a>
        <br /> &#169; {new Date().getFullYear()}{" "}
        <a href="/">IUCEE Student Chapter of BMSCE
        </a>
      </span>
    </Foot>
  );
};

const Foot = styled.div`
margin-bottom: 15px;
  @media (min-width: 1024px) {
    position: relative;
    left: 0;
    right: 0;
    span {
      font-size: 16px;
      color: #ffffff;
      justify-content: center;
      text-align: center;
      align-items: center;
      a {
        font-size: 16px;
        color: #ffffff;
        text-decoration: none;
      }
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    position: relative;
    left: 0;
    right: 0;
    span {
      font-size: 16px;
      color: #ffffff;
      justify-content: center;
      text-align: center;
      align-items: center;
      a {
        font-size: 16px;
        color: #ffffff;
        text-decoration: none;
      }
    }
  }
  @media (max-width: 768px) {
    position: relative;
    left: 0;
    right: 0;
    span {
      font-size: 16px;
      color: #ffffff;
      justify-content: center;
      text-align: center;
      align-items: center;
      a {
        font-size: 16px;
        color: #ffffff;
        text-decoration: none;
      }
    }
  }
`;
const SocialIcons = styled.div`
  margin-top: 15px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  a {
    text-decoration: none;
    color: #FFFFFF;
    font-size: 24px;
    font-weight: 700;
    margin: 5px;
    &:hover {
      color: #DA0037;
    }
  }
`;
export default Footer;
