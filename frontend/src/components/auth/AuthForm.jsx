import { useForm } from "react-hook-form";
import * as Yup from "yup";
import Input from "../common/Input";
import Button from "../common/Button";
import Label from "../common/Label";

const AuthForm = ({ onSubmit, isLogin }) => {
  const { register, handleSubmit } = useForm();

  const onHandleSubmit = (data) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onHandleSubmit)} className="p-5">
      {!isLogin && (
        <div>
          <Label className="text-white">Name</Label>{" "}
          <Input
            autoComplete="off"
            inputType="text"
            {...register("name")}
            required
            className="w-full p-4 mb-4 rounded-md"
          />
        </div>
      )}

      <div>
        <Label className="text-white">Email</Label>{" "}
        <Input
          autoComplete="off"
          inputType="email"
          {...register("email")}
          required
          className="w-full p-4 mb-4 rounded-md"
        />
      </div>

      <div>
        <Label className="text-white">Password</Label>{" "}
        <Input
          autoComplete="off"
          inputType="password"
          {...register("password")}
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
