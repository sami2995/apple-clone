import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
  <footer className="bg-light text-muted mt-5" style={{fontSize: '0.95rem'}}>
      <div className="container py-4">
        <p className="mb-3" style={{ lineHeight: 1.3 }}>
          Trade-in values will vary based on the condition, year, and configuration of your eligible trade-in device. Not all devices are eligible for credit. You must be at least the age of majority to be eligible to trade in for credit or for an Apple Gift Card. Trade-in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In-store trade-in requires presentation of a valid photo ID (local law may require saving this information). Offer may not be available in all stores and may vary between in-store and online trade-in. Some stores may have additional requirements. Apple or its trade-in partners reserve the right to refuse, cancel, or limit quantity of any trade-in transaction for any reason. More details are available from Apple's trade-in partner for trade-in and recycling of eligible devices. Restrictions and limitations may apply.
        </p>

        <div className="row">
          <div className="col-6 col-md-2">
            <h6 className="fw-bold">Shop and Learn</h6>
            <ul className="list-unstyled">
              <li>Store</li>
              <li>Mac</li>
              <li>iPad</li>
              <li>iPhone</li>
              <li>Watch</li>
              <li>Vision</li>
              <li>AirPods</li>
              <li>TV &amp; Home</li>
              <li>AirTag</li>
              <li>Accessories</li>
              <li>Gift Cards</li>
            </ul>

            <h6 className="fw-bold mt-3">Apple Wallet</h6>
            <ul className="list-unstyled">
              <li>Wallet</li>
              <li>Apple Card</li>
              <li>Apple Pay</li>
              <li>Apple Cash</li>
            </ul>
          </div>

          <div className="col-6 col-md-2">
            <h6 className="fw-bold">Account</h6>
            <ul className="list-unstyled small">
              <li>Manage Your Apple Account</li>
              <li>Apple Store Account</li>
              <li>iCloud.com</li>
            </ul>

            <h6 className="fw-bold mt-3">Entertainment</h6>
            <ul className="list-unstyled small">
              <li>Apple One</li>
              <li>Apple TV+</li>
              <li>Apple Music</li>
              <li>Apple Arcade</li>
              <li>Apple Fitness+</li>
              <li>Apple News+</li>
            </ul>
          </div>

          <div className="col-6 col-md-2">
            <h6 className="fw-bold">Apple Store</h6>
            <ul className="list-unstyled small">
              <li>Find a Store</li>
              <li>Genius Bar</li>
              <li>Today at Apple</li>
              <li>Group Reservations</li>
              <li>Apple Camp</li>
              <li>Apple Store App</li>
              <li>Certified Refurbished</li>
            </ul>
          </div>

          <div className="col-6 col-md-2">
            <h6 className="fw-bold">For Business</h6>
            <ul className="list-unstyled">
              <li>Apple and Business</li>
              <li>Shop for Business</li>
            </ul>

            <h6 className="fw-bold mt-3">For Education</h6>
            <ul className="list-unstyled">
              <li>Apple and Education</li>
              <li>Shop for K-12</li>
              <li>Shop for College</li>
            </ul>

            <h6 className="fw-bold mt-3">For Healthcare</h6>
            <ul className="list-unstyled">
              <li>Apple and Healthcare</li>
            </ul>

            <h6 className="fw-bold mt-3">For Government</h6>
            <ul className="list-unstyled">
              <li>Apple and Government</li>
              <li>Shop for Veterans and Military</li>
              <li>Shop for State and Local Employees</li>
              <li>Shop for Federal Employees</li>
            </ul>
          </div>

          <div className="col-6 col-md-2">
            <h6 className="fw-bold">Apple Values</h6>
            <ul className="list-unstyled">
              <li>Accessibility</li>
              <li>Education</li>
              <li>Environment</li>
              <li>Inclusion and Diversity</li>
              <li>Privacy</li>
            </ul>
          
            <h6 className="fw-bold">About Apple</h6>
            <ul className="list-unstyled">
              <li>Newsroom</li>
              <li>Apple Leadership</li>
              <li>Career Opportunities</li>
              <li>Investors</li>
            </ul>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-12 small text-muted">
            More ways to shop: Find an Apple Store or other retailer near you. Or call <a href="tel:1-800-692-7753" className="text-muted">1-800-MY-APPLE</a> (1-800-692-7753).
          </div>
        </div>

        <div className="row mt-3 pt-3 border-top">
          <div className="col-12 col-md-6 small text-muted">Copyright © {year} Apple Inc. All rights reserved.</div>
          <div className="col-12 col-md-4 small text-muted text-center">Privacy Policy • Terms of Use • Sales and Refunds • Legal • Site Map</div>
          <div className="col-12 col-md-2 small text-muted text-md-end">United States</div>
        </div>
      </div>
    </footer>
  );
}
    
          