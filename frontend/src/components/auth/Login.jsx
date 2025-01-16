import AuthForm from "./AuthForm";
import { loginUser } from "../../services/authAPI";

const Login = () => {
  const handleLoginSubmit = async (formData) => {
    console.log("Logging in with data:", formData);
    const { email, password } = formData;
    try {
      await loginUser(email, password);
    } catch (error) {
      console.log(`Error from login form: ${error}`);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <AuthForm onSubmit={handleLoginSubmit} isLogin={true} />
    </div>
  );
};

export default Login;
