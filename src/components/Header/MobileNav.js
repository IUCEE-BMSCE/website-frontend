import styled from "styled-components";

const MobileNavigation = (props) => {
  return (
    <MobileNav>
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
      <CallToAction>
        <BigButton>
          <a href="/joinus">
            <span> Join as a Member </span>
          </a>
        </BigButton>
        <SmallButton>
          <a href="/subscribe">
            <span> Subscribe to Events </span>
          </a>
        </SmallButton>
      </CallToAction>
    </MobileNav>
  );
};

const MobileNav = styled.nav`
  @media (min-width: 992px) {
    display: none;
  }
  @media (max-width: 992px) {
    background-color: #181818;
    align-items: right;
    display: flex;
    flex-flow: column nowrap;
    position: fixed;
    top: 0;
    right: 0;
    margin-top: 90px;
    padding-top: 5vh;
    height: 100vh;
    width: 100vw;
    a {
      display: flex;
      margin-left: 15%;
      text-decoration: none;
      align-items: center;
      span {
        color: rgb(249, 249, 249);
        font-size: 24px;
        font-weight: 600;
        letter-spacing: 0.8px;
        line-height: 1.5;
        padding: 2px 0px;
        white-space: nowrap;
        position: relative;
        &:before {
          background-color: rgb(249, 249, 249);
          border-radius: 0px 0px 4px 4px;
          bottom: 0px;
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
`;

const CallToAction = styled.div`
  @media (min-width: 992px) {
    display: none;
  }
  @media (max-width: 992px) {
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    align-items: right;
    cursor: pointer;
  }
`;

const BigButton = styled.a`
  align-items: right;
  a {
    color: #fff;
    background-image: linear-gradient(90deg, #0700b8 0%, #00ff88 80%);
    margin-top: 15px;
    margin-left: 0px;
    text-decoration: none;
    padding: 10px 5px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    box-shadow: 0 0 20px #000;
    border-radius: 5px;
    white-space: nowrap;

    margin-bottom: 10px;
    font-size: 12px;
    font-weight: 600;
    &:hover {
      background-position: right;
      color: #121212;
    }
  }
`;
const SmallButton = styled.a`
  align-items: right;
  a {
    color: #fff;
    border-style: dashed;
    border-width: 1px;
    border-color: #666666;
    border-radius: 5px;
    margin-left: 0px;
    padding: 10px 5px;
    text-align: center;
    transition: 0.5s;
    text-decoration: none;
    white-space: nowrap;

    margin-bottom: 10px;
    font-size: 12px;
    font-weight: 400;
    &:hover {
      border-color: #ffffff;
      color: #fff;
    }
  }
`;

export default MobileNavigation;
