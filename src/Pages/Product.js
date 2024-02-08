import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import Breadcrum from '../Components/Breadcrum'
import ProductDisplay from '../Components/ProductDisplay'

function Product() {
    const{productid}=useParams()  
    const products = useSelector((state) => state.product.Products);
    const product = products.find((p)=>p.id === parseInt(productid))
  return (
    <div>
         <Breadcrum product={product}/>
         <ProductDisplay product={product}/>
    </div>
  )
}

export default Product