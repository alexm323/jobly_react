import React,{useState} from 'react';
import {useHistory} from "react-router-dom";


const SignupForm = ({signup}) => {
    // we can use useHistory to redirect the user to the /companies route once they successfully login 
    const history = useHistory();
    const [formData, setFormData] = useState({
        username:"",
        password:""
    });

    // we want to handle the form submit call the login method that we passed down and if it succeeds then we redirect 

    async function handleSubmit(evt){
        evt.preventDefault();
        let res = await signup(formData);
        if(res.success){
            history.push("/companies")
        }
    }

    function handleChange(evt) {
        const {name,value} = evt.target;
        setFormData(data => ({...data,[name]:value}));

    }


    return (
        <div>
            <h2>Signup Form</h2>
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
                <label>First Name</label>
                <input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                />
                <label>Last Name</label>
                <input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                />
                <label>Email</label>
                <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                />
                <button onSubmit={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default SignupForm;