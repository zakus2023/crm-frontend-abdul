import React, { useState } from "react";
import "./PasswordReset.css";
import PropTypes, { func } from "prop-types";

const PasswordReset = ({
  handleChange,
  email,
  handleSwitch,
  handleResetPassword,
}) => {
  return (
    <div>
      <div className="login-container">
        <h1 className="sigin">Reset Password</h1>
        <form autoComplete="off" onSubmit={handleResetPassword}>
          <div className="login-fields">
            <input
              type="email"
              placeholder="Your Email"
              id="email"
              required
              value={email}
              onChange={handleChange}
              name="email"
            />
          </div>
          <button>Reset Password</button>
        </form>
        <p className="login">
          Do not have account ?<span>Sign up</span>
        </p>
        <a
          className="forgot"
          onClick={() => {
            handleSwitch("login");
          }}
        >
          Back to Login
        </a>
      </div>
    </div>
  );
};

//....................................................
//this is optional

PasswordReset.prototype = {
  handleChange: func.isRequired,
  email: PropTypes.string.isRequired,
};
//....................................................

export default PasswordReset;
