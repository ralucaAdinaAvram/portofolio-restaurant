import React from 'react'
import {Link} from 'react-router-dom';

import {AiFillInstagram} from 'react-icons/ai';
import {AiFillFacebook} from 'react-icons/ai';
import {AiFillTwitterCircle} from 'react-icons/ai';

import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-links">
      <div className="footer-link-wrapper">
        <div className="footer-links-items">
          <div className="title-footer-links"><h2>Our way</h2></div>
          <div className="footer-link"><Link to="/ourplac">Events</Link></div>
          <div className="footer-link"><Link to="/">Support</Link></div>
          <div className="footer-link"><Link to="/">Sponsorship</Link></div>
          <div className="footer-link"> <Link to="/">Destinations</Link></div>
          </div>

        <div className="footer-links-items">
        <div className="title-footer-links"><h2>Contact us</h2></div>
          <div className="footer-link"><Link to="/about">Contatct</Link></div>
          <div className="footer-link"><Link to="/">Support</Link></div>
          <div className="footer-link"> <Link to="/">Destinations</Link></div>
          <div className="footer-link"><Link to="/">Terms of srrvice</Link></div>
        
        </div>
      
      
        <div className="footer-links-items">
        <div className="title-footer-links"><h2>Policies</h2></div>
          <div className="footer-link"><Link to="/about">Refund</Link></div>
          <div className="footer-link"><Link to="/">Terms and conditions</Link></div>
          <div className="footer-link"><Link to="/">Fraud </Link></div>
          <div className="footer-link">  <Link to="/">Accesibility</Link></div>
          
        </div>
        <div className="footer-links-items">
        <div className="title-footer-links"><h2>Opening Hours</h2></div>
          <div className="footer-link"><Link to="/">Monday-Thursday<span> </span> 9:00 -22:00</Link></div>
          <div className="footer-link"> <Link to="/">Friday<span> </span> 9:00 -20:00</Link></div>
          <div className="footer-link"><Link to="/">Saturday<span> </span> 9:00 -20:00</Link></div>
          <div className="footer-link"><Link to="/">Sunday<span> </span> -</Link></div>
      
        </div>
      </div>
      <div className=""></div>
      
    </div>
  )
}

export default Footer