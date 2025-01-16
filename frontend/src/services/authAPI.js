import axios from "axios";

const BASEURL = "http://localhost:8080";

export const registerUser = async (email, password, name) => {
  try {
    const response = await axios.post(`${BASEURL}/register`, {
      username: email,
      password,
      name,
    });
    console.log("Registration Success:", response.data);
  } catch (error) {
    console.error("Registration Error:", error.response?.data || error);
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${BASEURL}/login`, {
      username: email,
      password,
    });
    console.log("Login Success:", response.data);
  } catch (error) {
    console.error("Login Error:", error.response?.data || error);
  }
};

export const checkAuth = async () => {
  try {
    const response = await axios.get(`${BASEURL}/api/current_user`);
    console.log("Authenticated User:", response.data);
  } catch (error) {
    console.error("Not Authenticated:", error.response?.data || error);
  }
};
