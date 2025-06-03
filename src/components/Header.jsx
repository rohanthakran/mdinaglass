"use client";

import { useState, useRef } from "react";
import { FaTimes } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { ShoppingCart, User, Bell } from "lucide-react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";

const Header = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const slides = [
    {
      type: "video",
      src: "/videos/hero-vdo.mp4",
    },
  ];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsVideoPlaying(false);
    if (videoRef.current) videoRef.current.pause();
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsVideoPlaying(false);
    if (videoRef.current) videoRef.current.pause();
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsVideoPlaying(true);
      } else {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      }
    }
  };

  const current = slides[currentSlide];

  return (
    <>
      {/* Top Banner */}
      {isBannerVisible && (
        <div className="text-black text-center  position-relative  banner">
          <span>
            Shopping Outside Malta? Safe & Secure Worldwide Shipping Available
          </span>
          {/* <FaTimes
            className="position-absolute"
            style={{
              top: "50%",
              right: "10px",
              transform: "translateY(-50%)",
              cursor: "pointer",
            }}
            onClick={() => setIsBannerVisible(false)}
          /> */}
        </div>
      )}

      {/* Navigation Links */}
      <nav className="border-top navContainer">
        <div className="container">
          <div className={`${isMenuOpen ? "d-block" : "d-none"} d-md-block`}>
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
                  <a key={item} href="#" className="navlink nav-link mx-4 ">
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Logo + Search + Currency + Signup */}
      <div className="container py-3 d-flex flex-column flex-md-row align-items-center justify-content-between">
        {/* Logo */}
        <div className="mb-3 mb-md-0">
          <img
            src="assets/logo.png"
            alt="Mdina Glass Logo"
            style={{ height: "93px", width: "231px" }}
          />
        </div>

        {/* Search Field */}
        <div className="inputContainer">
          <div>
            <button
              className="btn btn-outline-secondary"
              type="button"
              style={{
                border: "none",
              }}
            >
              <IoIosSearch />
            </button>
            <input
              type="text"
              className="form-control"
              placeholder="Search all Categories"
            />
          </div>
        </div>

        {/* Currency & Sign Up */}

        <div className="d-flex align-items-center justify-content-center justify-content-md-end">
          <div className="d-flex align-items-center me-3">
            <Bell
              className="text-muted me-3"
              style={{ width: "20px", height: "20px" }}
            />
            <ShoppingCart
              className="text-muted me-2"
              style={{ width: "20px", height: "20px" }}
            />
            <User
              className="text-muted me-3"
              style={{ width: "20px", height: "20px" }}
            />
          </div>
        </div>

        <div className="d-flex align-items-center">
          <select
            className="form-select me-2 searchContainer"
            style={{ width: "80px" }}
          >
            <option>EUR</option>
            <option>USD</option>
            <option>GBP</option>
          </select>
          <button
            className="signUp btn "
            style={{
              fontFamily: "'Quicksand', sans-serif",
              backgroundColor: "#005e84",
              color: "#fff",
            }}
          >
            SIGN UP
          </button>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="category-nav border-top border-bottom py-2">
        <div className="container SubnavContainer">
          <div className="d-flex justify-content-center flex-wrap">
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
            ].map((cat) => (
              <a key={cat} href="#" className="nav-link mx-2 px-2">
                {cat}
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* Video Banner Section */}
      {/* <div className="video-banner position-relative text-center">
  <video
    className="w-100"
    style={{ maxHeight: '500px', objectFit: 'cover' }}
    src="/videos/hero-vdo.mp4" // Replace this with your dummy video path
    muted
    autoPlay="false"
    loop
    playsInline
  ></video>

  <button
    className="btn btn-primary position-absolute top-50 start-50 translate-middle"
    style={{ borderRadius: '50%', width: '60px', height: '60px', fontSize: '1.5rem' }}
    onClick={() => alert('Play/Pause logic can be added here')}
  >
    ▶
  </button>
</div> */}

      <div className="position-relative text-center">
        {current.type === "video" ? (
          <video
            ref={videoRef}
            className="w-100"
            style={{ maxHeight: "500px", objectFit: "cover" }}
            src={current.src}
            muted
            loop
            playsInline
          />
        ) : (
          <img
            src={current.src}
            className="w-100"
            style={{ maxHeight: "500px", objectFit: "cover" }}
            alt="Carousel Slide"
          />
        )}

        {/* Play/Pause Button for Video */}
        {current.type === "video" && (
          <button
            className="btn btn-primary position-absolute top-50 start-50 translate-middle"
            style={{
              borderRadius: "50%",
              width: "95px",
              height: "95px",
              fontSize: "1.5rem",
              backgroundColor: "#005E84",
            }}
            onClick={togglePlay}
          >
            <FaPlay
              style={{
                width: "34px",
                height: "50px",
                color: "#fff",
                marginLeft: "10px",
              }}
            />
            {/* {isVideoPlaying ? "❚❚" : "▶"} */}
          </button>
        )}

        {/* Carousel Navigation */}
        {/* <button
          className="btn btn-light position-absolute top-50 start-0 translate-middle-y"
          style={{ zIndex: 10 }}
          onClick={handlePrev}
        >
          <FaChevronLeft />
        </button> */}
        {/* <button
          className="btn btn-light position-absolute top-50 end-0 translate-middle-y"
          style={{ zIndex: 10 }}
          onClick={handleNext}
        >
          <FaChevronRight />
        </button> */}
      </div>
    </>
  );
};

export default Header;
