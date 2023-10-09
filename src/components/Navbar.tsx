import {useState} from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <>
  <nav className="desktopNav menu">
<div className='logo'>Logo</div>

<div className="header_nav">
 <Link to="/">Home</Link> 
 <Link to="menu">Menu</Link> 
 <Link to="about">About</Link> 
 <Link to="contact">Contact </Link> 
 


</div>

  </nav>
  <nav className=" mobileNav menu">
<div className='logo'>Logo</div>
<p onClick={toggleMenu}>
  <AiOutlineMenu color="white"/>
</p>
{isOpen && <div className='mobileHamburgerMenu'>
<div className="header_nav">
  <p className='closeButton' onClick={toggleMenu}><AiOutlineClose/></p>
  <Link to="/">Home</Link> 
 <Link to="menu">Menu</Link> 
 <Link to="about">About</Link> 
 <Link to="contact">Contact </Link> 

</div>
</div>}

  </nav>
  </>
  );
}

export default Navbar;
