import React from "react";
import AuthForm from "./AuthForm";
import { registerUser } from "../../services/authAPI";

const Register = () => {
  const handleRegisterSubmit = async (formData) => {
    console.log("Registering user with data:", formData);
    const { email, password, name } = formData;

    try {
      await registerUser(email, password, name);
    } catch (error) {
      console.log(`Error from register form: ${error}`);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <AuthForm onSubmit={handleRegisterSubmit} isLogin={false} />
    </div>
  );
};

export default Register;
