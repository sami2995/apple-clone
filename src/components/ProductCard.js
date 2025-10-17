import React from 'react';
import { Link } from 'react-router-dom';


 function ProductCard({ id, title, subtitle, price, image }) {
return (
<div className="card h-100 border-0">
<Link to={`/product/${id}`} className="text-decoration-none text-dark">
<img src={image} className="card-img-top" alt={title} style={{objectFit:'contain', height:200}} />
<div className="card-body px-0">
<h5 className="card-title mb-1">{title}</h5>
<p className="card-text text-muted small mb-2">{subtitle}</p>
{price && <p className="fw-bold">{price}</p>}
</div>
</Link>
</div>
);
}
export default ProductCard