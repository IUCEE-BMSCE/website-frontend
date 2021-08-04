import styled from "styled-components";
import { Helmet } from "react-helmet";
import Card from "./Events/Card";
import Subscribe from "./Subscribe/Subscribe";
import Footer from "./Footer";

const Events = (props) => {
  return (
    <>
      <Helmet>
        <title>Events | ISCB - IUCEE Student Chapter of BMSCE</title>
        <meta name="title" content="ISCB - IUCEE Student Chapter of BMSCE" />
        <meta
          name="description"
          content="To contribute to the improvement of engineering education, in tandem with academia and industry. Empowering and fostering students as means of a positive change in local societies, imbued with pragmatic efforts and human ideals, aimed at creating holistic value and increased competency."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://iucee-bmsce.live/" />
        <meta
          property="og:title"
          content="ISCB - IUCEE Student Chapter of BMSCE"
        />
        <meta
          property="og:description"
          content="To contribute to the improvement of engineering education, in tandem with academia and industry. Empowering and fostering students as means of a positive change in local societies, imbued with pragmatic efforts and human ideals, aimed at creating holistic value and increased competency."
        />
        <meta
          property="og:image"
          content="https://iucee-bmsce.live/images/meta-logo.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://iucee-bmsce.live/" />
        <meta
          property="twitter:title"
          content="ISCB - IUCEE Student Chapter of BMSCE"
        />
        <meta
          property="twitter:description"
          content="To contribute to the improvement of engineering education, in tandem with academia and industry. Empowering and fostering students as means of a positive change in local societies, imbued with pragmatic efforts and human ideals, aimed at creating holistic value and increased competency."
        />
        <meta
          property="twitter:image"
          content="https://iucee-bmsce.live/images/meta-logo.png"
        />
      </Helmet>

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
    </>
  );
};
const PageTitle = styled.div`
  @media (min-width: 768px) {
    margin-top: 20px;
    h1 {
      font-size: 42px;
      font-weight: 800;
      color: #da0037;
    }
  }
  @media (max-width: 768px) {
    margin-top: 20px;
    h1 {
      font-size: 32px;
      font-weight: 800;
      color: #da0037;
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
