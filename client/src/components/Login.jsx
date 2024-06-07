//login.jsx
import { useState } from "react";
import "../components/signup.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const googleAuth = ()=>{
     window.open(
       "http://localhost:3000/auth/google/callback",
       "_self"
     )
  }

  const navigate = useNavigate();
  axios.defaults.withCredentials=true;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/auth/login", {
        email,
        password,
      })
      .then((response) => {
        if (response.data.status) navigate("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="signupcontainer">
      <h2>Login</h2>
      <form className="forminput" onSubmit={handleSubmit}>
        <div className="Inputfield">
          <label className="inputlabel">Email:</label>
          <input
            value={email}
            className="inputarea"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="Inputfield">
          <label className="inputlabel">Password:</label>
          <input
            value={password}
            className="inputarea"
            type="Password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="registerbutton">
          Login
        </button>
        <p><Link to="/forgot-password">Forgot Password</Link></p>
        <p className="separator">OR</p>
        <button onClick={googleAuth} className="logobtn"><img className="googlelogoimg"  src="googlelogo.png"/><span>Sign In with Google</span></button>
        <p>
          Don't Have an Account? <Link to="/signup">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
