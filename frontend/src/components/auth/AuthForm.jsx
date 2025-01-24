import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Input from "../common/Input";
import Button from "../common/Button";
import Label from "../common/Label";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const AuthForm = ({ onSubmit, isLogin }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      email: "",
      password: "",
      ...(isLogin ? {} : { name: "" }),
    },
  });

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
            className="w-full p-4 mb-4 rounded-md"
          />
          {errors.name && (
            <span className="text-red-500">{errors.name.message}</span>
          )}
        </div>
      )}

      <div>
        <Label className="text-white">Email</Label>{" "}
        <Input
          autoComplete="off"
          inputType="email"
          {...register("email")}
          className="w-full p-4 mb-4 rounded-md"
        />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}
      </div>

      <div>
        <Label className="text-white">Password</Label>{" "}
        <Input
          autoComplete="off"
          inputType="password"
          {...register("password")}
          className="w-full p-4 mb-6 rounded-md"
        />
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}
      </div>

      <Button type="submit" className="mt-8 mx-auto mb-0">
        {isLogin ? "Login to devPulse" : "Join Now"}
      </Button>
    </form>
  );
};

export default AuthForm;
