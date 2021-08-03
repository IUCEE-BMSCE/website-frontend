import React from "react";
import styled from "styled-components";
import Form from "./Contact/Form";
import Subscribe from "./Subscribe/Subscribe";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
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
      background-color: #ffffff;
      background: linear-gradient(135deg, #fc466b 30%, #3f5efb 70%);
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
      font-size: 32px;
      font-weight: 700;
      background-color: #ffffff;
      background: linear-gradient(135deg, #fc466b 30%, #3f5efb 70%);
      background-size: 100%;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-background-clip: text;
      -moz-text-fill-color: transparent;
    }
  }
`;
const Bucket = styled.div`
  color: #ffffff;
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