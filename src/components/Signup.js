import React, { useState, useEffect } from "react";
import "./styles/Signin.css";
import { useHistory } from "react-router-dom";
import {MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useAuth } from "../contexts/AuthContext";
import { auth } from "../utils/firebase";
export default function Signup() {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currUser, setCurrUser] = useState(0);
  useEffect(() => {
    auth.onAuthStateChanged(function (userData) {
      if (userData) {
        setCurrUser(1);
        history.push("/");
      }
    });
  }, []);

  const { signup, currentUser } = useAuth();
  console.log(signup);
  console.log(currentUser);
  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) {
      alert("invalid!");
    } else {
      setIsSubmitting(true);
      signup(email, password)
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
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
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="login__field">
              <i className="login__icon"><RiLockPasswordFill/></i>
              <input
                type="password"
                className="login__input"
                placeholder="Create Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className="button login__submit"
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              <span className="button__text">Register</span>
              <i className="button__icon fas fa-chevron-right"></i>
            </button>
          </form>
          <div className="link">
            <span onClick={() => history.push("/login")}>Login Here</span>
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
