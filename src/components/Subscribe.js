import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { db } from "./Firebase/firebase";

const Subscribe = (props) => {
  const [email, setEmail] = React.useState("");
  const rawTimestamp = Date.now();
  const timestamp = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(rawTimestamp);
  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("subscribers")
      .add({
        timestamp: timestamp,
        email: email,
      })
      .then(() => {
        alert("Thanks for Subscribing to Us!\nWill reach out to you soon.");
      })
      .catch((error) => {
        alert(error.message);
      });
    setEmail("");
  };
  return (
    <>
      <Helmet>
        <title>Subcribe | ISCB - IUCEE Student Chapter of BMSCE</title>
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
        <FormArea className="text-align-center justify-content-between align-items-center">
          <h1>Subscribe for Updates</h1>
          <FormGroup>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your E-mail Address"
                required
              ></input>
              <button type="submit">Submit</button>
            </form>
          </FormGroup>
        </FormArea>
      </Container>
    </>
  );
};
const FormGroup = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    input {
      display: flex;
      flex-flow: row nowrap;
      margin-top: 10px;
      width: 500px;
      height: 50px;
      padding-left: 10px;
      align-items: center;
      justify-content: center;
      background-color: #121212;
      color: #ededed;
      border: none;
      border-radius: 50px;
      font-size: 14px;
    }
    button {
      align-items: center;
      justify-content: center;
      text-align: center;
      margin-top: 10px;
      background-color: #da0037;
      border: none;
      border-radius: 50px;
      width: 150px;
      height: 50px;
      font-size: 16px;
      font-weight: 700;
      color: #ededed;
      &:hover {
        background-color: #121212;
        color: #ededed;
      }
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    input {
      display: flex;
      flex-flow: row nowrap;
      margin-top: 10px;
      width: 350px;
      height: 40px;
      padding-left: 10px;
      align-items: center;
      justify-content: center;
      background-color: #121212;
      color: #ededed;
      border: none;
      border-radius: 50px;
      font-size: 14px;
    }
    button {
      align-items: center;
      justify-content: center;
      text-align: center;
      margin-top: 10px;
      background-color: #da0037;
      border: none;
      border-radius: 50px;
      width: 150px;
      height: 50px;
      font-size: 16px;
      font-weight: 700;
      color: #ededed;
      &:hover {
        background-color: #121212;
        color: #ededed;
      }
    }
  }
  @media (max-width: 768px) {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    input {
      display: flex;
      flex-flow: row nowrap;
      margin-top: 10px;
      width: 300px;
      height: 40px;
      padding-left: 10px;
      align-items: center;
      justify-content: center;
      background-color: #121212;
      color: #ededed;
      border: none;
      border-radius: 50px;
      font-size: 14px;
    }
    button {
      align-items: center;
      justify-content: center;
      text-align: center;
      margin-top: 10px;
      background-color: #da0037;
      border: none;
      border-radius: 50px;
      width: 150px;
      height: 50px;
      font-size: 16px;
      font-weight: 700;
      color: #ededed;
      &:hover {
        background-color: #121212;
        color: #ededed;
      }
    }
  }
`;
const FormArea = styled.div`
  position: fixed;
  margin-left: auto;
  margin-right: auto;
  top: 40%;
  left: 0;
  right: 0;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    color: #121212;
    font-weight: 700;
  }
  @media (min-width: 1024px) {
    max-width: 768px;
    background-color: #ffffff;
    padding: 20px 50px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    background-color: #ffffff;
    padding: 20px 50px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 768px) {
    background-color: #ffffff;
    padding: 20px 20px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
  }
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  left: 0;
  right: 0;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
export default Subscribe;
