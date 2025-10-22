import React from 'react';


function Hero({ title, subtitle, ctaText, image, reverse, full, showLearn = true }) {
	// full: when true, render an edge-to-edge (full-bleed) hero where the image
	// spans the viewport while the text stays constrained.
	if (full) {
		return (
			<section className="container-fluid px-0" style={{backgroundColor: '#000', color: '#fff'}}>
				<div className="container text-center py-5">
					<h1 className="display-4 fw-bold text-white">{title}</h1>
					{subtitle && <p className="lead text-white">{subtitle}</p>}
					<div className="mt-4">
						{showLearn && <button className="btn btn-primary btn-lg me-3">Learn more</button>}
						<button className="btn btn-outline-primary btn-lg">{ctaText || 'Buy'}</button>
					</div>
				</div>
				{/* full-width image: use contain so the device isn't zoomed; keep height controlled */}
				<div style={{width: '100%', overflow: 'hidden'}}>
					<img src={image} alt="hero" style={{width: '100%', height: '55vh', objectFit: 'contain', objectPosition: 'center'}} />
				</div>
			</section>
		);
	}

	return (
		<section className="container my-5">
			<div className={`row align-items-center ${reverse ? 'flex-row-reverse' : ''}`}>
				<div className="col-md-6">
					<h2 className="display-6 fw-bold">{title}</h2>
					{subtitle && <p className="lead">{subtitle}</p>}
					{ctaText && <button className="btn btn-dark mt-3">{ctaText}</button>}
				</div>
				<div className="col-md-6 text-center">
					<img src={image} alt="hero" className="img-fluid" style={{maxHeight: 360}} />
				</div>
			</div>
		</section>
	);
}

export default Hero