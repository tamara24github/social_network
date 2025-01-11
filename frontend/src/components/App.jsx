import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import SignInWithGitHub from "./auth/SignInWithGitHub";
import SignInWithGoogle from "./auth/SignInWithGoogle";
import AuthenticationPage from "../pages/AuthenticationPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthenticationPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/auth/google" element={<SignInWithGoogle />} />
        <Route path="/auth/github" element={<SignInWithGitHub />} />
      </Routes>
    </Router>
  );
}

export default App;
