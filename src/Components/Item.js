import React from 'react';
import './item.css'
import { Link } from 'react-router-dom';
function Item({product}) {
  return (
    <div className=" item">
       <Link to={`/product/${product.id}`}><img src={product.image} alt="" width="250px"  className='itemimg'/> </Link>
       <p className='name'>{product.name}</p>
       <div className="item-prices">
       <div className="item-price-new">
      ${product.new_price}
</div>
<div className="item-price-old">
      ${product.old_price}
</div>
       </div>
    </div>
  )
}

export default Item