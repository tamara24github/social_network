import { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import Input from "../common/Input";
import Button from "../common/Button";
import Label from "../common/Label";

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
    <form onSubmit={handleSubmit} className="p-5">
      {!isLogin && (
        <div>
          <Label className="text-white">Name</Label>{" "}
          <Input
            inputType="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-4 mb-4 rounded-md"
          />
        </div>
      )}

      <div>
        <Label className="text-white">Email</Label>{" "}
        <Input
          inputType="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-4 mb-4 rounded-md"
        />
      </div>

      <div>
        <Label className="text-white">Password</Label>{" "}
        <Input
          inputType="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full p-4 mb-6 rounded-md"
        />
      </div>

      <Button type="submit" className="mt-8 mx-auto mb-0">
        {isLogin ? "Login to devPulse" : "Join Now"}
      </Button>
    </form>
  );
};

export default AuthForm;
