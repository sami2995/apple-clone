import React from 'react';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';


const macs = [
{ id: 10, title: 'MacBook Air M2', subtitle: 'Light. Fast.', price: '$1199', image: '/assets/macbook-air.jpg' },
{ id: 11, title: 'MacBook Pro 14', subtitle: 'For pros', price: '$1999', image: '/assets/macbook-pro.jpg' },
];


function Mac(){
return (
<div>
<Hero title="Mac" subtitle="Power for pros" image="/assets/mac-hero.jpg" reverse />
<section className="py-5">
<div className="container">
<h3 className="mb-4">Mac lineup</h3>
</div>
<ProductGrid products={macs} />
</section>
</div>
);
}
export default Mac