import AuthForm from "./AuthForm";
import { loginUser } from "../../services/authAPI";
import FormHeading from "../common/FormHeading";
import FormContainer from "../common/FormContainer";
import AuthPageContainer from "../common/AuthPageContainer";

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
    <AuthPageContainer>
      <FormContainer>
        <FormHeading>Login to devPulse</FormHeading>
        <AuthForm onSubmit={handleLoginSubmit} isLogin={true} />
      </FormContainer>
    </AuthPageContainer>
  );
};

export default Login;
