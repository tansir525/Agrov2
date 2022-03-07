import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import './Navbar.css';
import logo1 from '../Assets/logo icon.png'

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


  const [logo, setLogo] = useState(false)
  const changeLogo = ()=>{
    if(window.scrollY >=90 ){
      setLogo(true)

    }else{
      setLogo(false)
    }
  }
  window.addEventListener('scroll',changeLogo)



  

  return (
    <>
      <nav className={color ? 'navbar navbar-bg' : 'navbar'}>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu} >
          
          <div className={logo ? 'color1': 'color2'}>
          
           <div className='textarealogo'>
           <img src= {logo1 } alt="" srcset="" /> <span className='lt1' > Agroverse</span> <span className='lt2'><br /> Limited</span>
          </div>
          </div>

         

        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu} >
              Home
            </Link>
          </ul>
          
          <ul className='nav-item'>
            <Link
              to='/about'
              className='nav-links'
              onClick={closeMobileMenu}
              
            >
             About
            </Link>
          </ul>


          <ul className="nav-item">
          {navItems.map((item) => {
            if (item.title === "Services") {
              return (
                <ul
                  key={item.id}
                  className='nav-item'
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link className='nav-links' to={item.path}>{item.title}</Link>
                  {dropdown && <Dropdown />}
                </ul>
              );
            }
           
          })}
        </ul>


{/* 
          <ul className='nav-item'>
            <Link
              to='/Export'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Exports
            </Link>
          </ul>
          <ul className='nav-item'>
            <Link
              to='/manufacturing'
              className='nav-links'
              onClick={closeMobileMenu}
            >
             Manufacturing
            </Link>
          </ul>
          <ul className='nav-item'>
            <Link
              to='/manufacturing'
              className='nav-links'
              onClick={closeMobileMenu}
            >
             Marketing
            </Link>
          </ul>

           */}


          <ul className='nav-item'>
            <Link
              to='/contact'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </ul>
          {/* <ul>
            <Link
              to='/sign-up'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </ul> */}
        </ul>
       
      </nav>
    </>
  );
}

export default Navbar;



// import React, { useState } from 'react'
// import { FaBars, FaTimes } from 'react-icons/fa'
// import logo from '../Assets/Asset 16.png'

// import './Navbar.css'

// const Navbar = () => {

//     const [click, setClick] = useState(false)
//     const handleClick = () => setClick(!click)

//     const closeMenu = () => setClick(false)

//     return (
//         <div className='header'>
//             <nav className='navbar'>
//                 <a href='/' className='logo'>
//                     <img src={logo} alt='logo' />
//                 </a>
//                 <div className='hamburger' onClick={handleClick}>
//                     {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
//                         : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

//                 </div>
//                 <ul className={click ? "nav-menu active" : "nav-menu"}>
//                     <li className='nav-item'>
//                         <a href='/' onClick={closeMenu}>Home</a>
//                     </li>
//                     <li className='nav-item'>
//                         <a href='#about' onClick={closeMenu}>About</a>
//                     </li>
//                     <li className='nav-item'>
//                         <a href='#testimonials' onClick={closeMenu}>Testimonials</a>
//                     </li>
//                     <li className='nav-item'>
//                         <a href='#demo' onClick={closeMenu}>Demo</a>
//                     </li>
//                 </ul>
//             </nav>
//         </div>
//     )
// }

// export default Navbar
