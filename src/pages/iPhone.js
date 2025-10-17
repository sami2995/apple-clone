import React from 'react';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';


const phones = [
{ id: 20, title: 'iPhone 14', subtitle: 'A great phone', price: '$799', image: '/assets/iphone14.jpg' },
{ id: 21, title: 'iPhone 14 Pro', subtitle: 'Pro cameras', price: '$999', image: '/assets/iphone14pro.jpg' },
];


 function iPhone(){
return (
<div>
<Hero title="iPhone" subtitle="Say hello to iPhone" image={'/assets/iphone-hero.jpg'} />
<section className="py-5">
<div className="container">
<h3 className="mb-4">iPhone models</h3>
</div>
<ProductGrid products={phones} />
</section>
</div>
);
}

export default iPhone