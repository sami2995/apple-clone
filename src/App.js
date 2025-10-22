import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavbarMain from './components/NavbarMain';
import Footer from './components/Footer';
import Home from './pages/Home';
import Mac from './pages/Mac';
import IPhone from './pages/iPhone';
import IPad from './pages/iPad';
import Watch from './pages/Watch';
import Product from './pages/Product';
import NotFound from './pages/NotFound';
import Store from './pages/Store';
import Vision from './pages/Vision';
import AirPods from './pages/AirPods';
import TVHome from './pages/TVHome';
import Entertainment from './pages/Entertainment';
import Accessories from './pages/Accessories';
import Support from './pages/Support';


export default function App() {
return (
<div className="d-flex flex-column min-vh-100">
<NavbarMain />
<main className="flex-fill">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/mac" element={<Mac />} />
					<Route path="/iphone" element={<IPhone />} />
					<Route path="/iPad" element={<IPad />} />
					<Route path="/store" element={<Store />} />
					<Route path="/vision" element={<Vision />} />
					<Route path="/airpods" element={<AirPods />} />
					<Route path="/tv-home" element={<TVHome />} />
					<Route path="/entertainment" element={<Entertainment />} />
					<Route path="/accessories" element={<Accessories />} />
					<Route path="/support" element={<Support />} />
					<Route path="/watch" element={<Watch />} />
					<Route path="/product/:id" element={<Product />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
</main>
<Footer />
</div>
);
}

