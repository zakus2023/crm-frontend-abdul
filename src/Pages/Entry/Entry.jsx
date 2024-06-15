import React, { useState } from "react";
import "./Entry.css";
import ClientLogin from "../../Components/ClientLogin";
import PasswordReset from "../../Components/PasswordReset";

export default function Entry() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [frmLoad, setFrmLoad] = useState("login");

  //this function was created to handle form input change

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;

      default:
        break;
    }
    console.log(name, value);
  };

  //this function was created to handle form submit

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return alert("all fields are required");
    }
  };

  //this function was created to handle switching the frmLoad between login and rsest

  const formSwitcher = (frmType) => {
    setFrmLoad(frmType);
  };

  //this function will be called when the password reset form is submitted

  const handleResetPassword = (e) => {
    e.preventDefault();
    if (!email) {
      return alert("Please provide email");
    }
    console.log(email)
  };

  return (
    <div className="entry-page bg-info">
      {frmLoad === "login" && (
        <ClientLogin
          handleSwitch={formSwitcher}
          handleChange={handleOnChange}
          email={email}
          pass={password}
          handleSubmit={handleOnSubmit}
        />
      )}

      {frmLoad === "reset" && (
        <PasswordReset
          handleChange={handleOnChange}
          handleSwitch={formSwitcher}
          email={email}
          handleResetPassword={handleResetPassword}
        />
      )}
    </div>
  );
}
