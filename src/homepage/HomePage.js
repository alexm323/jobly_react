import React, { useContext } from "react";
import { NavLink,Link} from "react-router-dom";
import UserContext from "../authentication/UserContext";

function HomePage() {
  const {currentUser} = useContext(UserContext);
  return (
    <div>
      
      {currentUser ? 
      
      <div  className="flex h-screen">
        <div className="w-1/3  m-auto bg-blue-900 rounded p-10 text-blue-100">   
          <div>
          <h2 className='text-3xl'>Welcome back {currentUser.name || currentUser.username}
      </h2>
          </div>
          <div className='w-full rounded my-3'>
            <img className='rounded' src="https://images.unsplash.com/photo-1550599112-0c21a831f6b9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt=""></img>
          </div>
          <p className='text-2xl'>Get this bread!</p>
          <div className='flex justify-between my-5'>
            
            <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded float-left" to="/companies">Search by Company</Link>
            <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded float-right" to="/jobs">Search by Job</Link>
          </div> 
        </div>
       </div>
      
      :(
        
        
      <div  className="flex h-screen">
        <div className="w-1/3  m-auto bg-blue-900 rounded p-10 text-blue-100">   
          <div>
            <h1 className='text-5xl my-3'>Welcome to Jobly</h1>
          </div>
          <div className='w-full rounded my-3'>
            <img className='rounded' src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt=""></img>
          </div>
          <p className='text-2xl'>Job Search: Developed by Developers for Developers</p>
          <div className='flex justify-between my-5'>
            
            <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded float-left" to="/login">Already Registered?</Link>
            <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded float-right" to="/signup">Create Account</Link>
          </div> 
        </div>
       </div>
      
      )}
      
      
    </div>
  );
}

export default HomePage;