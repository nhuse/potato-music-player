import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import '../Styling/NavBar.css'
import potato from '../Images/potato.png'

const linkStyles = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "#00f000",
  textDecoration: "none",
  color: "rgba(255,255,255,.87)",
};

function Navbar({ accessToken, setAccessToken }) {
  const history = useHistory();

  function handleLogout() {
    setAccessToken(null);
    history.push("/login");
  }

  return (
    <div className="nav-bar">
      <NavLink
        to="/dashboard"
        exact
        style={linkStyles}
        activeStyle={{
          background: "#1db954",
      }}>
        Dashboard
      </NavLink>
      {accessToken ?
      <NavLink onClick={handleLogout}
        to="/"
        style={linkStyles}
        activeStyle={{
          background: "#1db954",
      }}>Logout
      </NavLink>
      :
      <NavLink
        to="/login"
        exact
        style={linkStyles}
        activeStyle={{
          background: "#1db954",
      }}>
        Login
      </NavLink> 
      }
      <img src={potato} alt='potato' id="potato-img" />
    </div>
  );
}

export default Navbar;