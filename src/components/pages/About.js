import React ,{useEffect} from 'react';
import '../../App.css';
import Footer from '../Footer';
import Aos from 'aos';
import 'aos/dist/aos.css'; 

function About() {

    //initialise animator
    useEffect(() => {
        Aos.init({duration: 1500});  }, [])


    return (
    <>  
        
        <div className='about-wrap'>
            <img className='aboutpic' src='images/ppt/cover.jpg' />           
            <img className='aboutpic' data-aos="fade-up" src='images/ppt/motiv.jpg' />
            <img className='aboutpic' data-aos="fade-down" src='images/ppt/statemen.jpg'/>
            <img className='aboutpic' data-aos="fade-out" src='images/ppt/soluchan.jpg'/>
            <img className='aboutpic' data-aos="fade-in" src='images/ppt/functional desc.jpg'/>
            <img className='aboutpic' data-aos="fade-left" src='images/ppt/componen.jpg'/>
            <img className='aboutpic' data-aos="fade-right" src='images/ppt/modules.jpg'/>
            <img className='aboutpic' data-aos="fade-up" src='images/ppt/hoempage.jpg' />
            <img className='aboutpic' data-aos="fade-down" src='images/ppt/videoconf.jpg'/>
            <img className='aboutpic' data-aos="fade-out" src='images/ppt/fileshare.jpg'/>
            <img className='aboutpic' data-aos="fade-in" src='images/ppt/fileshare2.jpg'/>
            <img className='aboutpic' data-aos="fade-righ" src='images/ppt/oideosever.jpg'/>
            <img className='aboutpic' data-aos="fade-left" src='images/ppt/workdone.jpg' />
            <img className='aboutpic' data-aos="fade-down" src='images/ppt/workdone2.jpg' />
            <img className='aboutpic' data-aos="fade-up" src='images/ppt/timeline.jpg' />
            <img className='aboutpic' data-aos="fade-left" src='images/ppt/team.jpg' />
            <img className='aboutpic' data-aos="fade-right" src='images/ppt/contrib.jpg' />
            <img className='aboutpic' data-aos="fade-out" src='images/ppt/thank.jpg' />

        </div>

        <Footer />
        
    </>    
    );
};

export default About;
