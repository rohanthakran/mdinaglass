"use client";

import React from "react";

const CategorySidebar = () => {
  return (
    <div className="bg-info text-white p-3 h-100">
      <h4 className="mb-4">Shop</h4>
      <nav>
        <ul className="list-unstyled">
          <li className="mb-2">
            <a href="#" className="text-white text-decoration-none">
              Glass Blowing & Sculpting
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-white text-decoration-none">
              Fusion
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-white text-decoration-none">
              Lampwork
            </a>
          </li>
          <li className="mb-3">
            <a href="#" className="text-white text-decoration-none">
              Jewellery
            </a>
            <ul className="list-unstyled ms-3 mt-2">
              <li className="mb-1">
                <a href="#" className="text-white text-decoration-none small">
                  BRACELETS
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="text-white text-decoration-none small">
                  EARRINGS
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="text-white text-decoration-none small">
                  NECKLACES
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="text-white text-decoration-none small">
                  SETS
                </a>
              </li>
            </ul>
          </li>
          <li className="mb-2">
            <a href="#" className="text-white text-decoration-none">
              Christmas
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-white text-decoration-none">
              Valentine's
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-white text-decoration-none">
              Legacy: 50 Years of Mdina Glass (Book)
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-white text-decoration-none">
              Gift Vouchers
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-white text-decoration-none">
              Sale
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default CategorySidebar;
