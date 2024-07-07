
import React, { useState } from 'react';
import axios from 'axios';
import './styleRegister.css';
function Register(){
  let [userName, setUserName] = useState('')
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')
  let [rePassword, setRePassword] = useState('')
  let [result, setResult] = useState('')

async function handleRegister()  {
    const response = await axios.post('https://learncurvebackend.onrender.com/register', {userName,email, password,rePassword});
    setResult(response.data)
}

    return(
        <div className='BodyRegister'>
            <title>Register Form</title>
            <div className="RegisterForm">
  <h1>Register </h1>
  <input
    className="Uname"
    type="text"
    placeholder="Username"
    name="UserN"
    onChange={(e) => setUserName(e.target.value) }
    defaultValue=""
  />
  <input
    className="Email"
    type="text"
    placeholder="Email"
    name="UserN"
    onChange={(e) => setEmail(e.target.value) }
    defaultValue=""
  />
  <input
    className="Pwsd"
    type="password"
    placeholder="Password"
    name="PassN"
    onChange={(e) => setPassword(e.target.value) }
    defaultValue=""
  />
   <input
    className="PwsdRe"
    type="password"
    placeholder="Re-Password"
    name="PassN"
    onChange={(e) => setRePassword(e.target.value) }
    defaultValue=""
  />
  <p id="incorrect">Username or Password Incorrect</p>
  <input
    className="Buttonl"
    type="button"
    onClick={handleRegister}
    placeholder="Username"
    name="UserN"
    defaultValue="Login"
  />
  <center>
    <br />
    <a href="/login">Already have an account?</a>
    <a href="/error">Forgot Password?</a>
    <br />
    <a href="/">Back to HomePage</a>
    <h3>Your name is: {userName}</h3>
    <h3>Your email is: {email}</h3>
    <h3>Your password is: {password}</h3>
    <h3>Your Re-password is: {rePassword}</h3>
  </center>
</div>
    

        </div>
    )
}

export default Register;