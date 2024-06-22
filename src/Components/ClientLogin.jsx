import React, { useState } from "react";
import "./ClientLogin.css";
import PropTypes, { func } from "prop-types";

const ClientLogin = ({
  handleChange,
  email,
  pass,
  handleSubmit,
  handleSwitch,
}) => {
  return (
    <div>
      <div className="login-container">
        <h1 className="sigin">Client Login</h1>
        <form onSubmit={handleSubmit}>
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
            <input
              name="password"
              type="password"
              placeholder="Password"
              id="password"
              required
              value={pass}
              onChange={handleChange}
            />
          </div>
          <button>Login</button>
        </form>
        <p className="login">
          Do not have account ?<span>Sign up</span>
        </p>
        <a
          className="forgot"
          onClick={() => {
            handleSwitch("reset");
          }}
        >
          Forgot Password?
        </a>
      </div>
    </div>
  );
};

//....................................................
//this is optional

ClientLogin.prototype = {
  handleChange: func.isRequired,
  handleSwitch: func.isRequired,
  email: PropTypes.string.isRequired,
  pass: PropTypes.string.isRequired,
};
//....................................................

export default ClientLogin;
