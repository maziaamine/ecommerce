import React from 'react';
import './CSS/Shopcategory.css';
import dropdown_icon from '../Assets/dropdown_icon.png';
import Item from '../Components/Item';
import { useSelector } from 'react-redux';

function ShopCategory(props) {
  const products = useSelector((state) => state.product.Products);
console.log(products)
  

  return (
    <div className='shop-category'>
      <img src={props.banner} alt='' className='shop-categoryimg' />
      <div className='shopcategory-indexSort '>
        <p>
          <span> Showing 1-12</span> out of 36 products
        </p>
        <div className='shopcategory-sort'>
          Sort by <img src={dropdown_icon} alt='' />
        </div>
      </div>
      <div className='shopcategory-products'>
        {products.map((product, index) => {
          if (props.category === product.category) {
            return <Item key={index} product={product} />;
          } else {
            return null;
          }
        })}
      </div>
      <div className='shopcategory-loadmore'>Explore More</div>
    </div>
  );
}

export default ShopCategory;
