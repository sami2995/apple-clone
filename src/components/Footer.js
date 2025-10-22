import React from 'react';

function Footer(){
	const year = new Date().getFullYear();
	return (
		<footer className="bg-light mt-5 pt-5 border-top">
			<div className="container">
				<div className="row">
					<div className="col-6 col-md-3 mb-4">
						<h6 className="fw-bold">Shop and Learn</h6>
						<ul className="list-unstyled small">
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
					</div>

					<div className="col-6 col-md-3 mb-4">
						<h6 className="fw-bold">Apple Wallet</h6>
						<ul className="list-unstyled small">
							<li>Wallet</li>
							<li>Apple Card</li>
							<li>Apple Pay</li>
							<li>Apple Cash</li>
						</ul>

						<h6 className="fw-bold mt-3">Account</h6>
						<ul className="list-unstyled small">
							<li>Manage Your Apple Account</li>
							<li>Apple Store Account</li>
							<li>iCloud.com</li>
						</ul>
					</div>

					<div className="col-6 col-md-3 mb-4">
						<h6 className="fw-bold">Entertainment</h6>
						<ul className="list-unstyled small">
							<li>Apple One</li>
							<li>Apple TV+</li>
							<li>Apple Music</li>
							<li>Apple Arcade</li>
							<li>Apple Fitness+</li>
							<li>Apple News+</li>
							<li>Apple Podcasts</li>
							<li>Apple Books</li>
							<li>App Store</li>
						</ul>
					</div>

					<div className="col-6 col-md-3 mb-4">
						<h6 className="fw-bold">Apple Store</h6>
						<ul className="list-unstyled small">
							<li>Find a Store</li>
							<li>Genius Bar</li>
							<li>Today at Apple</li>
							<li>Group Reservations</li>
							<li>Apple Camp</li>
							<li>Apple Store App</li>
							<li>Certified Refurbished</li>
							<li>Apple Trade In</li>
							<li>Financing</li>
							<li>Carrier Deals at Apple</li>
							<li>Order Status</li>
							<li>Shopping Help</li>
						</ul>
					</div>
				</div>

				<div className="row">
					<div className="col-12 col-md-4 mb-4">
						<h6 className="fw-bold">For Business</h6>
						<ul className="list-unstyled small">
							<li>Apple and Business</li>
							<li>Shop for Business</li>
						</ul>
					</div>

					<div className="col-12 col-md-4 mb-4">
						<h6 className="fw-bold">For Education</h6>
						<ul className="list-unstyled small">
							<li>Apple and Education</li>
							<li>Shop for K-12</li>
							<li>Shop for College</li>
						</ul>
					</div>

					<div className="col-12 col-md-4 mb-4">
						<h6 className="fw-bold">For Healthcare</h6>
						<ul className="list-unstyled small">
							<li>Apple and Healthcare</li>
						</ul>
						<h6 className="fw-bold mt-3">For Government</h6>
						<ul className="list-unstyled small">
							<li>Apple and Government</li>
							<li>Shop for Veterans and Military</li>
							<li>Shop for State and Local Employees</li>
							<li>Shop for Federal Employees</li>
						</ul>
					</div>
				</div>

				<div className="row">
					<div className="col-12 col-md-4 mb-4">
						<h6 className="fw-bold">Apple Values</h6>
						<ul className="list-unstyled small">
							<li>Accessibility</li>
							<li>Education</li>
							<li>Environment</li>
							<li>Inclusion and Diversity</li>
							<li>Privacy</li>
							<li>Racial Equity and Justice</li>
							<li>Supply Chain Innovation</li>
						</ul>
					</div>

					<div className="col-12 col-md-4 mb-4">
						<h6 className="fw-bold">About Apple</h6>
						<ul className="list-unstyled small">
							<li>Newsroom</li>
							<li>Apple Leadership</li>
							<li>Career Opportunities</li>
							<li>Investors</li>
							<li>Ethics &amp; Compliance</li>
							<li>Events</li>
							<li>Contact Apple</li>
						</ul>
					</div>

					
				</div>

				<div className="row border-top pt-3 mt-3">
					<div className="col-12 col-md-6 small text-muted mb-2 mb-md-0 d-flex flex-column flex-md-row align-items-md-center">
						<span className="me-md-2">More ways to shop:</span>
						<span>Find an Apple Store or other retailer near you. Or call <a href="tel:1-800-692-7753" className="text-muted text-decoration-underline">1-800-MY-APPLE</a> (1-800-692-7753).</span>
					</div>
					<div className="col-12 col-md-6 small text-muted text-md-end d-flex flex-column flex-md-row justify-content-md-end align-items-md-center">
						<span className="me-md-2">United States</span>
						<span className="me-md-2">Copyright © {year} Apple Inc. All rights reserved.</span>
						<span>Privacy Policy • Terms of Use • Sales and Refunds • Legal • Site Map</span>
					</div>
					
				</div>
			</div>
		</footer>
	);
}

export default Footer