import React from "react";
import AuthForm from "./AuthForm";
import { registerUser } from "../../services/authAPI";

const Register = () => {
  const handleRegisterSubmit = (formData) => {
    console.log("Registering user with data:", formData);
    const { email, password, name } = formData;
    registerUser(email, password, name);
  };

  return (
    <div>
      <h1>Register</h1>
      <AuthForm onSubmit={handleRegisterSubmit} isLogin={false} />
    </div>
  );
};

export default Register;
