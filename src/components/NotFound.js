import styled from "styled-components";

const NotFound = (props) => {
  return (
    <Container>
      <h1>Error 404</h1>
      <h2>Not Found</h2>
      <h3>
        Go Back to <a href="/">Homepage</a>
      </h3>
    </Container>
  );
};

const Container = styled.main`
  color: #fff;
  position: relative;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: calc(100vh - 90px);
  overflow-x: hidden;
  display: block;
  padding: 0 calc(3.5vw + 5px);
  h1 {
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  h2 {
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  h3 {
    align-items: center;
    justify-content: center;
    text-align: center;
    a {
      text-decoration: none;
    }
  }
  &:after {
    background-color: #181818;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
export default NotFound;
