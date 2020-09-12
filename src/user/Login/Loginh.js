import React, { useState } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

//import components
import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import { InputField, PwInputField } from "../../components/Forms/Input";

//import styles and assets
import styled from "styled-components";

//import data
import { apiEndpoint } from "../../config";

const Loginh = (props) => {
  const [account, setAccount] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const validateEach = ({ name, value }) => {
    if (name === "email") {
      if (value.trim() === "") {
        return "Email is required";
      }
    }
    if (name === "password") {
      if (value.trim() === "") {
        return "Password is required";
      }
      if (value.length <= 4) {
        return "Password must be more than 4 characters";
      }
    }
  };

  const handleChange = ({ currentTarget: input }) => {
    const newerrors = { ...errors };
    const errorMessage = validateEach(input);
    if (errorMessage) {
      newerrors[input.name] = errorMessage;
    } else {
      delete newerrors[input.name];
    }
    setErrors(newerrors);

    const userInput = { ...account };
    userInput[input.name] = input.value;
    setAccount(userInput);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //call server

    postData();
  };

  const postData = async () => {
    try {
      const userData = {
        email: account.email,
        password: account.password,
      };
      const { data: token } = await axios.post(
        // "apiEndpoint/account/sign-in",
        "https://jsonplaceholder.typicode.com/posts",
        userData
      );
      localStorage.setItem("token", token);
      console.log(token);
      props.history.push("/");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert("Invalid User");
      }
    }
  };

  return (
    <Wrapper>
      <Header />
      <Nav />
      <Container>
        <Section>
          <h3>Sign in to your acocunt</h3>
          <p>
            If you already have a Rimowa account, please sign in. We'll use your
            existing details for a speedier checkout.
          </p>
          <form onSubmit={handleSubmit}>
            <InputField
              name="email"
              error={errors.email}
              placeholder="Email Address*"
              type="text"
              value={account.email}
              handleChange={handleChange}
            />
            <PwInputField
              name="password"
              error={errors.password}
              placeholder="Password*"
              value={account.password}
              handleChange={handleChange}
            />

            <button>Register</button>
          </form>
        </Section>
        <Section>
          <h3>Don't have an account?</h3>
          <p>Creating a RIMOWA account lets you:</p>
          <ul className="pitchLine">
            <li>ADD ITEMS TO YOUR WISHLIST</li>
            <li>GET PERSONALISED RECOMMENDATIONS</li>
            <li>CHECK OUT MORE QUICKLY</li>
            <li>TRACK YOUR ORDERS</li>
            <li>REGISTER MY RIMOWA</li>
          </ul>
          <button className="createAccBtn">Create Account</button>
        </Section>
      </Container>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  background-color: #fbfaf9;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1360px;
  font-family: "Work Sans", sans-serif;
  margin: 0 auto;
`;

const Section = styled.div`
  width: 50%;
  text-align: center;
  padding: 6em;

  h3 {
    font-size: 1rem;
    text-transform: uppercase;
    margin: 1em 0;
  }

  p {
    margin: 1em 0;
  }

  button {
    margin-top: 2em;
  }
`;

export default withRouter(Loginh);
