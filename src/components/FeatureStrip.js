import React from 'react';

function enhanceAction(action, defaultClassName) {
  if (!action) {
    return null;
  }

  if (React.isValidElement(action)) {
    const existingClassName = action.props.className || '';
    return React.cloneElement(action, {
      className: `${defaultClassName} ${existingClassName}`.trim(),
    });
  }

  return (
    <button type="button" className={defaultClassName}>
      {action}
    </button>
  );
}

function FeatureTile({ title, subtitle, ctaPrimary, ctaSecondary, image }) {
  return (
    <div className="col-md-6">
      <div className="panel-card h-100">
        <div className="panel-card__content text-center text-md-start">
          <h3 className="display-6 fw-bold mb-2">{title}</h3>
          {subtitle && <p className="lead text-muted mb-3">{subtitle}</p>}
          <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-md-start">
            {enhanceAction(ctaPrimary, 'btn btn-primary')}
            {enhanceAction(ctaSecondary, 'btn btn-outline-primary')}
          </div>
        </div>
        <div className="panel-card__media">
          <img src={image} alt={title} loading="lazy" />
        </div>
      </div>
    </div>
  );
}

export default function FeatureStrip({ left, right }) {
  return (
    <section className="container my-5">
      <div className="row g-4 align-items-stretch">
        <FeatureTile {...left} />
        <FeatureTile {...right} />
      </div>
    </section>
  );
}
