import React from 'react';
import Hero from '../components/Hero';

function AirPods(){
  return (
    <div>
      <Hero title="AirPods" subtitle="Wireless audio" image={'/assets/airpods-hero.jpg'} />
      <section className="container py-5"><p>AirPods page content...</p></section>
    </div>
  )
}

export default AirPods
