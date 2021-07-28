import styled from "styled-components";

const Header = (props) => {
  return (
    <Nav>
      <Logo>
        <img src="/images/IUCEE.svg" alt="IUCEE-BMSCE" />
      </Logo>
      <NavMenu>
        <a href="/home">
          <span> Home </span>
        </a>
        <a href="/events">
          <span> Events </span>
        </a>
        <a href="/about">
          <span> About Us </span>
        </a>
        <a href="/contact">
          <span> Contact Us </span>
        </a>
      </NavMenu>
      <CallToAction>
        <BigButton>Join as a Member</BigButton>
        <SmallButton>Subscribe to Events</SmallButton>
      </CallToAction>
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 90px;
  background-color: #181818;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 3;
  @media (min-width: 1024px) {
    padding: 0 15% 0;
  }
  @media (max-width: 1024px) {
    padding: 0 5% 0;
  }
`;

const Logo = styled.a`
  padding: 0;
  width: 150px;
  margin-top: 4px;
  margin-bottom: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
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
  @media (max-width: 1024px) {
    display: none;
  }
`;

const CallToAction = styled.div`
  position: relative;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
`;

const BigButton = styled.a`
  color: #fff;
  background-image: linear-gradient(
    to right,
    #ee0979 0%,
    #ff6a00 51%,
    #ee0979 100%
  );
  margin: 10px;
  padding: 15px 10px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  box-shadow: 0 0 20px #000;
  border-radius: 4px;
  white-space: nowrap;

  margin-bottom: 12px;
  font-size: 16px;
  font-weight: 800;
  &:hover {
    background-position: right center;
    color: #fff;
    text-decoration: none;
  }
`;
const SmallButton = styled.a`
  color: #fff;
  border-style: dashed;
  border-width: 1px;
  border-color: #666666;
  border-radius: 4px;
  margin: 10px;
  padding: 15px 10px;
  text-align: center;
  transition: 0.5s;

  margin-bottom: 12px;
  font-size: 16px;
  font-weight: 600;
  &:hover {
    border-color: #FFFFFF;
    color: #fff;
    text-decoration: none;
  }
`;
export default Header;
