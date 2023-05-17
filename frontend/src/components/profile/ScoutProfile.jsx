import "./scoutprofile.scss";
import React from "react";

const ScoutProfile = () => {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span className="settingsTitleDelete">Delete Account</span>
        </div>
        <form className="settingsForm">
         
          <label>Username</label>
          <input type="text"  name="name" />
          <label>Email</label>
          <input type="email"  name="email" />
          <label>Password</label>
          <input type="password"  name="password" />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
        </form>
      </div>
    
    </div>
  );
}

export default ScoutProfile