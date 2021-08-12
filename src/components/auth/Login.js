import React, { useState } from 'react';
import {
    useHistory
} from "react-router-dom";
  
function Login() {

    let history = useHistory();
    const [loginError, setLoginError] = useState();
    const [email, setEmail] = useState('');
    function handleEmailChange(e){
        setEmail(e.target.value);
    }

    const [password, setPassword] = useState('');
    function handlePasswordChange(e){
        setPassword(e.target.value);
    }

    let [emailError, setEmailError] = useState('');
    let [passwordError, setPasswordError] = useState('');
    function handleValidation()
    {
        let isFormValid = true;
        if (!email)
        {
            isFormValid = false;
            emailError = 'email is required';
            setEmailError(emailError);
        }

        if (!password)
        {
            isFormValid = false;
            passwordError = 'password is required';
            setPasswordError(passwordError);
        }
        return isFormValid;
    }

    function handleSubmit(e) 
    {
        e.preventDefault();
        if (!handleValidation())
        {
            return false;
        }
        fetch('http://localhost:8080/api/login', 
        {
            method: 'POST',
            body: JSON.stringify({
                email:    email,
                password: password
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(response => 
        {
            return response.json();
        }).then(function(data) 
        {
            if (data.access_token)
            {
                //redirect to dashboard
               history.push('/dashboard');
            }
        });
    }

    return (   
        <div class="sufee-login d-flex align-content-center flex-wrap">
            <div class="container">
                <div class="login-content">
                    <div class="login-logo">
                        <a href="">
                            <img class="align-content" src="./assets/images/logo.png" alt="logo"/>
                        </a>
                    </div>
                    <div class="error-message">
                        {loginError}
                    </div>
                    <div class="login-form">
                        <form onSubmit={handleSubmit}>
                            <div class="form-group">
                                <label>Email address</label>
                                <input type="email" name="email" value={email} onChange={handleEmailChange}  class="form-control" placeholder="Email"/>
                                {emailError ? <span style={{color: "red"}}>{emailError}</span> : ''} 
                            </div>
                            <div class="form-group">
                                <label>Password</label>
                                <input type="password" name="password" value={password} onChange={handlePasswordChange} class="form-control" placeholder="Password"/>
                                {passwordError ? <span style={{color: "red"}}>{passwordError}</span> : ''} 
                            </div>
                            <button type="submit" class="btn btn-success btn-flat m-b-30 m-t-30">Sign in</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );        
}

export default Login;