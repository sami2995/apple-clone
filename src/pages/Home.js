import React from 'react';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';

const products = [
  { id: 1, title: 'iPhone 14', subtitle: 'Pro. Beyond', price: '$799', image: '/assets/iphone14.jpg' },
  { id: 2, title: 'MacBook Air', subtitle: 'Supercharged', price: '$999', image: '/assets/macbook-air.jpg' },
  { id: 3, title: 'iPad Pro', subtitle: 'M-series power', price: '$799', image: '/assets/ipad-pro.jpg' },
  { id: 4, title: 'Apple Watch', subtitle: 'Fitness +', price: '$399', image: '/assets/watch.jpg' },
];

function Home() {
  return (
    <div>
      {/* ✅ Use public path directly */}
      <Hero
        title="iPhone 17 Pro"
        subtitle="All out Pro."
        ctaText="Buy"
        image="/assets/iphone17pro.png"
        full
      />

      <section className="py-5">
        <div className="container">
          <h3 className="mb-4">Featured products</h3>
        </div>
        <ProductGrid products={products} />
      </section>

      <section className="py-5 bg-light">
        <div className="container text-center">
          <h4>Get AppleCare+</h4>
          <p className="mb-0">Expert support and accidental damage coverage.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
