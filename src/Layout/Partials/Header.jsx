import React from "react";
import '../Partials/Header.css'
import logo from '../../Assets/logo.png'
import { Link, useNavigate} from "react-router-dom";

const Header = () => {
  const navigate = useNavigate()
  const logMeOut = ()=>{
    navigate('/')
  }
  return (
    <body>
      <nav>
        <div className="nav-left">
          <Link to="/home"> <img src={logo} alt="" className="logo" /></Link>
        </div>

        <div className="nav-right">
          <div className="menu">
            <img src="" alt="" className="nav-dropdown" />
            <ul className="nav-menu">
              <Link to="/home"><li className="active">Home</li></Link>
              <Link to="/dashboard"><li>Dashboard</li></Link>
              <Link to="/ticketlist"><li>Tickets</li></Link>
              <li className="signin-li" onClick={logMeOut}>Logout </li>
            </ul>
          </div>
        </div>
      </nav>
    </body>
  );
};

export default Header;
