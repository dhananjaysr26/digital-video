import React,{useState} from 'react'
import "./styles/Navbar.css"
import { useHistory} from "react-router-dom";
import { MdCircleNotifications } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import userPic from "../assets/user.png"
function Navbar() {
    let history = useHistory();
    const [usercard,setUsercard]=useState(0);
    const [notification,setNotification]=useState(0);
    return (
        <div className="head-container">
        <div className="navbar">
            <div className="nav-links">
            <span className="logo">digital <span>X</span></span>
                <ul>
                    <li onClick={()=>history.push("/")}>Home</li>
                    <li onClick={()=>history.push("/profile")}>Profile</li>
                    <li onClick={()=>history.push("/login")}>Login</li>
                    <li> <MdCircleNotifications className="icons" 
                    onClick={()=>notification?setNotification(0):setNotification(1)}
                    /></li>
                    <li> <FaRegUserCircle className="icons"
                    onClick={()=>usercard?setUsercard(0):setUsercard(1)}
                    />
                    </li>
                </ul>
            </div>

            
        </div>
        {
                        usercard ?
                            <div className="user-profile">
                                <img src={userPic} className="user-pic" />
                                <h3>Dhananjay Singh</h3>
                                <small>121billion@gmail.com</small>
                                <button className="sign-out-btn" ><a>Sign out</a></button>
                            </div>
                            : <p></p>
                    }
                            {
                        notification ?
                            <div className="notification-card">
                                <h3>Notification</h3>
                                <ul>
                                    <li>Password Change</li>
                                    <li>update pic</li>
                                    <li>Update Mob Number</li>
                                </ul>
                            </div>
                            : <p></p>
                    }
        </div>
    )
}

export default Navbar
