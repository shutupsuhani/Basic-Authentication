import { useState } from "react";
import "../components/signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Forgotpassword = () => {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/auth/forgot-password", { email })
      .then((response) => {
        if (response.data.status)
          alert("Check your mail for reset password link");
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="signupcontainer">
      <h2>Forgot-Password</h2>
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

        <button type="submit" className="registerbutton">
          Reset
        </button>
      </form>
    </div>
  );
};

export default Forgotpassword;
