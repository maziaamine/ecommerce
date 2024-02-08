import React, { useState } from 'react';
import './productDispaly.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { useDispatch } from 'react-redux';
import { add } from '../Store/productSlice';
import { tab } from '@testing-library/user-event/dist/tab';

function ProductDisplay({ product }) {
    const [taille,setTaille]=useState([])
    const dispatch = useDispatch();
    const handltaille = (e) => {
        e.preventDefault();
        setTaille((prevTaille) => {
          const updatedTaille = prevTaille.includes(e.target.value)
            ? prevTaille.filter((u) => u !== e.target.value)
            : [...prevTaille, e.target.value];
    
          console.log(updatedTaille.join(',')); 
    
          return updatedTaille;
        });
      };
    const addcart = (id, image, price, name) => {
        dispatch(add({ id, image, price, name ,taille:taille}));
    };

    return (
        <div className="ProductDisplay">
            <div className="Productdisplay-left">
                <div className="Productdisplay-img-left">
                    <img src={product.image} alt="" width="120px" />
                    <img src={product.image} alt="" width="120px" />
                    <img src={product.image} alt="" width="120px" />
                    <img src={product.image} alt="" width="120px" />
                </div>
                <div className="Productdisplay-img">
                    <img className="Productdisplay-main-img" src={product.image} alt="" width="460px" />
                </div>
            </div>
            <div className="Productdisplay-right">
                <h1>{product.name}</h1>
                <div className="Productdisplay-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>{122}</p>
                </div>
                <div className="Productdisplay-right-prices">
                    <div className="Productdisplay-right-prices-old">${product.old_price}</div>
                    <div className="Productdisplay-right-prices-new">${product.new_price}</div>
                </div>
                <div className="Productdisplay-right-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, natus. Eum vel similique, laudantium
                    officia soluta amet ut fugit. Iste praesentium veritatis rerum odit sed error aperiam optio, id
                    asperiores.
                </div>
                <div className="Productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="Productdisplay-right-sizes">
                        <div >
                            <input type="checkbox" id="sizeS" value='S' onChange={handltaille} />
                            <label htmlFor="sizeS">S</label>
                        </div>
                        <div>
                            <input type="checkbox" id="sizeM"value='M' onChange={handltaille}/>
                            <label htmlFor="sizeM">M</label>
                        </div>
                        <div>
                            <input type="checkbox" id="sizeL"value='L'onChange={handltaille} />
                            <label htmlFor="sizeL">L</label>
                        </div>
                        <div>
                            <input type="checkbox" id="sizeXL"value='XL' onChange={handltaille}/>
                            <label htmlFor="sizeXL">XL</label>
                        </div>
                        
                    </div>
                </div>
                <button type='button' onClick={() => addcart(product.id, product.image, product.new_price, product.name)}>ADD TO CART</button>
                <p className='Productdisplay-right-category'> <span>Category :</span> {product.category} , T-Shirt ,Crop Top </p>
                <p className='Productdisplay-right-category'> <span>Tags :</span> Modern , Latest </p>
            </div>
        </div>
    );
}

export default ProductDisplay;
