import React, { useState } from 'react';
import './SignIn.css';

function SignIn({ onRouteChange, loadUser }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Updates the email state whenever the user types in the email input field
    const onEmailChange = (event) => {
        setEmail(event.target.value);
    };

    // Updates the password state whenever the user types in the password input field.
    const onPasswordChange = (event) => {
        setPassword(event.target.value);
    };

    // Sends the email and password to the backend (/signin) via a POST request.
    // If the response includes a valid user (with id):
    // - loads the user using loadUser
    // - redirects to the home page using onRouteChange
    const onSubmitSignIn = () => {
        fetch(`${import.meta.env.VITE_API_URL}/signin`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
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
            <h2>Sign In</h2>
            <div>
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
                    <button type="submit" onClick={() => onSubmitSignIn()}>
                        Sign In!
                    </button>
                </div>

                <div>
                    <a href="#0" onClick={() => onRouteChange('register')}>
                        Register
                    </a>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
