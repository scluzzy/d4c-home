import React ,{useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'; 
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

/* This function is used to load the section under the navbar in the home page*/

function HeroSection() {


    //initialise animator
    useEffect(() => {
        Aos.init({duration: 1650});  }, [])


    return (
        <div className='hero-container'>
            <video src="/videos/video-2.mp4" autoPlay loop muted />
             
                <h1 data-aos="fade-left">Connect To The World!</h1>
                <p data-aos="fade-right">Get started</p>
                <div className="hero-btns" data-aos="fade-left">
                    <Button className='btns' path='/file-share' buttonStyle='btn--outline' buttonSize='btn--large'>
                        FILE SHARING
                    </Button>
                    <Button  className='btns' path='/video-confr' buttonStyle='btn--outline' buttonSize='btn--large'>
                        VIDEO CONFERENCING
                    </Button>
                    <Button className='btns' path='/video-stream' buttonStyle='btn--outline' buttonSize='btn--large'>
                        VIDEO STREAMING
                    </Button>
                </div>
        </div>
    )
};

export default HeroSection;
