import React from 'react';
import Hero from '../components/Hero';
import PromoBanner from '../components/PromoBanner';
import ProductGrid from '../components/ProductGrid';


const products = [
{ id: 1, title: 'iPhone 14', subtitle: 'Pro. Beyond', price: '$799', image: '/assets/iphone14.jpg' },
{ id: 2, title: 'MacBook Air', subtitle: 'Supercharged', price: '$999', image: '/assets/macbook-air.jpg' },
{ id: 3, title: 'iPad Pro', subtitle: 'M-series power', price: '$799', image: '/assets/ipad-pro.jpg' },
{ id: 4, title: 'Apple Watch', subtitle: 'Fitness +', price: '$399', image: '/assets/watch.jpg' },
];


     function Home(){
return (
<div>
<PromoBanner text={`Free delivery & returns on everything`} small={true} />


<Hero
title="iPhone 14 Pro"
subtitle="Pro. Beyond."
ctaText="Buy"
image={'/assets/hero-iphone.jpg'}
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
export default Home