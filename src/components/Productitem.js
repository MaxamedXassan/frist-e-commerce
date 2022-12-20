import React from "react";


function Productitem({product}) {
    return(
        <>
        {product.map((productitem) => (
              <div className="box">
                <div className="img-items">
              <img src={productitem.image} alt="" />
              </div>
              <div className="order-info">
              <h3> {productitem.title}</h3>
              <p> {productitem.price}</p>
              <button className="btn">Order</button>
              </div>
            </div>
        ))}
        </>
    )
}

export default Productitem;

// <div className="box">
// <img src={product[0].image} alt="" />
// <h3> {product[0].title}</h3>
// <p> {product[0].price}</p>
// <button className="btn">Order</button>
// </div>