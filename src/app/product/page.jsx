"use client";

import CategorySidebar from "@/components/CategorySidebar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductListing from "@/components/ProductListing";
import React from "react";

const ShopPage = () => {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row min-vh-100">
          {/* Category Sidebar */}
          <div className="col-lg-3 col-md-4 p-0">
            <CategorySidebar />
          </div>
          {/* Product Listing */}
          <div className="col-lg-9 col-md-8 bg-light">
            <ProductListing />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShopPage;
