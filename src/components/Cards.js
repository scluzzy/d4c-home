import React ,{useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'; 
import './Cards.css';
import CardItem from './CardItem';

/* This function is used to load the section under the herosection in the home page*/

function Cards() {

    //initialise animator
    useEffect(() => {
      Aos.init({duration: 1650});  }, [])


  return (
    <div className='cards'>
      <h1 data-aos="fade-left"> Check out our creations! </h1>
      <div className='cards__container' data-aos="fade-right">
        <div className='cards__wrapper' data-aos="fade-left">
          <ul className='cards__items' data-aos="fade-right">
            <CardItem
                /*props, which go to CardItem*/
              src='images/SHARELUX.png'
              text='Share any file with anyone with just one link!'
              label='FILE SHARING'
              path='/file-share'
            />
            <CardItem
              src='images/JOYN.png'
              text='Joyn© and have a conference with anyone!'
              label='VIDEO CONFERENCING'
              path='/video-confr'
            />
            <CardItem
              src='images/VIDZILLA.png'
              text='Watch videoz and chill!, using Vidzilla©.'
              label='VIDEO STREAMING'
              path='/video-stream'
            />
          </ul>
         
          {/*
          //empty cards for future use

          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters blah blah'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains blah blah'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour blah blah'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>*/}

        </div>
      </div>
    </div>
  );
}

export default Cards;
