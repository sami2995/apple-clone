import React from 'react';
import Hero from '../components/Hero';

function Accessories(){
  return (
    <div >
      <Hero title="Accessories" subtitle="Everything you need" image={'/assets/accessories-hero.jpg'} full showLearn={false} />
      <section className="container py-5" style={{color:'#fff'}}><p>Accessories page content...</p></section>
    </div>
  )
}

export default Accessories
