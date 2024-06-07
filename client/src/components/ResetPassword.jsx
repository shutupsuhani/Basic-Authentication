import { useState } from "react";
import "../components/signup.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const {id,token} = useParams();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:3000/auth/reset-password/${id}/${token}`, { password })
      .then((response) => {
        if (response.data.status==="Success") {
             navigate("/")
        }
      })
      .catch((err) => {
        console.log(err);
        setError("Error resetting password. Please try again.");
      });
  };

  return (
    <div className="signupcontainer">
      <h2>Reset-Password</h2>
      <form className="forminput" onSubmit={handleSubmit}>
        <div className="Inputfield">
          <label className="inputlabel"><strong>Password:</strong></label>
          <input
            value={password}
            className="inputarea"
            type="password"
            placeholder="Password" // Change placeholder to "Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="registerbutton">
          Update Password
        </button>

        {error && <p className="error-message">{error}</p>} {/* Display error message */}
      </form>
    </div>
  );
};

export default ResetPassword;
