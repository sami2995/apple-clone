import React from 'react';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';

const watches = [
  { id: 40, title: 'Apple Watch Series 8', subtitle: 'Advanced health', price: '$399', image: '/assets/watch.jpg' },
  { id: 41, title: 'Apple Watch SE', subtitle: 'Essential features', price: '$249', image: '/assets/watch-se.jpg' },
];

function Watch() {
  return (
    <div>
      <Hero title="Apple Watch" subtitle="Your health companion" image={'/assets/watch-hero.jpg'} />
      <section className="py-5">
        <div className="container">
          <h3 className="mb-4">Watch models</h3>
        </div>
        <ProductGrid products={watches} />
      </section>
    </div>
  );
}

export default Watch