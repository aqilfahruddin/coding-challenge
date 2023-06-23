import React from "react";
import avatarImage from "./avatar.png";
import "./Profile.css";

const Profile = ({ email, onLogout }) => {
    return (
        <div>
            <h1>Profile</h1>
            <div className="profile-container">
                <img src={avatarImage} alt="Avatar" className="avatar" />
                <p className="email">Welcome, {email}!</p>
            </div>
            <button onClick={onLogout}>Logout</button>
        </div>
    );
};

export default Profile;
