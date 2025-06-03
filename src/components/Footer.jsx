"use client";

import React from "react";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "rgb(245, 245, 245)" }}>
      {/* Top Footer */}
      <div className="container pt-5 pb-4 border-top">
        <div className="row">
          {/* Logo & Payment */}
          <div className="col-md-4 mb-4">
            <img
              src="/assets/logo.png"
              alt="Mdina Glass Logo"
              className="mb-3"
              style={{ width: "150px" }}
            />
            <p className="fw-semibold">Payment Method</p>
            <div className="d-flex flex-wrap gap-2">
              <img src="/assets/visa.png" alt="Visa" height="30" />
            </div>
          </div>

          {/* Links */}
          <div className="col-md-2 mb-4">
            <h6 className="fw-semibold">Links</h6>
            <ul className="list-unstyled small">
              <li>Home</li>
              <li>About Us</li>
              <li>All Products</li>
              <li>New Arrivals</li>
              <li>Limited Editions</li>
              <li>Gift Registry</li>
            </ul>
          </div>

          {/* Information */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-semibold">Information</h6>
            <ul className="list-unstyled small">
              <li>Careers</li>
              <li>International Delivery</li>
              <li>Trade Enquiries</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy & Data Protection</li>
              <li>Cookies Policy</li>
              <li>Returns & Cancellations</li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-semibold">Contact</h6>
            <ul className="list-unstyled small">
              <li>Store Locator & Contact</li>
              <li>Contact Form</li>
            </ul>
            <h6 className="fw-semibold mt-3">Get Social</h6>
            <div className="d-flex gap-2 mb-2">
              <img src="/assets/fb.png" alt="Facebook" height="30" />
              <img src="/assets/insta.png" alt="Instagram" height="30" />
              <img src="/assets/twitter.png" alt="Twitter" height="30" />
              <img src="/assets/linkedin.png" alt="Linkedin" height="30" />
            </div>
            <div
              className="d-inline-flex align-items-center px-3 py-2 rounded mt-2"
              style={{ backgroundColor: "#80d1cb", maxWidth: "200px" }}
            >
              <img
                src="/assets/houzz.png"
                alt="Houzz"
                style={{ height: "24px", marginRight: "8px" }}
              />
              <span className="text-white small">Featured on Houzz</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="text-dark small text-center py-3"
        style={{
          background: "white",
          fontFamily: "Quicksand, sans-serif",
          fontSize: "11px",
          lineHeight: "16.5px",
        }}
      >
        <div className="container">
          <p className="mb-2 px-3">
            © 2025 Mdina Glass Malta (XK Holdings). Trading License Number:
            55/1739. All Rights Reserved. VAT registered number MT 1735-2011 EXO
            984. All prices on this website include VAT unless stated. Contracts
            and correspondence are concluded in English and the store currency
            is EUR. Mdina Glass is not responsible for accuracy of currency
            conversions shown on this website. The conversions are called in
            from a 3rd Party and are for approximate use only and the customer
            is responsible for finally checking conversion rates, if they wish,
            from their own preferred source.
          </p>
          <p className="mb-0">
            Designed by
            <a
              href="https://bubbletechnosoft.com"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/assets/blackbull-logo.png"
                alt="BlackBull TechnoSoft"
                className="ms-2"
                style={{ height: "20px", verticalAlign: "middle" }}
              />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
