import React from 'react';
import Hero from '../components/Hero';

function Support(){
  return (
    <div>
      <Hero title="Support" subtitle="Get help and support" image={'/assets/support-hero.jpg'} />
      <section className="container py-5"><p>Support page content...</p></section>
    </div>
  )
}

export default Support
