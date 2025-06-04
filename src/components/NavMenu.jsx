import React, { useState } from "react";

const ResponsiveNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showShop, setShowShop] = useState(false);

  return (
    <nav className="responsive-nav border-top">
      <div className="container">
        {/* Desktop Nav */}
        <nav className="border-top navContainer">
          <div className="container">
            <div className={`${isOpen ? "d-none" : "d-none"} d-md-block`}>
              <div className="row navrow">
                <div className="col-12 d-flex justify-content-center flex-wrap">
                  {[
                    "Home",
                    "About Us",
                    "All Products",
                    "New Arrivals",
                    "Limited Editions",
                    "Gift Registry",
                  ].map((item) => (
                    <a key={item} href="#" className="navlink nav-link mx-4">
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Nav Toggle Button */}
        <div className="d-flex d-md-none justify-content-between align-items-center py-2">
          <div className="mb-3 mb-md-0">
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
          <div className="mobile-nav d-md-none">
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
      </div>
    </nav>
  );
};

export default ResponsiveNav;
