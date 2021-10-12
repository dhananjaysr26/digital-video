import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../utils/firebase";
import "./styles/Profile.css";
const Profile = () => {
  let history = useHistory();
  const [currUser, setCurrUser] = useState(0);
  const [currUserData, setCurrUserData] = useState([]);
  useEffect(() => {
    auth.onAuthStateChanged(function (userData) {
      if (userData) {
        setCurrUser(1);
        setCurrUserData(userData);
      } else {
        alert("You Need To login For Acces this Page!");
        history.push("/login");
      }
    });
  }, []);
  return (
    <div className="profile-container">
      <h1>Profile Page</h1>
      <h2>Hello {currUserData.email}</h2>
      <h3>UiD: {currUserData.uid}</h3>
      <button>Update Profile</button>
    </div>
  );
};

export default Profile;
