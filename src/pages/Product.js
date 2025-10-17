import React from 'react';
import { useParams } from 'react-router-dom';


const fakeDB = {
'1': { id:1, title:'iPhone 14', description:'Detailed product description here', image:'/assets/iphone14.jpg', price:'$799' },
'2': { id:2, title:'MacBook Air', description:'Light and fast', image:'/assets/macbook-air.jpg', price:'$999' },
'10': { id:10, title:'MacBook Air M2', description:'New M2 chip', image:'/assets/macbook-air.jpg', price:'$1199' },
};


function Product(){
const { id } = useParams();
const product = fakeDB[id] || null;


if(!product) return <div className="container py-5">Product not found.</div>;


return (
<div className="container py-5">
<div className="row">
<div className="col-md-6 text-center">
<img src={product.image} alt={product.title} className="img-fluid" style={{maxHeight:400}} />
</div>
<div className="col-md-6">
<h2>{product.title}</h2>
<p className="lead">{product.price}</p>
<p>{product.description}</p>
<button className="btn btn-dark">Buy</button>
</div>
</div>
</div>
);
}
export default Product