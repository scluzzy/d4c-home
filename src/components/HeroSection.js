import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';


function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-2.mp4" autoPlay loop muted />
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
            
        </div>
    )
};

export default HeroSection;
