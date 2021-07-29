import styled from "styled-components";

const Footer = (props) => {
  return (
    <Foot>
      <span>Made with ❤️ in BMSCE.</span>
    </Foot>
  );
};

const Foot = styled.div`
  overflow-x: hidden;
  overflow-y: hidden;
  position: absolute;
  display: flex;
  flex-flow: column nowrap;
  bottom: 0;
  background-color: #282828;
  color: #ffffff;
`;
export default Footer;
