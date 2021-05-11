import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

/*This function is used to show/call the footer component */

function Footer() {
  return (
    <div className='footer-container'>
      
     {/* <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
        Join the Adventure newsletter to receive our best oacation deals</p>
        <p className='footer-subscription-text'>
          You can unsascribe at any time.</p>
        <div className='input-areas'>
          <form>
            <input className='footer-input' name='email' type='email' placeholder='Your Email'/>
            <Button buttonStyle='btn--outline'>Sascribe</Button>
          </form>
        </div>
      </section>  */}
      
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/about-us'>How it works</Link>
            <Link to='/about-us'>Terms of Service</Link>
            <Link to='/about-us'>Our Story</Link>
            {/*<Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>*/}
            
          </div>
        </div> 
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/contact-us'>Contact</Link>
            <Link to='/contact-us'>Support</Link>
            {/*<Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>*/}
          </div>
        </div>
        
        {/*<div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Engage With Us</h2>
            <Link to='/'>Instagram</Link>
           { <Link to='/'>Facebook</Link> 
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div> 
        </div>*/}

      </div>

      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              D4C
              <img src='./images/d4c-logo.jpg' className='d4c-logo'/> 
            </Link>
          </div>
          <small class='website-rights'>D4C © 2021</small>
          <div class='social-icons'>
            {/*<Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'>          
              <i class='fab fa-facebook-f' />
            </Link>*/}

            <Link
              class='social-icon-link instagram'
              to='/https://www.instagram.com/'
              target='_blank'
              aria-label='Instagram'>            
              <i class='fab fa-instagram' />
            </Link>

            {/*<Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'>            
              <i class='fab fa-youtube' />
            </Link>*/}

            <Link
              class='social-icon-link twitter'
              to='/https://twitter.com/?lang=en'
              target='_blank'
              aria-label='Twitter'>            
              <i class='fab fa-twitter' />
            </Link>

            <Link
              class='social-icon-link linkedIn'
              to='/https://www.linkedin.com/linked'
              target='_blank'
              aria-label='LinkedIn'>            
              <i class='fab fa-linkedin' />
            </Link>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
