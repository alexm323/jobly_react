import React, { useContext } from "react";
// import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import UserContext from "../authentication/UserContext";


const NavBar = ({logout}) => {
  const {currentUser} = useContext(UserContext);

  function loggedInNavigation(){
    return(
      <div>
        <NavLink to="/companies">Companies</NavLink>

        <NavLink to="/jobs">Jobs</NavLink>

        <NavLink to="/profile">Profile</NavLink>

        <NavLink to="/" onClick={logout}>Logout {currentUser.firstName || currentUser.username}</NavLink>

      </div>
    )
  }

  function loggedOutNavigation(){
    return (
      <div>
            
        <NavLink to="/">Home</NavLink>

        <NavLink to="/login">Login</NavLink>

        <NavLink to="/signup">Sign Up</NavLink>
      </div>
    );
  }
  return (
    <Navbar>
      <NavLink to='/'>
      Jobly
      </NavLink>

      {currentUser ? loggedInNavigation() : loggedOutNavigation()}
    </Navbar>
  )
}

export default NavBar;
