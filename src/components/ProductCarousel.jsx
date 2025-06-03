"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductCarousel = ({ title = "New Arrivals", showBadge = false }) => {
  const products = [
    {
      id: 1,
      name: "Bubble Small Table Lamp",
      price: 65.0,
      image: "/assets/lamp.png",
      quickView: "Quick View",
    },
    {
      id: 2,
      name: "Necklace & Bracelet",
      price: 35.5,
      image: "/assets/clone.png",
    },
    {
      id: 3,
      name: "Bauble with Angel",
      price: 9.0,
      image: "/assets/lamp.png",
    },
    {
      id: 4,
      name: "Mini Double Swirl Vase",
      price: 25.0,
      image: "/assets/clone.png",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="py-5" style={{ backgroundColor: "#f5f5f5", margin: "0px" }}>
      <div className="container">
        <h3
          className="ms-3 mb-4"
          style={{ fontFamily: "Quicksand, sans-serif", margin: 0 }}
        >
          {title}
        </h3>

        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} className="px-2">
              <div
                className="bg-white text-center new-arrival-design  p-3 d-flex flex-column justify-content-between"
                style={{ height: "100%", minHeight: "340px" }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="img-fluid mb-2"
                  style={{ height: "270px", objectFit: "contain" }}
                />

                {/* Always reserve space for Quick View */}
                <div style={{ minHeight: "20px" }}>
                  {product.quickView ? (
                    <p className="small text-muted mb-1">{product.quickView}</p>
                  ) : (
                    <p className="small mb-1" style={{ visibility: "hidden" }}>
                      Placeholder
                    </p>
                  )}
                </div>

                <h6
                  className="mb-1"
                  style={{ fontFamily: "Quicksand, sans-serif" }}
                >
                  {product.name}
                </h6>
                <p className="text-muted mb-2">€{product.price.toFixed(2)}</p>

                <button className="btn btn-outline-secondary w-100 mt-auto">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Carousel Arrow Styling */}
      <style>
        {`
    .slick-prev, .slick-next {
      width: 30px;
      height: 30px;
      z-index: 2;
    }

    .slick-prev:before, .slick-next:before {
      color: #005E84;
      font-size: 60px;
      opacity: 1;
    }

    /* Optional: position the arrows better */
    .slick-prev {
      left: -10px;
    }

    .slick-next {
      right: 70px;
    }
  `}
      </style>
    </div>
  );
};

export default ProductCarousel;
