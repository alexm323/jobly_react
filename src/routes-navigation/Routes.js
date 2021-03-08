import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import HomePage from '../homepage/HomePage';
import CompanyList from '../companies/CompanyList';
import CompanyDetail from '../companies/CompanyDetail';
import JobList from '../jobs/JobList';
import Profile from '../profile/Profile';
import LoginForm from '../authentication/LoginForm';
import SignupForm from '../authentication/SignupForm';
import PrivateRoute from './PrivateRoute';

const Routes = ({login,signup}) => {
    return(
        <div>        
        <Switch>
            <Route exact path ='/'>
                <HomePage/>
            </Route>
            
            <PrivateRoute  exact path ='/companies'>
                <CompanyList/>
            </PrivateRoute>
            
            <PrivateRoute  exact path ='/companies/:handle'>
                <CompanyDetail/>
            </PrivateRoute>
            
            <PrivateRoute exact path ='/jobs'>
                <JobList/>
            </PrivateRoute>
            
            <Route exact path ='/login'>
                <LoginForm login={login}/>
            </Route>
            
            <Route exact path ='/signup'>
                <SignupForm signup={signup}/>
            </Route>
            
            <PrivateRoute exact path ='/profile'>
                <Profile/>
            </PrivateRoute>
            
            <Redirect to='/'/>
      </Switch>
      </div>
    )
}

export default Routes;