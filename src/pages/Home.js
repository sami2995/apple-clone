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

      {/* Side-by-side feature panels: AirPods (left) and Vision Pro (right with overlayed text) */}
      <section className="container my-4">
        <div className="row g-0 align-items-stretch">
          <div className="col-md-6 p-4 d-flex flex-column justify-content-start" style={{minHeight: 360, background: 'linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0.02))'}}>
            <div className="text-center" style={{color: '#000'}}>
              <h3 className="display-6 fw-bold">AirPods Pro 3</h3>
              <p className="lead">The world’s best in‑ear Active Noise Cancellation.</p>
              <div className="mt-3">
                <button className="btn btn-primary me-2">Learn more</button>
                <button className="btn btn-outline-primary">Buy</button>
              </div>
            </div>

            <div className="mt-auto" style={{height: '100%'}}>
              <img src={'/assets/airpod.png'} alt="AirPods silhouettes" className="w-100 h-100" style={{objectFit: 'cover', objectPosition: 'center'}} />
            </div>
          </div>

          <div className="col-md-6 p-4 d-flex flex-column justify-content-start" style={{minHeight: 360, background: 'linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0.02))'}}>
            <div className="text-center" style={{color: '#000'}}>
              <h3 className="display-6 fw-bold">Vision Pro</h3>
              <p className="lead">New powerful M5 chip and comfortable band.</p>
              <div className="mt-3">
                <button className="btn btn-primary me-2">Learn more</button>
                <button className="btn btn-outline-primary">Pre-order</button>
              </div>
            </div>

            <div className="mt-auto" style={{height: '100%'}}>
              <img src={'/assets/vision-pro.jpg'} alt="Vision Pro" className="w-100 h-100" style={{objectFit: 'cover', objectPosition: 'center'}} />
            </div>
          </div>
        </div>
      </section>

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
