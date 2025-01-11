import React from "react";
import AuthForm from "./AuthForm"; // Import the reusable Form component

const Register = () => {
  const handleRegisterSubmit = (formData) => {
    console.log("Registering user with data:", formData);
  };

  return (
    <div>
      <h1>Register</h1>
      <AuthForm onSubmit={handleRegisterSubmit} isLogin={false} />
    </div>
  );
};

export default Register;
