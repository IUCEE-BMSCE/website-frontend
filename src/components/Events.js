import styled from "styled-components";
import Card from "./Events/Card";

const Events = (props) => {
  return (
    <Container>
      <SubContainer>
        <h1>Events</h1>
        <Card />
      </SubContainer>
    </Container>
  );
};
const SubContainer = styled.div`
@media (min-width: 768px) {
  margin-top: 20px;
  h1 {
    font-size: 72px;
    font-weight: 800;
    background-color: #FFFFFF;
    background: linear-gradient(90deg, #FC466B 45%, #3F5EFB 55%);
    background-size: 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }
}
@media (max-width: 768px) {
  margin-top: 20px;
  h1 {
    font-size: 48px;
    font-weight: 700;
    background-color: #FFFFFF;
    background: linear-gradient(90deg, #FC466B 40%, #3F5EFB 60%);
    background-size: 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }
}
`;
const Container = styled.main`
  color: #fff;
  position: relative;
  justify-content: center;
  min-height: calc(100vh);
  overflow-x: hidden;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background-color: #272727;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
export default Events;
