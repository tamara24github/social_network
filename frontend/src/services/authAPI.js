import axios from "axios";

axios.defaults.withCredentials = true;

const BASEURL = "http://localhost:8080";

export const registerUser = async (email, password, name, navigate) => {
  try {
    const response = await axios.post(`${BASEURL}/register`, {
      username: email,
      password,
      name,
    });
    if (response && response.data.message === "Registration successful") {
      console.log("User registered successfully!");
      // Redirect to profile page after successful registration
      navigate("/profile");
    }
    console.log("Registration Success:", response.data);
  } catch (error) {
    console.error("Registration Error:", error.response?.data || error);
  }
};
export const loginUser = async (email, password, navigate) => {
  try {
    const response = await axios.post(`${BASEURL}/login`, {
      username: email,
      password,
    });
    if (response && response.data.message === "Login successful") {
      console.log("User authenticated successfully!");

      navigate("/profile");
    }
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
