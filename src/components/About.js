import styled from "styled-components";
import { Helmet } from "react-helmet";
import Team from "./About/Team";
import Subscribe from "./Subscribe/Subscribe";
import Footer from "./Footer";

const About = (props) => {
  return (
    <>
    <Helmet>
        <title>About Us | ISCB - IUCEE Student Chapter of BMSCE</title>
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
      <SubContainer className="align-items-center text-align-center justify-content-center">
        <PageTitle>
          <h1>About Us</h1>
        </PageTitle>
        <PageContent className="align-items-center text-align-center justify-content-center">
          <h4 className="align-items-center text-align-center justify-content-center">
            Indo-Universal Collaboration for Engineering Education, Student
            Chapter of BMSCE, was established in the year 2021. This club was
            introduced to compliment the ideology and objective of BMSCE, that
            is, providing quality education in the filed of engineering
            education.
          </h4>
          <h2>Who we are</h2>
          <h5>
            IUCEE Student Chapter of BMSCE, is lead by a faculty coordinator,
            student coordinators and with a team of officers from all the
            departments of engineering. We work under the guidance of our Faculty Guide to achieve the true potential of our Student Community.
          </h5>
        </PageContent>
        <hr />
          <h2>Team Members</h2>
        <Team />
        <hr />
        <Subscribe />
        <Footer />
      </SubContainer>
    </Container>
    </>
  );
};
const PageContent = styled.div`
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media (min-width: 768px) {
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 40px;
    max-width: 900px;
    h2 {
      margin-top: 30px;
      font-size: 38px;
      font-weight: 600;
      color: #da0037;
    }
    h6 {
    }
  }
  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 30px;
    h2 {
      font-size: 28px;
      font-weight: 600;
      color: #da0037;
    }
    h6 {
      max-width: 800px;
    }
  }
`;
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
    h2 {
      font-size: 38px;
      font-weight: 600;
      color: #da0037;
    }
  }
  @media (max-width: 768px) {
    margin-top: 20px;
    h2 {
      font-size: 28px;
      font-weight: 600;
      color: #da0037;
    }
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
export default About;
