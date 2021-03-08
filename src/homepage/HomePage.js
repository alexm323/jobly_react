import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../authentication/UserContext";

function HomePage() {
  const {currentUser} = useContext(UserContext);
  return (
    <div>
      <p>
        All Jobs in one convenient place
      </p>
      {currentUser ? 
      <h2>Welcome back {currentUser.name || currentUser.username}
      </h2>
      :(
        <p>
          <NavLink to='/login'>Log in</NavLink>
          <NavLink to='signup'>Sign Up</NavLink>
        </p>
      )}
    </div>
  );
}

export default HomePage;