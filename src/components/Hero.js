import React from 'react';


function Hero({ title, subtitle, ctaText, image, reverse }) {
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