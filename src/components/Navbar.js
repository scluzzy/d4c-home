import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

/* This function is used to show the navbar, in this function 
we use hooks and usestate(). <Link> is basically <a> from 
react-router-dom.
*/

function Navbar() {
  const [click, setClick] = useState(false);

  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  //fn to hide buttons for mobile menu (when resize window)
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  window.addEventListener('resize', showButton);
  
  //to remove some errors showing/unshowing the buttons
  useEffect( () => {  showButton();} , []);



  //code to change colour of navbar on scroll 
  const [navbar,setNavbar] = useState(false);
  const changeBackground = () => {
    if(window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);    
    }    
  };
  window.addEventListener('scroll', changeBackground);




  return (
    <>
      <nav className={navbar ? 'navbar active' : 'navbar'} >  {/*if scrolls set class to navbar active */}
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}> {/*'onclick' closes mobile menu and 'Link' opens given path /" "  */}
            D4C <img src='./images/d4c-logo.jpg' className='d4c-logo'/> 
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} /> {/*'click' changes the menu icon to close icon if true*/}
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}> {/*'click'  activates small nav menu */}        
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                Services
              </Link>
            </li>
            
            <li className='nav-item'>
              <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                About
              </Link>
            </li>            
           {/* <li>
              <Link to='/contact-us' className='nav-links-mobile' onClick={closeMobileMenu}>
                Contact Us
              </Link>
            </li> */}


          </ul>

            {/*if want to include a button*/}
          { /*  {button && <Button path='/sign-up' buttonStyle='btn--outline'>SIGN UP</Button>}    */}        

        </div>
      </nav>
    </>
  );
}

export default Navbar;




/*
There is no need to use <Link /> component from react-router.
If you want to go to external link use an anchor tag.
<a target="_blank" href="https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies">Policies</a>
*/
