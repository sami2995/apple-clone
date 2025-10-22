import React from 'react';
import Hero from '../components/Hero';

function Accessories(){
  return (
    <div>
      <Hero title="Accessories" subtitle="Everything you need" image={'/assets/accessories-hero.jpg'} />
      <section className="container py-5"><p>Accessories page content...</p></section>
    </div>
  )
}

export default Accessories
