import React, { useState } from "react";
import Profile from "./Profile";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [register, setRegister] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim() === '' || email.trim() === '' || pass.trim() === '') {
            setError('Please fill in all the fields.');
        } else {
            setRegister(true);
        }
    }

    const handleLogout = () => {
        setRegister(false);
        setEmail('');
        setPass('');
    }

    if (register) {
        return <Profile email={email} onLogout={handleLogout} />;
    }

    return (
        <div className="auth-form-container">
            <h1>Register</h1>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Full Name : </label>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text" placeholder="Please input your name"
                    id="name" name="name">
                </input>
                <label htmlFor="email">Email Address : </label>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email" placeholder="Please input your email"
                    id="email" name="email">
                </input>
                <label htmlFor="password">Password : </label>
                <input
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    type="password" placeholder="Please input your password"
                    id="password" name="password">
                </input>
                {error && <p className="error">{error}</p>}
                <button type="submit">Register</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </div>
    )
}