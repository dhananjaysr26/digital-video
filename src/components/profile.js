import React from 'react'
import { useAuth } from '../contexts/AuthContext';

function profile() {
    const {currentUser}=useAuth;
    console.log(currentUser );
    return (
        <div>
            <h1>Profile Page</h1>
            <h2>Hello {currentUser}</h2>
            <button>Update Profile</button>
        </div>
    )
}

export default profile
