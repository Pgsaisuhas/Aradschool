import React from "react";
import { AuthData } from "../../auth/AuthWrapper";


const Profile = () => {
    const {userData} = AuthData()
    console.log(userData)
    return(<> hi {userData.email}</>) 
}

export default Profile