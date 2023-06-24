import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { Button, Input } from "@mui/material";
import {auth} from "./firebase";
function Login() {
  const [eamil, setEmail] = useState("");
  const [passward, setPassward] = useState("");

  const singIn = (e) => {
    e.preventDefault();
    // fire base login
  };

  const regester = (e) => {
    e.preventDefault();
    //do some firebase resister
    auth
      .createUserWithEmailAndPassword(eamil, passward)
      .then((auth) => {
        //sucessfully created a new user with email and passward
        console.log(auth);
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login_container">
        <h1>Sign in</h1>
        <form action="">
          <h5>Email</h5>
          <input
            type="text"
            value={eamil}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Passward</h5>
          <input
            type="passward"
            value={passward}
            onChange={(e) => setPassward(e.target.value)}
          />
          <button type="submit" className="login_signInButton" onClick={singIn}>
            Login
          </button>
        </form>
        <p>
          By enrolling your mobile phone number, you consent to receive
          automated security notifications via text message from Amazon. Message
          and data rates may apply.
        </p>
        <button onClick={regester} className="login_registerButton">
          Create Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
