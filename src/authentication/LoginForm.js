import React,{useState} from 'react';
import {useHistory} from "react-router-dom";


const LoginForm = ({login}) => {
    // we can use useHistory to redirect the user to the /companies route once they successfully login 
    const history = useHistory();
    const [formData, setFormData] = useState({
        username:"",
        password:""
    });

    // we want to handle the form submit call the login method that we passed down and if it succeeds then we redirect 

    async function handleSubmit(evt){
        evt.preventDefault();
        let res = await login(formData);
        // console.log('Submitted')
        if(res.success){
        // I always seem to run into issues with async and await this is a temp fix
            setTimeout(() => history.push("/companies"),500)
            
        }
    }

    function handleChange(evt) {
        const {name,value} = evt.target;
        setFormData(data => ({...data,[name]:value}));

    }


    return (
        <div>
            <h2>Login Form</h2>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input 
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                />
                <label>Password</label>
                <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                />
                <button onSubmit={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default LoginForm;