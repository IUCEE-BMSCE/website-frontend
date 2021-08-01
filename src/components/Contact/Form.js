import React from "react";
import styled from "styled-components";
import { db } from "../Firebase/firebase";

const Form = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [message, setMessage] = React.useState("");
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

    db.collection("contacts")
      .add({
        timestamp: timestamp,
        name: name,
        email: email,
        phone: phone,
        message: message,
      })
      .then(() => {
        alert("Thanks for submitting the form!\nWill reach out to you soon.");
      })
      .catch((error) => {
        alert(error.message);
      });

    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <FormArea className="align-items-center">
      <FormGroup>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name *"
            required
          ></input>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address *"
            required
          ></input>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone Number *"
            required
          ></input>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Please leave a message! *"
          ></textarea>
          <br />
          <span>Fields with * are mandatory !</span>
          <br />

          <button type="submit" id="submit" placeholder="Submit">
            Submit
          </button>
        </form>
      </FormGroup>
    </FormArea>
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
      width: 350px;
      height: 50px;
      padding-left: 10px;
      align-items: center;
      justify-content: center;
      background-color: #121212;
      color: #EDEDED;
      border: none;
      border-radius: 50px;
      font-size: 14px;
    }
    textarea {
      display: flex;
      flex-flow: row nowrap;
      margin-top: 10px;
      width: 350px;
      height: 150px;
      padding-top: 15px;
      padding-left: 15px;
      align-items: center;
      justify-content: center;
      background-color: #121212;
      color: #EDEDED;
      border: none;
      border-radius: 30px;
      font-size: 14px;
    }
    button {
      align-items: center;
      justify-content: center;
      text-align: center;
      margin-top: 10px;
      background-color: #DA0037;
      border: none;
      border-radius: 50px;
      width: 150px;
      height: 50px;
      font-size: 16px;
      font-weight: 700;
      color: #EDEDED;
      &:hover {
        background-color: #121212;
        color: #EDEDED;
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
      height: 50px;
      padding-left: 10px;
      align-items: center;
      justify-content: center;
      background-color: #121212;
      color: #EDEDED;
      border: none;
      border-radius: 50px;
      font-size: 14px;
    }
    textarea {
      display: flex;
      flex-flow: row nowrap;
      margin-top: 10px;
      width: 350px;
      height: 150px;
      padding-top: 15px;
      padding-left: 15px;
      align-items: center;
      justify-content: center;
      background-color: #121212;
      color: #EDEDED;
      border: none;
      border-radius: 30px;
      font-size: 14px;
    }
    button {
      align-items: center;
      justify-content: center;
      text-align: center;
      margin-top: 10px;
      background-color: #DA0037;
      border: none;
      border-radius: 50px;
      width: 150px;
      height: 50px;
      font-size: 16px;
      font-weight: 700;
      color: #EDEDED;
      &:hover {
        background-color: #121212;
        color: #EDEDED;
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
      height: 50px;
      padding-left: 10px;
      align-items: center;
      justify-content: center;
      background-color: #121212;
      color: #EDEDED;
      border: none;
      border-radius: 50px;
      font-size: 14px;
    }
    textarea {
      display: flex;
      flex-flow: row nowrap;
      margin-top: 10px;
      width: 300px;
      height: 150px;
      padding-top: 15px;
      padding-left: 15px;
      align-items: center;
      justify-content: center;
      background-color: #121212;
      color: #EDEDED;
      border: none;
      border-radius: 30px;
      font-size: 14px;
    }
    button {
      align-items: center;
      justify-content: center;
      text-align: center;
      margin-top: 10px;
      background-color: #DA0037;
      border: none;
      border-radius: 50px;
      width: 150px;
      height: 50px;
      font-size: 16px;
      font-weight: 700;
      color: #EDEDED;
      &:hover {
        background-color: #121212;
        color: #EDEDED;
      }
    }
  }
`;
const FormArea = styled.div`
  form {
    span {
      color: #444444;
    }
  }
  @media (min-width: 1024px) {
    background-color: #FFFFFF;
    padding: 20px 50px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    background-color: #FFFFFF;
    padding: 20px 50px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 768px) {
    background-color: #FFFFFF;
    padding: 20px 20px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
  }
`;
export default Form;
