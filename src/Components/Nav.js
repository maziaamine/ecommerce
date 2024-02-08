import React, { useState } from 'react';
import './Nav.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Nav() {
  const productStore = useSelector((state)=>state.product.prostore)
    const [menu,setMenu] = useState("shop ")
  return (
    <div className='navbar' >
  <div className='nav-logo'>
  <img src={logo} alt=""/>
  <p>SHOPPER</p>
  </div>
 
  <ul className='nav-menu'>
    <li onMouseOver={()=>{setMenu("shop")}}><Link to="/"        style={{textDecoration:'none'}} >Shop</Link>  {menu ==="shop"?<hr/>:<></>}</li>
    <li onMouseOver={()=>{setMenu("mens")}}><Link to="/mens"    style={{textDecoration:'none'}} >Men</Link>    {menu ==="mens"?<hr/>:<></>}  </li>
    <li onMouseOver={()=>{setMenu("womens")}}><Link to="/womens"style={{textDecoration:'none'}} >Women</Link> {menu ==="womens"?<hr/>:<></>} </li>
    <li onMouseOver={()=>{setMenu("kids")}}><Link to="/kids"    style={{textDecoration:'none'}} >Kids</Link>    {menu ==="kids"?<hr/>:<></>} </li>
  </ul>
  <div className='nav-login-cart'>
<Link to="/login" style={{textDecoration:'none'}}>  <button>Login</button></Link>
 <Link to="/cart" style={{textDecoration:'none'}}>  <img src={cart_icon} alt=""/></Link>
  </div>
  <div className='nav-cart-count'>{productStore.length}</div>
    </div>
  );
}

export default Nav;


