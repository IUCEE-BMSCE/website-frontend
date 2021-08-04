import styled from "styled-components";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import MobileNavigation from "./Header/MobileNav";
import { useState } from "react";
import "./Header/Header.css";

const Header = (props) => {
  const [open, setOpen] = useState(false);
  const closeIcon = (
    <IoClose
      size='40px' 
      color='white' 
      onClick={() => setOpen(!open)} 
      />
  );
  const openIcon = (
    <HiOutlineMenuAlt3
      size='40px'
      color='white'
      onClick={() => setOpen(!open)}
    />
  );
  
  return (
    <Nav>
      <Logo className="text-align-text align-items-center justify-content-center">
        <a href="/home">
        <img src="/images/logo.png" alt="IUCEE-BMSCE" />
        </a>
      </Logo>
      <NavMenu>
        <a href="/home">
          <span> Home </span>
        </a>
        <a href="/events">
          <span> Events </span>
        </a>
        <a href="/aboutus">
          <span> About Us </span>
        </a>
        <a href="/contactus">
          <span> Contact Us </span>
        </a>
      </NavMenu>
      <MobiNav>
      {open ? closeIcon : openIcon}
      {open && <MobileNavigation />}
      </MobiNav>

      <CallToAction>
        <BigButton className="text-decoration-none">
          <a href="/joinus" className="text-decoration-none">
            <span className="text-decoration-none">Join as a Member</span>
          </a>
        </BigButton>
        <SmallButton className="text-decoration-none">
          <a href="/subscribe" className="text-decoration-none">
            <span className="text-decoration-none">Subscribe to Events</span>
          </a>
        </SmallButton>
      </CallToAction>
    </Nav>
  );
};

const MobiNav = styled.div`
  @media (min-width: 992px) {
    display: none;
  }
`;
const Nav = styled.nav`
  @media (min-width: 992px) {
    padding: 0 8% 0;
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    height: 90px;
    background-color: #181818;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 3;
  }
  @media (max-width: 992px) {
    padding: 0 5% 0;
    position: relative;
    flex-flow: row nowrap;
    top: 0;
    left: 0;
    right: 0;
    height: 90px;
    background-color: #181818;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 3;
  }
`;

const Logo = styled.div`
  @media (min-width: 992px) {
    padding: 0;
    width: 185px;
    margin-top: 4px;
    margin-bottom: 4px;
    max-height: 70px;
    font-size: 0;
    display: flex;
    flex-flow: row nowrap;
    img {
      display: flex;
      width: 185px;
    }
  }
  @media (max-width: 992px) {
    padding: 0;
    width: 150px;
    margin-top: 4px;
    margin-bottom: 4px;
    max-height: 70px;
    font-size: 0;
    display: flex;
    flex-flow: row nowrap;
    img {
      display: flex;
      width: 100%;
    }
  }
`;

const NavMenu = styled.div`
  @media (min-width: 992px) {
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    justify-content: flex-end;
    margin: 0px;
    padding: 0px;
    position: relative;
    margin-right: auto;
    margin-left: 25px;
    a {
      display: flex;
      text-decoration: none;
      align-items: center;
      padding: 0 12px;
      span {
        color: rgb(249, 249, 249);
        font-size: 16px;
        font-weight: 600;
        letter-spacing: 0.8px;
        line-height: 1.08;
        padding: 2px 0px;
        white-space: nowrap;
        position: relative;
        &:before {
          background-color: rgb(249, 249, 249);
          border-radius: 0px 0px 4px 4px;
          bottom: -6px;
          content: "";
          height: 2px;
          left: 0px;
          opacity: 0;
          position: absolute;
          right: 0px;
          transform-origin: left center;
          transform: scaleX(0);
          transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
          visibility: hidden;
          width: auto;
        }
      }
      &:hover {
        span:before {
          transform: scaleX(1);
          visibility: visible;
          opacity: 1 !important;
        }
      }
    }
  }

  @media (max-width: 992px) {
    display: none;
  }
`;

const CallToAction = styled.div`
  @media (min-width: 992px) {
    position: relative;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 992px) {
    display: none;
  }
`;

const BigButton = styled.a`
  a {
    color: #fff;
    background-image: linear-gradient(90deg, #0700b8 0%, #00ff88 80%);
    margin: 10px;
    text-decoration: none !important;
    padding: 15px 10px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    box-shadow: 0 0 20px #000;
    border-radius: 5px;
    white-space: nowrap;

    margin-bottom: 12px;
    font-size: 16px;
    font-weight: 800;
    span{
      text-decoration: none !important;
    }
    &:hover {
      background-position: right center;
      color: #fff;
    }
  }
`;
const SmallButton = styled.a`
  a {
    color: #fff;
    border-style: dashed;
    border-width: 1px;
    border-color: #666666;
    border-radius: 5px;
    margin: 10px;
    padding: 15px 10px;
    text-align: center;
    transition: 0.5s;
    text-decoration: none;
    white-space: nowrap;

    margin-bottom: 12px;
    font-size: 16px;
    font-weight: 600;
    span{
      text-decoration: none !important;
    }
    &:hover {
      border-color: #ffffff;
      color: #fff;
    }
  }
`;
export default Header;
