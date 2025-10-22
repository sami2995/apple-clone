import React from 'react';

function FeaturePair({ title, subtitle, ctaPrimary = 'Learn more', ctaSecondary, image, reverse, overlay = false }) {
  // overlay: when true, render the image full-width with the copy overlaid on top (like the full hero)
  if (overlay) {
    return (
      <section className="container-fluid px-0 position-relative my-4">
        <div style={{width: '100%', overflow: 'hidden'}}>
          <img src={image} alt={title} style={{width: '100%', height: '55vh', objectFit: 'cover', objectPosition: 'center'}} />
        </div>

        <div className="container position-absolute top-0 start-0 end-0" style={{pointerEvents: 'none'}}>
          <div className="text-center" style={{marginTop: '6%', pointerEvents: 'auto'}}>
            <h3 className="display-6 fw-bold">{title}</h3>
            {subtitle && <p className="lead">{subtitle}</p>}
            <div className="mt-3">
              <button className="btn btn-primary me-2">{ctaPrimary}</button>
              {ctaSecondary && <button className="btn btn-outline-primary">{ctaSecondary}</button>}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="container my-5">
      <div className={`row align-items-center ${reverse ? 'flex-row-reverse' : ''}`}>
        <div className="col-md-6 text-center">
          <img src={image} alt={title} className="img-fluid" style={{maxHeight: '360px'}} />
        </div>

        <div className="col-md-6">
          <h3 className="display-6 fw-bold">{title}</h3>
          {subtitle && <p className="lead">{subtitle}</p>}
          <div className="mt-3">
            <button className="btn btn-primary me-2">{ctaPrimary}</button>
            {ctaSecondary && <button className="btn btn-outline-primary">{ctaSecondary}</button>}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturePair;
