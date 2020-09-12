import React, { useState } from "react";

//import styles and assets
import styled from "styled-components";

export const InputField = ({
  error,
  name,
  placeholder,
  type,
  value,
  handleChange,
}) => {
  return (
    <Container>
      <Input
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
      {error && <Error>{error}</Error>}
    </Container>
  );
};

export const PwInputField = ({
  error,
  name,
  placeholder,
  value,
  handleChange,
}) => {
  const [password, setPassword] = useState(true);

  const togglePw = () => {
    setPassword((password) => !password);
  };
  return (
    <Container>
      <Input
        name={name}
        type={password === true ? "password" : "text"}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
      <div onClick={togglePw}>
        {password === true ? <span>Show</span> : <span>Hide</span>}
      </div>
      {error && <Error>{error}</Error>}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  margin: 0.875em 0;

  div {
    position: absolute;
    right: 0.75em;
    top: 1.25em;
    text-transform: uppercase;
    cursor: pointer;
    color: #b2ada6;
  }
`;

const Input = styled.input`
  width: 100%;
  font-size: 1rem;
  border-radius: 0.25em;
  padding: 0.75em;
  margin: 0.5em 0;
`;

const Error = styled.span`
  color: #c81f1f;
  font-size: 0.875rem;
  text-transform: uppercase;
  margin-bottom: 0.125em;
`;
