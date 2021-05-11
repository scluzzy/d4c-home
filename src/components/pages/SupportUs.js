import React ,{useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'; 
import '../../App.css';
import Footer from '../Footer';

function SupportUs() {

    //initialise animator
    useEffect(() => {
        Aos.init({duration: 1500});  }, [])

    return (
    <>    
        <p className='page-heading' data-aos="fade-left"> Support Us :) </p>
        <img className='aboutpic' src='images/ppt/thank.jpg' data-aos="fade-right" />
        <Footer />
    </>    
    )
};

export default SupportUs;