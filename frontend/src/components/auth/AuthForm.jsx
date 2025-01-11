import { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";

const AuthForm = ({ onSubmit, isLogin }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {!isLogin && (
        <Input
          inputType="text"
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      )}

      <Input
        inputType="email"
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <Input
        inputType="password"
        label="Password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />

      <Button type="submit">{isLogin ? "Login" : "Register"}</Button>
    </form>
  );
};

export default AuthForm;
