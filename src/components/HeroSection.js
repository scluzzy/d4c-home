import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import Zoom from 'react-reveal';


/* This function is used to load the section under the navbar in the home page*/

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-2.mp4" autoPlay loop muted />
               <Zoom >
                <h1>Connect To The World!</h1>
                <p>Get started</p>
                <div className="hero-btns">
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
                </Zoom>
        </div>
    )
};

export default HeroSection;
