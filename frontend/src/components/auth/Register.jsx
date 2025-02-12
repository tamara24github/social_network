import AuthForm from "./AuthForm";
import { registerUser } from "../../services/authAPI";
import FormHeading from "../common/FormHeading";
import FormContainer from "../common/FormContainer";
import AuthPageContainer from "../common/AuthPageContainer";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const handleRegisterSubmit = async (formData) => {
    console.log("Registering user with data:", formData);
    const { email, password, name } = formData;
    try {
      await registerUser(email, password, name, navigate);
      console.log("Registration successful!");
    } catch (error) {
      console.log(`Error from register form: ${error}`);
    }
  };

  return (
    <AuthPageContainer>
      <FormContainer>
        <FormHeading>Create Your devPulse Account</FormHeading>
        <AuthForm onSubmit={handleRegisterSubmit} isLogin={false} />
      </FormContainer>
    </AuthPageContainer>
  );
};

export default Register;
