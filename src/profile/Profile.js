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
        <div>
            <h2>Profile Form</h2>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <p>Username {currentUser.username}</p>
                
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
                <label>Confirm Password</label>
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

export default Profile;