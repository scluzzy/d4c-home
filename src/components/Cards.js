import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out our.. (products?) </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
                /*props, which go to CardItem*/
              src='images/snapdrop.jpg'
              text='File sharing - abc..'
              label='FILE SHARING'
              path='/file-share'
            />
            <CardItem
              src='images/zoom.jpg'
              text='Video Cnferencing - idk..'
              label='VIDEO CONFERENCING'
              path='/video-confr'
            />
            <CardItem
              src='images/twitch.jpg'
              text='Video streqming - help..'
              label='VIDEO STREAMING'
              path='/video-stream'
            />
          </ul>
         
          {/*<ul className='cards__items'>
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
