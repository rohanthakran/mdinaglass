"use client";

import React, { useState } from "react";

const ProductListing = () => {
  const [products] = useState([
    {
      id: 1,
      name: "Glass Bead Necklace & Bracelet Set",
      price: "€26.00",
      image: "/api/placeholder/300/250",
      colors: ["amber", "black"],
    },
    {
      id: 2,
      name: "Long Necklace & Bracelet with Glass Beads Set",
      price: "€27.50",
      image: "/api/placeholder/300/250",
      colors: ["amber", "gold"],
    },
    {
      id: 3,
      name: "Glass Beads & Leather Strings Necklace & Bracelet Set",
      price: "€28.50",
      image: "/api/placeholder/300/250",
      colors: ["brown", "natural"],
      hasOptions: true,
    },
    {
      id: 4,
      name: "Blue Glass Bead Necklace & Bracelet Set",
      price: "€26.00",
      image: "/api/placeholder/300/250",
      colors: ["blue", "silver"],
    },
    {
      id: 5,
      name: "Elegant Blue Glass Necklace",
      price: "€32.00",
      image: "/api/placeholder/300/250",
      colors: ["blue", "teal"],
    },
    {
      id: 6,
      name: "Multi-strand Blue Glass Bead Set",
      price: "€35.00",
      image: "/api/placeholder/300/250",
      colors: ["blue", "white"],
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(15);

  return (
    <div className="p-4">
      {/* Filter Controls */}
      <div className="row mb-4">
        <div className="col-md-3">
          <select className="form-select">
            <option>SHAPE</option>
            <option>Round</option>
            <option>Square</option>
            <option>Oval</option>
          </select>
        </div>
        <div className="col-md-3">
          <select className="form-select">
            <option>ALL COLOURS</option>
            <option>Blue</option>
            <option>Amber</option>
            <option>Green</option>
            <option>Clear</option>
          </select>
        </div>
        <div className="col-md-3">
          <select className="form-select">
            <option>ALL PRICES</option>
            <option>Under €20</option>
            <option>€20 - €50</option>
            <option>Over €50</option>
          </select>
        </div>
      </div>

      {/* Sort and Items Control */}
      <div className="row mb-4 align-items-center">
        <div className="col-md-6">
          <div className="d-flex align-items-center">
            <span className="me-3">Sort by</span>
            <select className="form-select w-auto">
              <option>Price</option>
              <option>Name</option>
              <option>Newest</option>
              <option>Popular</option>
            </select>
          </div>
        </div>
        <div className="col-md-6 text-end">
          <div className="d-flex align-items-center justify-content-end">
            <span className="me-3">Items</span>
            <select
              className="form-select w-auto me-3"
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(Number(e.target.value))}
            >
              <option value={15}>15 Items</option>
              <option value={30}>30 Items</option>
              <option value={60}>60 Items</option>
            </select>
          </div>
        </div>
      </div>

      {/* Items Count */}
      <div className="mb-3">
        <small className="text-muted">Items 1-9 of 9 total</small>
      </div>

      {/* Product Grid */}
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="position-relative">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                  style={{ height: "250px", objectFit: "cover" }}
                />
                {product.hasOptions && (
                  <div className="position-absolute top-0 end-0 m-2">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={`options-${product.id}`}
                      />
                      <label
                        className="form-check-label small text-muted"
                        htmlFor={`options-${product.id}`}
                      >
                        Click for more options
                      </label>
                    </div>
                  </div>
                )}
              </div>
              <div className="card-body text-center">
                <h6 className="card-title mb-3">{product.name}</h6>
                <p className="card-text text-info fw-bold">
                  Price {product.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <nav aria-label="Product pagination" className="mt-4">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
          </li>
          <li className={`page-item ${currentPage === 1 ? "active" : ""}`}>
            <button className="page-link" onClick={() => setCurrentPage(1)}>
              1
            </button>
          </li>
          <li className={`page-item ${currentPage === 2 ? "active" : ""}`}>
            <button className="page-link" onClick={() => setCurrentPage(2)}>
              2
            </button>
          </li>
          <li className="page-item">
            <button className="page-link" onClick={() => setCurrentPage(3)}>
              3
            </button>
          </li>
          <li className="page-item">
            <button
              className="page-link"
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Next &gt;
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ProductListing;
