import React, { useState, useEffect } from 'react';
import './Register.css';

function Register({ onRouteChange, loadUser }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Updates the name state when the user types into the username input field
    const onNameChange = (event) => {
        setName(event.target.value);
    };

    // Updates the email state when the user types into the email input field
    const onEmailChange = (event) => {
        setEmail(event.target.value);
    };

    // Updates the password state when the user types into the password input field
    const onPasswordChange = (event) => {
        setPassword(event.target.value);
    };

    // Sends the name, email and password to the backend (/register) via a POST request.
    // If the response includes a valid user id:
    // - loads the user using loadUser
    // - redirects to the home page using onRouteChange
    const onSubmitRegister = () => {
        fetch('http://localhost:3000/register', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
            }),
        })
            .then((response) => response.json())
            .then((user) => {
                if (user.id) {
                    loadUser(user);
                    onRouteChange('home');
                }
            });
    };

    return (
        <div className="signin-container">
            <h2>Register</h2>
            <div>
                <div>
                    <label htmlFor="email">Username:</label>
                    <br />
                    <input
                        onChange={onNameChange}
                        type="text"
                        id="username"
                        name="username"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="email">E-Mail:</label>
                    <br />
                    <input
                        onChange={onEmailChange}
                        type="email"
                        id="email"
                        name="email"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <br />
                    <input
                        onChange={onPasswordChange}
                        type="password"
                        id="password"
                        name="password"
                        required
                    />
                </div>

                <div>
                    <button type="submit" onClick={() => onSubmitRegister()}>
                        Register!
                    </button>
                </div>
                <div>
                    <a href="#0" onClick={() => onRouteChange('signin')}>
                        Go back
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Register;
