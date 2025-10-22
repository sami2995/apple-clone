import React from 'react';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';

const ipads = [
  { id: 30, title: 'iPad Pro', subtitle: 'M-series power', price: '$799', image: '/assets/ipad-pro.jpg' },
  { id: 31, title: 'iPad Air', subtitle: 'Thin and light', price: '$599', image: '/assets/ipad-air.jpg' },
];

function IPad() {
  return (
    <div>
      <Hero title="iPad" subtitle="Powerful. Magical." image={'/assets/ipad-hero.jpg'} />
      <section className="py-5">
        <div className="container">
          <h3 className="mb-4">iPad models</h3>
        </div>
        <ProductGrid products={ipads} />
      </section>
    </div>
  );
}

export default IPad