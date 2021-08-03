import styled from "styled-components";
import Card from "./Events/Card";
import Subscribe from "./Subscribe/Subscribe";
import Footer from "./Footer";

const Events = (props) => {
  return (
    <Container>
      <SubContainer className="align-items-center">
        <PageTitle>
          <h1>Events</h1>
        </PageTitle>

        <Card />
        <hr />
        <Subscribe />
        <Footer />
      </SubContainer>
    </Container>
  );
};
const PageTitle = styled.div`
  @media (min-width: 768px) {
    margin-top: 20px;
    h1 {
      font-size: 42px;
      font-weight: 800;
      color: #DA0037;
    }
  }
  @media (max-width: 768px) {
    margin-top: 20px;
    h1 {
      font-size: 32px;
      font-weight: 800;
      color: #DA0037;
    }
  }
`;
const SubContainer = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
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
  align-items: center;
  text-align: center;
  min-height: calc(100vh);
  overflow-x: hidden;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #272727;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
export default Events;
