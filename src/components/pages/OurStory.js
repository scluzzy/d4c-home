import React ,{useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'; 
import '../../App.css';
import Footer from '../Footer';

function OurStory() {

    //initialise animator
    useEffect(() => {
        Aos.init({duration: 1500});  }, [])


    return (

        <>  
        
        <div className='about-wrap'>          
            <img className='aboutpic' data-aos="fade-up" src='images/ppt/motiv.jpg' />
            <img className='aboutpic' data-aos="fade-up" src='images/ppt/statemen.jpg'/>
            <img className='aboutpic' data-aos="fade-up" src='images/ppt/soluchan.jpg'/>

        </div>

        <Footer />
        
    </>   
    )
};

export default OurStory;
