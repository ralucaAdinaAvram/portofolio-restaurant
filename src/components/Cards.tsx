import React from 'react';
import './Cards.css';
import CardItem from './CartItem';
import MenuO from '../assets/menu2.webp';
import barpub from '../assets/barpub.jpg';
import Menu from '../components/pages/Menu';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            
            <CardItem
              src={MenuO}
              text='Food'
              label='Menu'
              path='/menu'
            />
          
            <CardItem
              src={barpub}
              text='Book Us'
              label='Venue'
              path='/about'
            />
            
            
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default Cards;