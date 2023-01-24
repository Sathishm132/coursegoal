import React from 'react';

import './Button.css';

const Button = props => {
  console.log(props)
  return (
    <button type={props.type} className={`button ${!props.validity?'invalid':''}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
