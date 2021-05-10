import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

/* This function is basically used to load custom button components
by varying different styles and sizes */

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  path
}) => {

  //fn checks and applies button style[primary,outline]
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  //fn checks and applies button stize[medium,large]
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to= {path} className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}  
      </button> {/*format for button component*/}
    </Link>
  );
};




/*
There is no need to use <Link /> component from react-router.
If you want to go to external link use an anchor tag.
<a target="_blank" href="https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies">Policies</a>
*/