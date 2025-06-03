"use client";

import React from "react";

const categories = [
  { name: "Lanterns", image: "lanterns.png" },
  { name: "Vases", image: "jwell-1.jpg" },
  { name: "Lighting", image: "lighting.jpg" },
  { name: "Decorative Bowls", image: "jwell-2.jpg" },
  { name: "Egg Holders", image: "egg-holder.jpg" },
  { name: "Book Ends", image: "lanterns.png" },
  { name: "Oil & Vinegar", image: "sculpture.png" },
  { name: "Pestle & Mortar", image: "lighting.jpg" },
  { name: "Bubble Candle Holders", image: "lighting.jpg" },
  { name: "Sculptures", image: "vases.png" },
  { name: "Christmas", image: "lanterns.png" },
  { name: "Valentine's", image: "lanterns.png" },
];

const CategoryGrid = () => {
  return (
    <section className="container py-5">
      <h3
        className="fw-semibold mb-4"
        style={{ fontFamily: "Quicksand, sans-serif" }}
      >
        Explore our categories
      </h3>
      <div className="row g-4">
        {categories.map((cat) => (
          <div className="col-6 col-sm-4 col-md-3" key={cat.name}>
            <div className="card shadow-sm border rounded-3">
              <div
                className="position-relative border-bottom"
                style={{
                  width: "100%",
                  paddingBottom: "100%", // Keeps it square
                  overflow: "hidden",
                  borderBottom: "1px solid #dee2e6", // subtle inner border
                }}
              >
                <img
                  src={`/assets/${cat.image}`}
                  alt={cat.name}
                  className="position-absolute top-0 start-0 w-100 h-100"
                  style={{
                    objectFit: "cover",
                    borderBottom: "1px solid #ccc",
                  }}
                />
                <div
                  className="position-absolute top-50 start-50 translate-middle text-white fw-semibold text-center px-2"
                  style={{
                    textShadow: "1px 1px 6px rgba(0,0,0,0.7)",
                    fontSize: "1.1rem",
                    width: "100%",
                  }}
                >
                  {cat.name}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
