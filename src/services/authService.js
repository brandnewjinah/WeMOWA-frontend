import axios from "axios";

const apiEndpoint = "http://localhost:3900/api/auth";

export const Signin = (email, password) => {
  return axios.post(apiEndpoint, {
    email,
    password,
  });
};
