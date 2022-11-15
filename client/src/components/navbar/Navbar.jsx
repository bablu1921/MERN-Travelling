import "./navbar.css";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation()
  const logout=()=>{
    localStorage.removeItem('user');
    window.location.reload(false);
  }

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">AwesomeTravel</span>
        </Link>
        {user ? user.username : (
          <div className="navItems">
            <Link to="/register"><button className="navButton">Register</button></Link>
            <Link to="/login"><button className="navButton">Login</button></Link>
          </div>
        )}
        {user &&
         <button onClickCapture={logout}>logout user</button>}
      </div>
    </div>
  );
};

export default Navbar;
