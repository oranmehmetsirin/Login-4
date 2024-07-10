import { useState } from "react";
import { login } from "../firebase/config";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login as loginHandle } from "../../store/auth";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await login(email, password);
      dispatch(loginHandle(user));
      navigate("/", { replace: true });
    } catch (error) {
      console.error("Login error:", error);
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
          />
          <br />
        </div>
        <div>
          <button className="btn" disabled={!email || !password} type="submit">
            Login!
          </button>
        </div>
      </div>
    </form>
  );
};

export default Login;
