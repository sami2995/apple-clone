import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

// Lightweight search modal used from the Navbar. Uses inline product data
// (mirrors the sample products in Home) so it's self-contained.
export default function SearchModal({ show, onClose }) {
  const products = useMemo(() => [
    { id: 1, title: 'iPhone 14', subtitle: 'Pro. Beyond.', price: '$799', image: '/assets/iphone14.jpg' },
    { id: 2, title: 'MacBook Air', subtitle: 'Supercharged', price: '$999', image: '/assets/macbook-air.jpg' },
    { id: 3, title: 'iPad Pro', subtitle: 'M-series power', price: '$799', image: '/assets/ipad-pro.jpg' },
    { id: 4, title: 'Apple Watch', subtitle: 'Fitness +', price: '$399', image: '/assets/watch.jpg' },
  ], []);

  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!show) return;
    // when opened, reset query
    setQuery('');
    setResults([]);
  }, [show]);

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }
    const q = query.toLowerCase();
    setResults(
      products.filter(p => p.title.toLowerCase().includes(q) || (p.subtitle || '').toLowerCase().includes(q))
    );
  }, [query, products]);

  if (!show) return null;

  return (
    <div className="modal-backdrop show" style={{position:'fixed', inset:0, zIndex:1050, overflowY:'auto'}} aria-modal="true">
      <div className="modal d-block" tabIndex="-1" role="dialog" style={{zIndex:1051}}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Search</h5>
              <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
            </div>
            <div className="modal-body">
              <input
                autoFocus
                className="form-control mb-3"
                placeholder="Search products..."
                value={query}
                onChange={e => setQuery(e.target.value)}
              />

              {query && (
                <div>
                  <h6 className="mb-2">Results</h6>
                  {results.length === 0 && <div className="text-muted">No results</div>}

                  <div className="list-group">
                    {results.map(r => (
                      <Link
                        key={r.id}
                        to={`/product/${r.id}`}
                        className="list-group-item list-group-item-action d-flex align-items-center"
                        onClick={onClose}
                      >
                        <img src={r.image} alt={r.title} style={{width:56, height:56, objectFit:'contain'}} className="me-3" />
                        <div>
                          <div className="fw-bold">{r.title}</div>
                          <div className="small text-muted">{r.subtitle} • {r.price}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
