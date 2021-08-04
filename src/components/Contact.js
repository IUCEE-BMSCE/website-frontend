import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Form from "./Contact/Form";
import Subscribe from "./Subscribe/Subscribe";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
    <Helmet>
        <title>Contact Us | ISCB - IUCEE Student Chapter of BMSCE</title>
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
      
      <Bucket>
        <SubBucket>
          <h1>Contact Us</h1>
          <SubBucket2>
            <Form />
          </SubBucket2>
        </SubBucket>
      </Bucket>
      <Bucket>
          
        <SubBucket2 className="mt-5">
        <hr className="w-100" />
          <Subscribe />
          <Footer />
        </SubBucket2>
      </Bucket>
    </>
  );
};

const SubBucket2 = styled.div`
  display: flex;
  flex-flow: column;
`;
const SubBucket = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin-top: 8vh;
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
      font-weight: 700;
      color: #DA0037;
    }
  }
`;
const Bucket = styled.div`
  color: #FFFFFF;
  position: relative;
  overflow-x: hidden;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background-color: #272727;
    content: "";
    position: fixed;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Contact;
