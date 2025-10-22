import React from 'react';
import Hero from '../components/Hero';

function Vision(){
  return (
    <div>
      <Hero title="Vision" subtitle="See the future" image={'/assets/vision-hero.jpg'} />
      <section className="container py-5"><p>Vision page content...</p></section>
    </div>
  )
}

export default Vision
