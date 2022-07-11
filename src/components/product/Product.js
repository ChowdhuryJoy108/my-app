import React from 'react';
import "./product.css"

const Product = (props) => {
   
 
    return (
        <div className='p'>
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
            <h5>photos</h5>

            {/* <a href={props.link}  target="_blank" rel="noreferrer">
            <img src={props.p} alt="" className='p-img'/>
            </a> */}
        </div>
    );
}

export default Product;