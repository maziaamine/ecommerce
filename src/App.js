import React from 'react';
import { Route,Routes } from 'react-router';

import Nav from './Components/Nav';

import ShopCategory from './Pages/ShopCategory';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer'
import men_baner from './Assets/banner_mens.png'
import women_baner from './Assets/banner_women.png'
import kids_baner from './Assets/banner_kids.png'

function App() {
  return (
    <div >
 <Nav/>
 <Routes>
  <Route path='/' element={<Shop/>} />
  <Route path='/mens' element={<ShopCategory banner={men_baner} category="men"/>}   />
  <Route path='/womens' element={<ShopCategory banner={women_baner}category="women"/>}  />
  <Route path='/kids' element={<ShopCategory  banner={kids_baner}category="kid"/>}  />
  <Route path='/product' element={<Product/>} >
  <Route path=':productid' element={<Product/>} />
  </Route>
  <Route path='/cart' element={<Cart/>} />
  <Route path='/login' element={<LoginSignup/>} />
 </Routes>
 <Footer/>
    </div>
  );
}


export default App;


