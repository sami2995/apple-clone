import React from 'react';


function Hero({
  title,
  subtitle,
  ctaText,
  image,
  reverse,
  full,
  showLearn = true,
  showCTA = true,
  backgroundColor = '#000',
  textColor = '#fff',
  onLearnMore,
  onCtaClick,
}) {
  const shouldShowLearn = showLearn && typeof onLearnMore === 'function';
  const shouldShowCTA = showCTA && (!!ctaText || typeof onCtaClick === 'function');
  const hasActions = shouldShowLearn || shouldShowCTA;

  if (full) {
    return (
      <section className="container-fluid px-0 hero hero--full" style={{ backgroundColor, color: textColor }}>
        <div className="container text-center py-5">
          <h1 className="display-4 fw-bold mb-3" style={{ color: textColor }}>
            {title}
          </h1>
          {subtitle && (
            <p className="lead mb-4" style={{ color: textColor }}>
              {subtitle}
            </p>
          )}
          {hasActions && (
            <div className="d-flex flex-wrap justify-content-center gap-3">
              {shouldShowLearn && (
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  onClick={onLearnMore}
                  aria-label={`${title} learn more`}
                >
                  Learn more
                </button>
              )}
              {shouldShowCTA && (
                <button
                  type="button"
                  className="btn btn-outline-primary btn-lg"
                  onClick={onCtaClick}
                  aria-label={`${title} ${ctaText || 'Buy'}`}
                >
                  {ctaText || 'Buy'}
                </button>
              )}
            </div>
          )}
        </div>
        <div className="hero__media">
          <img
            src={image}
            alt={`${title} hero`}
            style={{ width: '100%', height: '55vh', objectFit: 'contain', objectPosition: 'center' }}
          />
        </div>
      </section>
    );
  }

  return (
    <section className="container my-5 hero hero--standard">
      <div className={`row align-items-center ${reverse ? 'flex-row-reverse' : ''}`}>
        <div className="col-md-6">
          <h2 className="display-6 fw-bold">{title}</h2>
          {subtitle && <p className="lead text-muted">{subtitle}</p>}
          {hasActions && (
            <div className="d-flex flex-wrap gap-3 mt-3">
              {shouldShowLearn && (
                <button type="button" className="btn btn-dark" onClick={onLearnMore}>
                  Learn more
                </button>
              )}
              {shouldShowCTA && (
                <button type="button" className="btn btn-outline-dark" onClick={onCtaClick}>
                  {ctaText || 'Buy'}
                </button>
              )}
            </div>
          )}
        </div>
        <div className="col-md-6 text-center">
          <img src={image} alt={`${title} product`} className="img-fluid" style={{ maxHeight: 360 }} />
        </div>
      </div>
    </section>
  );
}

export default Hero