import AuthForm from "./AuthForm";

const Login = () => {
  const handleLoginSubmit = (formData) => {
    console.log("Logging in with data:", formData);
  };

  return (
    <div>
      <h1>Login</h1>
      <AuthForm onSubmit={handleLoginSubmit} isLogin={true} />
    </div>
  );
};

export default Login;
