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
        <div className='flex justify-center'>
        <div className="w-1/3 max-w-xs my-5 ">
            <h2 className='text-3xl my-5'>Signup Here:</h2>
            <form className="bg-blue-900  shadow-md rounded my-10 px-8 pt-6 pb-8 mb-4"onSubmit={handleSubmit}>
                <label className="block text-blue-200 text-sm font-bold mb-2 mt-3">Username</label>
                <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                />
                <label className="block text-blue-200 text-sm font-bold mb-2 mt-3">Password</label>
                <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                />
                <label className="block text-blue-200 text-sm font-bold mb-2 mt-3">First Name</label>
                <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                />
                <label className="block text-blue-200 text-sm font-bold mb-2 mt-3">Last Name</label>
                <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                />
                <label className="block text-blue-200 text-sm font-bold mb-2 mt-3">Email</label>
                <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onSubmit={handleSubmit}>Submit</button>
            </form>

        </div>
        </div>
    )
}

export default SignupForm;