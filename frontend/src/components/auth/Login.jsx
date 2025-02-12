import AuthForm from "./AuthForm";
import { loginUser } from "../../services/authAPI";
import FormHeading from "../common/FormHeading";
import FormContainer from "../common/FormContainer";
import AuthPageContainer from "../common/AuthPageContainer";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleLoginSubmit = async (formData) => {
    const { email, password } = formData;
    try {
      await loginUser(email, password, navigate);
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
