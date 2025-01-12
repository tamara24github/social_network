import { Link } from "react-router-dom";

const AuthenticationPage = () => {
  return (
    <div>
      <h1>Welcome! Choose your sign-in method</h1>

      <div>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>

      <div>
        <Link to="/register">
          <button>Register</button>
        </Link>
      </div>

      <div>
        <Link to="/auth/google">
          <button>Sign in with Google</button>
        </Link>
      </div>

      <div>
        <Link to="/auth/github">
          <button>Sign in with GitHub</button>
        </Link>
      </div>
    </div>
  );
};

export default AuthenticationPage;
