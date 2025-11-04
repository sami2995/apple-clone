import React from 'react';

function FeatureTile({ title, subtitle, ctaPrimary = 'Learn more', ctaSecondary, image }) {
  return (
    <div className="col-md-6 p-4 d-flex flex-column justify-content-start" style={{minHeight: 320, background: 'transparent'}}>
      <div className="text-center" style={{color: '#000'}}>
        <h3 className="display-6 fw-bold">{title}</h3>
        {subtitle && <p className="lead">{subtitle}</p>}
        <div className="mt-3">
          <button className="btn btn-primary me-2">{ctaPrimary}</button>
          {ctaSecondary && <button className="btn btn-outline-primary">{ctaSecondary}</button>}
        </div>
      </div>

      <div className="mt-auto" style={{height: '100%'}}>
        <img src={image} alt={title} className="w-100 h-100" style={{objectFit: 'cover', objectPosition: 'center'}} />
      </div>
    </div>
  );
}

export default function FeatureStrip({ left, right }) {
  return (
    <section className="container my-4">
      <div className="row g-0 align-items-stretch">
        <FeatureTile {...left} />
        <FeatureTile {...right} />
      </div>
    </section>
  );
}
