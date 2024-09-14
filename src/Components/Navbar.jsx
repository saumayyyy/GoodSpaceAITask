import React from "react";
import logo from "../assets/Logo.png";
import StartTrialBtn from "./Common/StartTrialBtn";
import NavBarList from "./Common/NavBarList";

const NavBar = () => {
  return (
    <div className="navbar">
        <div>
            <img src={logo} alt="Logo" loading="lazy"/>

            <div className="burger-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width={28} height={28}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg>

            </div>

            <div className="navbar-links">
            <NavBarList/>
            <StartTrialBtn/>
            </div>

        </div>
      
    </div>
  )
};

export default NavBar;
