import styled from "styled-components";
import Carousel from "./Home/Carousel";
import Objective from "./Home/Objective";
import Events from "./Home/Events";

const Home = (props) => {
  return (
    <Container>
      <SubContainer>
        <Carousel />
        <Objective />
        <Events />
      </SubContainer>
    </Container>
  );
};


const SubContainer = styled.div`
@media (min-width: 768px) {
  margin-top: 20px;
}
@media (max-width: 768px) {
  margin-top: 20px;
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
export default Home;
