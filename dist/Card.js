import React from 'react';
import './card.css';

const Card = props => {
  const {
    myColor
  } = props;
  return React.createElement("div", {
    className: `card ${myColor || ''}`
  }, props.children);
};

export default Card;