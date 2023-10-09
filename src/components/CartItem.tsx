import React from 'react';
import { Link } from 'react-router-dom';
import './pages/CartItem.css';

function CartItem(props) {
  return (
    <div className="cartItem">
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt=''
              src={props.path}
              style = {{margin: '0 auto', display: 'block'}}
            />
          </figure>
          <div className='cards__item__info'>
            {/* <h5 className='cards__item__text'>{props.text}</h5> */}
            <h5 style = {{color: 'black'}}>{props.contact.price}</h5>
          </div>
        </Link>
      </li>
    </div>
  );
}

export default CartItem;