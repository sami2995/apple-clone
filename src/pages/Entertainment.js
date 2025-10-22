import React from 'react';
import Hero from '../components/Hero';

function Entertainment(){
  return (
    <div>
      <Hero title="Entertainment" subtitle="Apple services" image={'/assets/entertainment-hero.jpg'} />
      <section className="container py-5"><p>Entertainment page content...</p></section>
    </div>
  )
}

export default Entertainment
