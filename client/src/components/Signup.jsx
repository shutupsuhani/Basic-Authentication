import { useState } from "react";
import "../components/signup.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [email, setEmail ] = useState('');

  const navigate=useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/auth/signup", {
      username,
      email,
      password,
    }).then(response=>{
      if(response.data.status)
        navigate('/login')
    }).catch(err=>{
        console.log(err);
    })
  };

  return (
    <div className="signupcontainer">
      <h2>Register</h2>
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
          <label className="inputlabel">Username:</label>
          <input
            value={username}
            className="inputarea"
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
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
          Register
        </button>
        <p>Already Have an Account? <Link to="/login">Login</Link></p> 
      </form>
    </div>
  );
};

export default Signup;
