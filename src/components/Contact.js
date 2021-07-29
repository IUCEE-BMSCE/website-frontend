import styled from "styled-components";

const Contact = (props) => {
  return (
    <Container>
      <h1>Hi! This is Contact Page.</h1>
    </Container>
  );
};

const Container = styled.main`
  color: #fff;
  position: relative;
  min-height: calc(100vh - 90px);
  overflow-x: hidden;
  display: block;
  top: 90px;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background-color: #181818 ;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Contact;
