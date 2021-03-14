import React, { useContext } from "react";
import { NavLink,Link} from "react-router-dom";
import UserContext from "../authentication/UserContext";

function HomePage() {
  const {currentUser} = useContext(UserContext);
  return (
    <div>
      
      {currentUser ? 
      <h2>Welcome back {currentUser.name || currentUser.username}
      </h2>
      :(
        <div>
          <h2 variant='h2'>Welcome to Jobly</h2>
          
          <div variant="contained" color="primary" aria-label="contained primary button group">
            <NavLink to='/login' size='large' color='primary'>Log In</NavLink>
            <NavLink to='/signup' size='large' color='primary'>Sign Up</NavLink>
          </div>
           
        </div>
      
      )}
      
      
    </div>
  );
}

export default HomePage;