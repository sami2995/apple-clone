import React from 'react';
import { Link } from 'react-router-dom';


function ProductCard({ id, title, subtitle, price, image }) {
  return (
    <article className="card product-card h-100 border-0 shadow-sm">
      <Link to={`/product/${id}`} className="text-decoration-none text-dark h-100 d-flex flex-column">
        <div className="product-card__media bg-light">
          <img src={image} className="card-img-top img-fluid" alt={title} loading="lazy" />
        </div>
        <div className="card-body px-3">
          <h3 className="h6 fw-semibold mb-1">{title}</h3>
          {subtitle && <p className="card-text text-muted small mb-2">{subtitle}</p>}
          {price && <p className="fw-bold mb-0">{price}</p>}
        </div>
      </Link>
    </article>
  );
}
export default ProductCard