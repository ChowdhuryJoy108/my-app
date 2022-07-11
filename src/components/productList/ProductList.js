import React from 'react';
import "./productList.css" 
import Product from '../product/Product'
import { products } from '../../data';

const ProductList = () =>{
    return(
    <div className='p1'>
        <div className="p1-texts">
            <h1 className="pl-title">Create & inspire. It's JoyIT</h1>
            <p className="pl-desc">
            JoyIT is a creative portfolio that your work has been waiting for.
            Beautiful homes, stunning portfolio styles & a whole lot more awaits
            inside.
            </p>
        </div>
        <div className="p1-lists">
           {
            products.map((item)=> 
                <Product key={item.id} img={item.p} link={item.link} />
           )}
            
        </div>
    </div>
    )
}

export default ProductList;