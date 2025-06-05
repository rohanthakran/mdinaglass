import Link from "next/link";
import React, { useState } from "react";

const ResponsiveNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showShop, setShowShop] = useState(false);

  return (
    <nav className="responsive-nav border-top">
      {/* Desktop Nav */}
      <nav className="border-top navContainer">
        <div className="container">
          <div
            className={`${isOpen ? "d-none" : "d-none"} d-md-none d-lg-block`}
          >
            <div className="row navrow">
              <div className="col-12 d-flex justify-content-center flex-wrap">
                {[
                  { label: "Home", href: "/" },
                  { label: "About Us", href: "/about" },
                  { label: "All Products", href: "/product" },
                  { label: "New Arrivals", href: "/new" },
                  { label: "Limited Editions", href: "/limited" },
                  { label: "Gift Registry", href: "/gift" },
                ].map(({ label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    className="navlink nav-link mx-4"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Nav Toggle Button */}
      <div className="d-flex d-md-flex d-lg-none justify-content-between align-items-center py-2">
        <div className=" mb-md-0">
          <img
            src="assets/logo.png"
            alt="Mdina Glass Logo"
            style={{ height: "39px", width: "100px" }}
          />
        </div>
        <button
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="mobile-nav d-md-flex d-lg-none">
          {/* Shop with submenu */}
          <div
            className="menu-item"
            onClick={() => setShowShop((prev) => !prev)}
          >
            Shop
          </div>
          {showShop && (
            <div className="mobile-nav d-md-none">
              <div className="row navrow">
                <div className="col-12 d-flex  flex-wrap">
                  {[
                    "Glass Blowing & Sculpting",
                    "Fusion",
                    "Lampwork",
                    "Jewellery",
                    "Christmas",
                    "Valentine's",
                    "Legacy (Book)",
                    "Gift Vouchers",
                    "Sale",
                    "Shop by Ranges",
                  ].map((item) => (
                    <a key={item} href="#" className="navlink nav-link mx-4">
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Other items */}
          <a href="#" className="menu-item">
            Home
          </a>
          <a href="#" className="menu-item">
            About Us
          </a>
          <a href="#" className="menu-item">
            Gift Registry
          </a>
        </div>
      )}
    </nav>
  );
};

export default ResponsiveNav;
