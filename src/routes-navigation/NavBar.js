import React, { useContext } from "react";
import {Link } from "react-router-dom";
import UserContext from "../authentication/UserContext";

const NavBar = ({logout}) => {
  const {currentUser} = useContext(UserContext);

  function loggedInNavigation(){
    return(
      <div>
        
        <div className="flex justify-between items-center py-4 bg-blue-900">
          <div className="flex-shrink-0 ml-10 cursor-pointer">
            
            <Link to='/' className="ml-1 text-3xl text-blue-100 font-semibold">Jobly</Link>
          </div>

          <i className="fas fa-bars fa-2x visible md:invisible mr-10 md:mr-0 text-blue-200 cursor-pointer"></i>
          <ul className="hidden md:flex overflow-x-hidden mr-10 font-semibold">
            <li className="mr-6 p-1">
              <Link className="text-white hover:text-blue-300" to="/companies">Companies</Link>
            </li>
            <li className="mr-6 p-1">
              <Link className="text-white hover:text-blue-300" to="/jobs">Jobs</Link>
            </li>
            <li className="mr-6 p-1">
              <Link className="text-white hover:text-blue-300" to="/profile">Profile</Link>
            </li>
            <li className="mr-6 p-1">
              <Link className="text-white hover:text-blue-300"  to="/" onClick={logout}>Logout {currentUser.firstName}</Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }

  function loggedOutNavigation(){
    return (
      <div>
        
        <div className="flex justify-between items-center py-4 bg-blue-900">
          <div className="flex-shrink-0 ml-10 cursor-pointer">
            
          <Link to='/' className="ml-1 text-3xl text-blue-100 font-semibold">Jobly</Link>
          </div>
          <ul className="hidden md:flex overflow-x-hidden mr-10 font-semibold">
            <li className="mr-6 p-1">
              <Link className="text-white hover:text-blue-300" to="/login">Login</Link>
            </li>
            <li className="mr-6 p-1">
              <Link className="text-white hover:text-blue-300" to="/signup">Signup</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  return (


      <div>
        {currentUser ? loggedInNavigation() : loggedOutNavigation()} 
      </div>
      
    
  )
  


}

export default NavBar;
