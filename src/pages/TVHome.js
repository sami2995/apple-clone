import React from 'react';
import Hero from '../components/Hero';

function TVHome(){
  return (
    <div>
      <Hero title="TV & Home" subtitle="Entertainment for your home" image={'/assets/tv-hero.jpg'} />
      <section className="container py-5"><p>TV & Home page content...</p></section>
    </div>
  )
}

export default TVHome
