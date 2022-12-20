import React, { useState } from "react";
import './App.css';
import Header from "./components/Header"
import Contant from "./components/Contant";
import Product from "./components/Product"
import sawir from "./img/sawir2.jpg";


import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import change1 from "./img/change1.jpg";
import img4 from "./img/img4.jpg";
import img5 from "./img/img5.jpg";
import change2 from "./img/change2.jpg";



function App() {
  const productData = [
    {id: 1, title: 'shaar', price: '50$', image: img1 },
    {id: 2, title: 'surwal', price: '13$', image: img2 },
    {id: 3, title: 'jakad', price: '44$', image: change1},
    {id: 4, title: 'buumo', price: '32$', image: img4},
    {id: 5, title: 'funanad', price: '18$', image: img5},
    {id: 6, title: 'boorso', price: '26$', image: change2}
  ];

  const [product, setProduct] = useState(productData)
  console.log(product)
  return (
    <div className="App">
     <Header />
     <Contant sawir={sawir} />
     <Product product={product}/>
    </div>
  );
}

export default App;
