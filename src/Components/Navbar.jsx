import React, { useState } from "react";
import logo from "../assets/Logo.png";
import StartTrialBtn from "./Common/StartTrialBtn";
import NavBarList from "./Common/NavBarList";

const NavBar = () => {
  const [isMenuOpen,setIsMenuOpen] = useState(false);

  const toggleMenu = ()=>{
    setIsMenuOpen(!isMenuOpen);
  }


  return (
    <div className="navbar">
        <div>
            <img src={logo} alt="Logo" loading="lazy"/>

            <div className="burger-icon" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width={28} height={28}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg>

            </div>

            <div className="navbar-links">
            <NavBarList/>
            <StartTrialBtn/>
            </div>

        {isMenuOpen && (
          <div className="mobile-menu">
            <ul>
              <li>Blogs</li>
              <li>Pricing</li>
              <li>Integrations</li>
              <li>Features</li>
            </ul>
          </div>
        )}

        </div>
      
    </div>
  )
};

export default NavBar;
