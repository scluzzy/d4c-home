import React from 'react';
import { Link } from 'react-router-dom';

/* This function is used to take in props/parameters from 
Cards.js and make and show the card components using those 
props in the cards section of the homepage */

function CardItem(props) {/*props, called in Cards.js*/
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img className='cards__item__img' alt='Travel Image' src={props.src}/>
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;