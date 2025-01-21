import { Link } from "react-router-dom";
import Button from "../components/common/Button";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import AuthPageContainer from "../components/common/AuthPageContainer";

const AuthenticationPage = () => {
  return (
    <AuthPageContainer>
      <div className="ap-heading w-[80%] text-center text-white bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text shadow-glow mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold animate-fadeIn">
          Welcome to{" "}
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-400 animate-pulse">
            devPulse
          </span>{" "}
          !
        </h1>
        <h3 className="text-2xl sm:text-3xl font-semibold mt-4 animate-fadeIn ">
          Choose how you'd like to get started and connect with fellow
          developers.
        </h3>
      </div>

      <div className="w-full max-w-4xl flex flex-col items-center space-y-6">
        <div className="w-full flex justify-center items-center animate-fadeIn ">
          <Link
            to="http://localhost:8080/auth/github"
            className="w-full flex justify-center items-center"
          >
            <Button>
              <FaGithub className="mr-3" />
              Sign in with GitHub
            </Button>
          </Link>
        </div>

        <div className="w-full flex justify-center items-center animate-fadeIn ">
          <Link
            to="http://localhost:8080/auth/google"
            className="w-full flex justify-center items-center"
          >
            <Button>
              <FaGoogle className="mr-3" />
              Sign in with Google
            </Button>
          </Link>
        </div>

        {/* Other Links for Login/Registration */}
        <div className="w-full flex flex-col justify-center items-center animate-fadeIn ">
          <div className="text-center mb-1">
            <p className="text-white text-sm">
              Already have an account? Log in to access your profile.
            </p>
          </div>
          <Link to="/login" className="w-full flex justify-center items-center">
            <Button>Log in to Your Account</Button>
          </Link>
        </div>

        <div className="w-full flex flex-col justify-center items-center animate-fadeIn ">
          <div className="text-center mb-1">
            <p className="text-white text-sm">
              New to devPulse? Sign up to join the community.
            </p>
          </div>
          <Link
            to="/register"
            className="w-full flex justify-center items-center"
          >
            <Button>Create a New Account</Button>
          </Link>
        </div>
      </div>
    </AuthPageContainer>
  );
};

export default AuthenticationPage;
