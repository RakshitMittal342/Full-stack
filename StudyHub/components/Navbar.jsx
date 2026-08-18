import { NavLink, useNavigate } from "react-router-dom";

function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();

  const logout = () => {
    setIsLoggedIn(false);
    navigate("/login", { replace: true });
  };

  return (
    <nav>
      <NavLink to="/">Home</NavLink>{" "}
      <NavLink to="/login">Login</NavLink>{" "}
      <NavLink to="/tasks">Tasks</NavLink>{" "}
      <NavLink to="/profile">Profile</NavLink>

      {isLoggedIn && (
        <button onClick={logout}>Logout</button>
      )}
    </nav>
  );
}

export default Navbar;
