import React, { useState } from "react";
import Profile from "./Profile";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.trim() === '' || pass.trim() === '') {
            setError('Please fill in all the fields.');
        } else {
            setLoggedIn(true);
        }
    }

    const handleLogout = () => {
        // Perform logout logic here
        setLoggedIn(false);
        setEmail('');
        setPass('');
    }

    if (loggedIn) {
        return <Profile email={email} onLogout={handleLogout} />;
    }

    return (
        <div className="auth-form-container">
            <h1>Login</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email Address : </label>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email" placeholder="Please input your email"
                    id="email" name="email">
                </input>
                <label htmlFor="password">Password : </label>
                <input
                    value={pass} onChange={(e) => setPass(e.target.value)}
                    type="password" placeholder="Please input your password"
                    id="password" name="password">
                </input>
                {error && <p className="error">{error}</p>}
                <button type="submit" >Login</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Dont have an account? Register here.</button>
        </div>
    );
};