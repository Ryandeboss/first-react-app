// import react and useSate and use effect 
import React from 'react';
import {useState, useContext} from 'react'

// import each card

import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';
import Card4 from './Card4';
import './CardSection.css';




// declare function

function CardSection() {
  return (
    <div className="card-grid">
      <Card1 />
      <Card2 />
      <Card3 />
      <Card4 />
    </div>
  );
}

export default CardSection;