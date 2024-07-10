import { useState } from "react";
import { register } from "../firebase/config";
import { useDispatch } from "react-redux";
import { login as loginHandle } from "../../store/auth";

const Register = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await register(email, password);
      console.log(user);
      dispatch(loginHandle(user));
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div>
        <label>E-Mail</label>
        <div>
          <input
            className="input"
            type="email"
            placeholder="E-Mail.."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />{" "}
          <br />
        </div>
        <label>Password</label>
        <div>
          <input
            className="input"
            type="password"
            placeholder="Password.."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />{" "}
          <br />
        </div>
        <div>
          <button className="btn" disabled={!email || !password} type="submit">
            {" "}
            Sign Up!{" "}
          </button>
        </div>
      </div>
    </form>
  );
};

export default Register;
