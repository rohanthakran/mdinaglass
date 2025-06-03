"use client";

import React from "react";

const categories = [
  { name: "Lanterns", image: "image1.png" },
  { name: "Vases", image: "vases.png" },
  { name: "Lighting", image: "octopus.png" },
  { name: "Decorative Bowls", image: "Bowls.png" },
  { name: "Egg Holders", image: "egg.png" },
  { name: "Book Ends", image: "book.png" },
  { name: "Oil & Vinegar", image: "oil.png" },
  { name: "Pestle & Mortar", image: "pestle.png" },
  { name: "Bubble Candle Holders", image: "bubble.png" },
  { name: "Sculptures", image: "Sculptures.png" },
  { name: "Christmas", image: "christmas.png" },
  { name: "Valentine's", image: "valentine.png" },
];

const CategoryGrid = () => {
  return (
    <section className=" custom-categories bg-white container py-5">
      <h3 className=" mb-4" style={{ fontFamily: "dopamine, sans-serif" }}>
        Explore our categories
      </h3>
      <div className="row g-4">
        {categories.map((cat) => (
          <div className="col-6 col-sm-4 col-md-3" key={cat.name}>
            <div className="card category-card shadow-sm border rounded-3">
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
                  className="font-custom-category position-absolute bottom-5 start-50 translate-middle text-white  text-center px-2"
                  style={{
                    textShadow: "1px 1px 6px rgba(0,0,0,0.7)",

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
