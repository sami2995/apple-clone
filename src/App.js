import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavbarMain from './components/NavbarMain';
import Footer from './components/Footer';
import Home from './pages/Home';
import Mac from './pages/Mac';
import iPhone from './pages/iPhone';
import Product from './pages/Product';
import NotFound from './pages/NotFound';


export default function App() {
return (
<div className="d-flex flex-column min-vh-100">
<NavbarMain />
<main className="flex-fill">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/mac" element={<Mac />} />
<Route path="/iphone" element={<iPhone />} />
<Route path="/product/:id" element={<Product />} />
<Route path="*" element={<NotFound />} />
</Routes>
</main>
<Footer />
</div>
);
}

