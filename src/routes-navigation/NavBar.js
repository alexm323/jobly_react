import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
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
        
        <NavLink variant="contained" to="/login">Login</NavLink>

        <NavLink variant="contained" to="/signup">Sign Up</NavLink>
      </div>
    );
  }
  return (


      <div>
        
      
          
            <h3 variant='h3'>
              Jobly
            </h3>
            <h5 align='right' variant='h5'>
              {currentUser ? loggedInNavigation() : loggedOutNavigation()}
            </h5>
            
          
      

      
      </div>
      
    
  )
  


}

export default NavBar;
