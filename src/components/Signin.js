import React, { useState, useEffect } from "react";
import "./styles/Signin.css";
import { useHistory } from "react-router-dom";
import {MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useAuth } from "../contexts/AuthContext";
import { auth } from "../utils/firebase";

export default function Signin() {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login } = useAuth();
  const [currUser, setCurrUser] = useState(0);
  useEffect(() => {
    auth.onAuthStateChanged(function (userData) {
      if (userData) {
        history.push("/");
      }
    });
  }, []);
  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) {
      alert("invalid!");
    } else {
      setIsSubmitting(true);
      login(email, password)
        .then((res) => {
          console.log(res);
          alert("Login Successful!");
          history.push("/profile");
        })
        .catch((err) => {
          console.log(err);
          alert(err);
        })
        .finally(() => setIsSubmitting(false));
    }
  }
  return (
    <div className="container">
      <div className="screen">
        <div className="screen__content">
          <form className="login">
            <div className="login__field">
            <i className="login__icon"><MdEmail/></i>
              <input
                type="email"
                className="login__input"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="login__field">
            <i className="login__icon"><RiLockPasswordFill/></i>
              <input
                type="password"
                className="login__input"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className="button login__submit"
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              <span className="button__text">Login</span>
              <i className="button__icon fas fa-chevron-right"></i>
            </button>
          </form>
          <div className="link">
            <span onClick={() => history.push("/register")}>Register Here</span>
            <span style={{fontSize:"10px",display:"block",marginTop:"10px"}} onClick={()=>{setEmail("121billion@gmail.com")
          setPassword("123456")}
          }>Use Demo User</span>
          </div>
        </div>
        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape4"></span>
          <span className="screen__background__shape screen__background__shape3"></span>
          <span className="screen__background__shape screen__background__shape2"></span>
          <span className="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>
  );
}
