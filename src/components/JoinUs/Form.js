import React from "react";
import styled from "styled-components";
import { db } from "../Firebase/firebase";

const Form = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [year, setYear] = React.useState("");
  const [department, setDepartment] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [discordId, setdiscordId] = React.useState("");
  const [interest, setInterest] = React.useState("");
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

    db.collection("members")
      .add({
        timestamp: timestamp,
        name: name,
        email: email,
        phone: phone,
        discordId: discordId,
        year: year,
        department: department,
        interest: interest
      })
      .then(() => {
        alert("Thanks for signing up for the ISCB - IUCEE Student Chapter of BMSCE Membership!\nShortly we will email you with further details.");
      })
      .catch((error) => {
        alert(error.message);
      });

    setName("");
    setEmail("");
    setPhone("");
    setdiscordId("");
    setYear("");
    setDepartment("");
    setInterest("");
  };

  return (
    <FormArea className="align-items-center">
      <FormGroup>
        <form onSubmit={handleSubmit}>
          <label for="year">Full Name *</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            required
          ></input>
          <label for="year">Email Address *</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            required
          ></input>
          <label for="year">Year of Study *</label>
          <select value={year} onChange={(e) => setYear(e.target.value)}
          required>
            <option hidden value="None" selected>
              None
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <label for="department">Department of Study *</label>
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            required
          >
            <option hidden value="None" selected>
              None
            </option>
            <option value="Civil Engineering">Civil Engineering</option>
            <option value="Mechanical Engineering">
              Mechanical Engineering
            </option>
            <option value="Electrical and Electronics Engineering">
              Electrical and Electronics Engineering
            </option>
            <option value="Electronics and Communication Engineering">
              Electronics and Communication Engineering
            </option>
            <option value="Industrial Engineering and Management">
              Industrial Engineering and Management
            </option>
            <option value="Computer Science and Engineering">
              Computer Science and Engineering
            </option>
            <option value="Electronics and Telecommunication Engineering">
              Electronics and Telecommunication Engineering
            </option>
            <option value="Information Science and Engineering">
              Information Science and Engineering
            </option>
            <option value="Electronics and Instrumentation Engineering">
              Electronics and Instrumentation Engineering
            </option>
            <option value="Medical Electronics">Medical Electronics</option>
            <option value="Chemical Engineering">Chemical Engineering</option>
            <option value="Bio-Technology">Bio-Technology</option>
            <option value="Aerospace Engineering">Aerospace Engineering</option>
            <option value="AI & ML">AI & ML</option>
          </select>
          <label for="year">WhatsApp Phone Number *</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="WhatsApp Phone Number"
            required
          ></input>
          <label for="year">Discord ID</label>
          <input
            type="text"
            value={discordId}
            onChange={(e) => setdiscordId(e.target.value)}
            placeholder="Discord ID"
            required
          ></input>
          <label for="year">Interest *</label>
          <textarea
            type="text"
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            placeholder="Interest"
            required
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
    label {
      display: flex;
      flex-flow: row nowrap;
      margin-top: 10px;
      padding-left: 10px;
      align-items: center;
      justify-content: left;
      color: #121212;
      border: none;
      border-radius: 50px;
      font-size: 18px;
      font-weight: 700;
    }
    input {
      display: flex;
      flex-flow: row nowrap;
      width: 350px;
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
    select {
      display: flex;
      flex-flow: row nowrap;
      width: 350px;
      height: 50px;
      padding-left: 10px;
      align-items: center;
      justify-content: center;
      background-color: #121212;
      color: #ededed;
      border: none;
      border-radius: 50px;
      font-size: 14px;
      option {
        padding: 10px;
      }
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
      color: #ededed;
      border: none;
      border-radius: 30px;
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
    label {
      display: flex;
      flex-flow: row nowrap;
      margin-top: 10px;
      padding-left: 10px;
      align-items: center;
      justify-content: left;
      color: #121212;
      border: none;
      border-radius: 50px;
      font-size: 18px;
      font-weight: 700;
    }
    input {
      display: flex;
      flex-flow: row nowrap;
      width: 350px;
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
    select {
      display: flex;
      flex-flow: row nowrap;
      margin-top: 10px;
      width: 350px;
      height: 50px;
      padding-left: 10px;
      align-items: center;
      justify-content: center;
      background-color: #121212;
      color: #ededed;
      border: none;
      border-radius: 50px;
      font-size: 14px;
      option {
        padding: 10px;
      }
    }
    textarea {
      display: flex;
      flex-flow: row nowrap;
      width: 350px;
      height: 150px;
      padding-top: 15px;
      padding-left: 15px;
      align-items: center;
      justify-content: center;
      background-color: #121212;
      color: #ededed;
      border: none;
      border-radius: 30px;
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
    label {
      display: flex;
      flex-flow: row nowrap;
      margin-top: 10px;
      padding-left: 10px;
      align-items: center;
      justify-content: left;
      color: #121212;
      border: none;
      border-radius: 50px;
      font-size: 18px;
      font-weight: 700;
    }
    input {
      display: flex;
      flex-flow: row nowrap;
      width: 300px;
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
    select {
      display: flex;
      flex-flow: row nowrap;
      width: 300px;
      height: 50px;
      padding-left: 10px;
      align-items: center;
      justify-content: center;
      background-color: #121212;
      color: #ededed;
      border: none;
      border-radius: 50px;
      font-size: 14px;
      option {
        padding: 10px;
      }
    }
    textarea {
      display: flex;
      flex-flow: row nowrap;
      width: 300px;
      height: 150px;
      padding-top: 15px;
      padding-left: 15px;
      align-items: center;
      justify-content: center;
      background-color: #121212;
      color: #ededed;
      border: none;
      border-radius: 30px;
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
  form {
    span {
      color: #444444;
    }
  }
  @media (min-width: 1024px) {
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
export default Form;
