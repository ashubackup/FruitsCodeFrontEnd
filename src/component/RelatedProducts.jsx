import React from "react";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const RelatedProducts = () => {
  const options = {
    autoplay: true,
    smartSpeed: 1500,
    center: false,
    dots: true,
    loop: true,
    margin: 25,
    nav: true,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>'
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      },
      1200: {
        items: 4
      }
    }
  };

  return (
    <div className="container">
      <h1 className="fw-bold mb-0">Related products</h1>
      <div className="owl-carousel vegetable-carousel">
        <div className="border border-primary rounded position-relative vesitable-item">
          <div className="vesitable-img">
            <img
              src="img/vegetable-item-6.jpg"
              className="img-fluid w-100 rounded-top"
              alt=""
            />
          </div>
          <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{ top: '10px', right: '10px' }}>Vegetable</div>
          <div className="p-4 pb-0 rounded-bottom">
            <h4>Parsley</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
            <div className="d-flex justify-content-between flex-lg-wrap">
              <p className="text-dark fs-5 fw-bold">$4.99 / kg</p>
              <a href="#" className="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
            </div>
          </div>
        </div>
        {/* Add more product items as needed */}
      </div>
    </div>
  );
};

export default RelatedProducts;

