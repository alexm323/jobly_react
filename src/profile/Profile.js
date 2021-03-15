import React, {useState,useContext} from 'react';
import JoblyApi from "../api/Api";
import UserContext from "../authentication/UserContext";


const Profile = () => {
    const {currentUser, setCurrentUser} = useContext(UserContext);
    const [formData, setFormData] = useState({
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        email: currentUser.email,
        username: currentUser.username,
        password: "",
      })
    
    async function handleSubmit(evt){
        evt.preventDefault();
        let profileData = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            password: formData.password
          }
        let username = formData.username;
        let updatedUser;

        try {
            updatedUser = await JoblyApi.updateProfile(username,profileData);
        } catch (err) {
            console.log(err)
        }

        setFormData(data => ({...data,password:""}));
        setCurrentUser(updatedUser)
    }

    function handleChange(evt){
        const {name,value} = evt.target;
        setFormData(data => ({
            ...data,[name]:value
        }));
    }

        return (
        <div className=' flex justify-center'>
        <div className="w-1/3 max-w-xs my-5 ">
            <h2 className='text-3xl my-5'>Profile Form</h2>
            <form className="bg-blue-900  shadow-md rounded my-10 px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                
                <p className='border-2 border-blue-500 rounded text-blue-200'>Showing data for: {currentUser.username}</p>
                
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
                <label className="block text-blue-200 text-sm font-bold mb-2 mt-3">Confirm Password</label>
                <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                />
                <button className="bg-blue-500 hover:bg-blue-700 text-white w-full font-bold mt-5 py-2 px-4 rounded focus:outline-none focus:shadow-outline" onSubmit={handleSubmit}>Submit</button>
            </form>
        </div>
        </div>
    )
}

export default Profile;