import React from "react";
import Productitem from "./Productitem";


function Product({product}) {
    return (
       <div className="container">
        <h3 className="title">Product</h3>
        <div
        className="product">
            <Productitem product={product}/>
        </div>
       </div>
    )
}

export default Product;