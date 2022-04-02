import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import './Navbar.css';
import svglogo from "../Assets/Agroverse Logo (1).svg";

import { navItems } from "./NavItems";
import Dropdown from "./Dropdown";


function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false); 

  const [color, setColor] = useState(false)

  const changeColor =()=>{
    if(window.scrollY >= 90){
      setColor(true)
    }else{
      setColor(false)
    }
  }
window.addEventListener('scroll',changeColor)

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      
      <nav className={color ? "navbar navbar-bg" : "navbar"}>
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src={svglogo} alt="" srcset="" />
        </Link>

        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              HOME
            </Link>
          </ul>

          <ul className="nav-item">
            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
              ABOUT
            </Link>
          </ul>

          <ul className="drop">
            {navItems.map((item) => {
              if (item.title === "SERVICES") {
                return (
                  <ul
                    key={item.id}
                    className=""
                    onMouseEnter={() => setDropdown(true)}
                    onMouseLeave={() => setDropdown(false)}
                  >
                    <Link className="nav-links" to={item.path}>
                      {item.title}
                    </Link>
                    {dropdown && <Dropdown />}
                  </ul>
                );
              }
            })}
          </ul>

        

          <ul className="nav-item">
            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
              CONTACT US
            </Link>
          </ul>
        
        </ul>
      </nav>
    </>
  );
}

export default Navbar;


