import React from "react";
import '../Partials/Header.css'
import logo from '../../Assets/logo.png'

const Header = () => {
  return (
    <body>
      <nav>
        <div className="nav-left">
          <img src={logo} alt="" className="logo" />
        </div>

        <div className="nav-right">
          <div className="menu">
            <img src="" alt="" className="nav-dropdown" />
            <ul className="nav-menu">
              <li className="active">Home</li>

              <li>About</li>

              <li>Dashboard</li>

              <li>Tickets</li>

              <li className="signin-li">Login </li>
            </ul>
          </div>
        </div>
      </nav>
    </body>
  );
};

export default Header;
