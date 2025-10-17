import React from 'react';
import ProductCard from './ProductCard';


 function ProductGrid({ products }) {
return (
<div className="container">
<div className="row g-4">
{products.map(p => (
<div key={p.id} className="col-6 col-md-4 col-lg-3">
<ProductCard {...p} />
</div>
))}
</div>
</div>
);
}
export default ProductGrid