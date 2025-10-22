import React from 'react';
import Hero from '../components/Hero';

function Store(){
  return (
    <div>
      <Hero title="Store" subtitle="Shop everything Apple" image={'/assets/store-hero.jpg'} />
      <section className="container py-5"><p>Store page content...</p></section>
    </div>
  )
}

export default Store
