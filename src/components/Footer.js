import React ,{useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'; 
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

/*This function is used to show/call the footer component */

function Footer() {


    //initialise animator
    useEffect(() => {
      Aos.init({duration: 1800});  }, [])


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
      
      <div class='footer-links' >
        <div className='footer-link-wrapper'>
          <div class='footer-link-items' data-aos="fade-up">
            <h2 data-aos="fade-up" >About Us</h2>
            <Link to='/documentation'>Documentation</Link>
            <Link to='/our-story'>Our Story</Link>
            <Link to='/working'>How it works</Link>
            <Link to='/service-terms'>Terms of Service</Link>
            {/*<Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>*/}
            
          </div>
        </div> 
        <div className='footer-link-wrapper' data-aos="fade-up">
          <div class='footer-link-items' data-aos="fade-up">
            <h2 data-aos="fade-up">Contact Us</h2>
            <Link to='/our-team'>Our team</Link>
            <Link to='/contact-us'>Contact Us</Link>
            <Link to='/support-us'>Support Us</Link>
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

      <section class='social-media' data-aos="fade-up">
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              D4C
              <img src='./images/d4c-logo.jpg' className='d4c-logo'/> 
            </Link>
          </div>
          <small class='website-rights'>Copyright © 2021 D4C Systems, Inc.</small>
          <div class='social-icons'>
            {/*<Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'>          
              <i class='fab fa-facebook-f' />
            </Link>*/}

            <a
              className='social-icon-link instagram'            
              target="_blank"
              href="https://www.instagram.com/">            
              <i class='fab fa-instagram' />
            </a>

            {/*<Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'>            
              <i class='fab fa-youtube' />
            </Link>*/}

            <a
              className='social-icon-link twitter'
              href='https://twitter.com/?lang=en'
              target='_blank'>            
              <i class='fab fa-twitter' />
            </a>

            <a
              className='social-icon-link linkedIn'
              href='https://www.linkedin.com/linked'
              target='_blank'>            
              <i class='fab fa-linkedin' />
            </a>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
