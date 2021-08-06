import React, {Component} from 'react'; 
import { Link } from 'react-router-dom'; 

class Login extends Component 
{
    constructor(props)
    {
        super(props);
        this.state = { 
            email : '',
            password : ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) 
    {
        const state = this.state
        state[event.target.name] = event.target.value
        this.setState(state);
    }

    handleSubmit(event) 
    {
        event.preventDefault();
        fetch('http://localhost:8080/product', 
        {
            method: 'POST',
            body: JSON.stringify({
                email: this.state.name,
                password: this.state.price
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(response => 
        {
            if(response.status === 201) 
            {
                alert("Login successfully");
            }
        });
    }

    render() 
    {
     return (   
        <div class="sufee-login d-flex align-content-center flex-wrap">
            <div class="container">
                <div class="login-content">
                    <div class="login-logo">
                        <a href="">
                            <img class="align-content" src="./assets/images/logo.png" alt="logo"/>
                        </a>
                    </div>
                    <div class="login-form">
                        <form onSubmit={this.handleSubmit}>
                            <div class="form-group">
                                <label>Email address</label>
                                <input type="email" name="email" value={this.state.email} onChange={this.handleChange}  class="form-control" placeholder="Email"/>
                            </div>
                            <div class="form-group">
                                <label>Password</label>
                                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} class="form-control" placeholder="Password"/>
                            </div>
                            <button type="submit" class="btn btn-success btn-flat m-b-30 m-t-30">Sign in</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     );
    }
}

export default Login;