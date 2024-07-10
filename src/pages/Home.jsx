import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../firebase/config";
import { logout as logoutHandle } from "../../store/auth";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.auth)
    const handleLogout = async() => {
        await logout()
        dispatch(logoutHandle())
        navigate('/login', {
            replace: true
        })

    }

    if(user) {
        return(
            <div>
                <h1>Welcome!</h1>
                <button onClick={handleLogout} className="btn">Logout</button>
            </div>
        )
    }

  return (
    <>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </>
  );
};

export default Home;
