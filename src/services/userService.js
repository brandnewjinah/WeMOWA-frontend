import axios from "axios";

// import { apiEndpoint } from "../config";
// const Endpoint = apiEndpoint + "/users";

const apiEndpoint = "http://localhost:3900/api/users";

export const Registration = (user) => {
  axios.post(apiEndpoint, {
    email: user.email,
    password: user.password,
    name: user.name,
  });
};
