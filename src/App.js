import React,{useEffect, useState} from 'react';
import {BrowserRouter } from 'react-router-dom';
import NavBar from './routes-navigation/NavBar';
import Routes from './routes-navigation/Routes'
import JoblyApi from './api/Api';
import jwt from 'jsonwebtoken';
import UserContext from './authentication/UserContext';
import useLocalStorage from './customHooks/useLocalStorage'
import LoadingSpinner from './common/LoadingSpinner';
import './App.css'




const App = () => {
  const [userInfoLoaded,setUserInfoLoaded] = useState(false)
  const [applicationIds, setApplicationIds] = useState(new Set([]));
  const [currentUser,setCurrentUser] = useState(null);
  const [token,setToken] = useLocalStorage(null);

  useEffect(function loadUserData() {
    async function getCurrentUser(){
    if(token){
      try{
        let {username} = jwt.decode(token);

        JoblyApi.token = token;
        let currentUser = await JoblyApi.getCurrentUser(username)
        setCurrentUser(currentUser);
        setApplicationIds(new Set(currentUser.applications));
      } catch(err){
        console.log(err)
        setCurrentUser(null)
      }
      
    }
    setUserInfoLoaded(true)
  }
    // if we dont find a token then we set the user info to false 
    setUserInfoLoaded(false);
    getCurrentUser();
    
  },[token])


  async function login(loginData){
    try {
      let token = await JoblyApi.login(loginData);
      
      setToken(token);
      // console.log(`token: ${token}`)
      return {success:true}
    } catch (err) {
      alert("login failed",err);
      return {success:false,err}
    }
    
  }

  async function signup(signupData){
    try {
      let token = await JoblyApi.signup(signupData);
      setToken(token);
      return {success:true}
    } catch (err) {
      return {success:false,err}
    }
  }
  async function logout(){
    setCurrentUser(null);
    setToken(null);
  }

  // *****************************
  // job logic

  function hasAppliedToJob(id) {
    return applicationIds.has(id);
  }

  function applyToJob(id) {
    if (hasAppliedToJob(id)) return;
    JoblyApi.applyToJob(currentUser.username, id);
    setApplicationIds(new Set([...applicationIds, id]));
  }
  // *********************************

  if(!userInfoLoaded) return <LoadingSpinner/>

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{currentUser,setCurrentUser,hasAppliedToJob,applyToJob}}>
          <div className='App'>
            <NavBar logout={logout}/>
            <Routes login={login} signup={signup}/>
          </div>
        </UserContext.Provider>
      </BrowserRouter>

    </div>
  );
}

export default App;
