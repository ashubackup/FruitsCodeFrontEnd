import React from "react";
import FeaturedProducts from "../component/FeaturedProducts";
import BannerComponent from "../component/BannerComponent";
import ProductDetails from "../component/ProductDetails";
import RelatedProducts from "../component/RelatedProducts";

const SingleProduct = () => {
  return (
    <>
      <div className="container-fluid py-5 mt-5">
        <div className="container py-5">
          <div className="row g-4 mb-5">
            <div className="col-lg-8 col-xl-9">
              <div className="row g-4">
                <div className="col-lg-6">
                  <div className="border rounded">
                    <a href="#">
                      <img
                        src="img/single-item.jpg"
                        className="img-fluid rounded"
                        alt="Image"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-6">
                  <h4 className="fw-bold mb-3">Broccoli</h4>
                  <p className="mb-3">Category: Vegetables</p>
                  <h5 className="fw-bold mb-3">3,35 $</h5>
                  <div className="d-flex mb-4">
                    <i className="fa fa-star text-secondary"></i>
                    <i className="fa fa-star text-secondary"></i>
                    <i className="fa fa-star text-secondary"></i>
                    <i className="fa fa-star text-secondary"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <p className="mb-4">
                    The generated Lorem Ipsum is therefore always free from
                    repetition injected humour, or non-characteristic words
                    etc.
                  </p>
                  <p className="mb-4">
                    Susp endisse ultricies nisi vel quam suscipit. Sabertooth
                    peacock flounder; chain pickerel hatchetfish, pencilfish
                    snailfish
                  </p>
                  <div className="input-group quantity mb-5" style={{ width: '100' }}>
                    <div className="input-group-btn">
                      <button className="btn btn-sm btn-minus rounded-circle bg-light border">
                        <i className="fa fa-minus"></i>
                      </button>
                    </div>
                    <input
                      type="text"
                      className="form-control form-control-sm text-center border-0"
                      value="1"
                    />
                    <div className="input-group-btn">
                      <button className="btn btn-sm btn-plus rounded-circle bg-light border">
                        <i className="fa fa-plus"></i>
                      </button>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="btn border border-secondary rounded-pill px-4 py-2 mb-4 text-primary"
                  >
                    <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                    Add to cart
                  </a>
                </div>
                <div className="col-lg-12">
                  <nav>
                    <div className="nav nav-tabs mb-3">
                      <button
                        className="nav-link active border-white border-bottom-0"
                        type="button"
                        role="tab"
                        id="nav-about-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-about"
                        aria-controls="nav-about"
                        aria-selected="true"
                      >
                        Description
                      </button>
                      <button
                        className="nav-link border-white border-bottom-0"
                        type="button"
                        role="tab"
                        id="nav-mission-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-mission"
                        aria-controls="nav-mission"
                        aria-selected="false"
                      >
                        Reviews
                      </button>
                    </div>
                  </nav>
                  <div className="tab-content mb-5">
                    <ProductDetails />
                    <div
                      className="tab-pane"
                      id="nav-mission"
                      role="tabpanel"
                      aria-labelledby="nav-mission-tab"
                    >
                      <div className="d-flex">
                        <img
                          src="img/avatar.jpg"
                          className="img-fluid rounded-circle p-3"
                          style={{ width: '100px', height: '100px' }}
                          alt=""
                        />
                        <div>
                          <p className="mb-2" style={{ fontSize: '14px' }}>
                            April 12, 2024
                          </p>
                          <div className="d-flex justify-content-between">
                            <h5>Jason Smith</h5>
                            <div className="d-flex mb-3">
                              <i className="fa fa-star text-secondary"></i>
                              <i className="fa fa-star text-secondary"></i>
                              <i className="fa fa-star text-secondary"></i>
                              <i className="fa fa-star text-secondary"></i>
                              <i className="fa fa-star"></i>
                            </div>
                          </div>
                          <p>
                            The generated Lorem Ipsum is therefore always free
                            from repetition injected humour, or
                            non-characteristic words etc. Susp endisse
                            ultricies nisi vel quam suscipit
                          </p>
                        </div>
                      </div>
                      <div className="d-flex">
                        <img
                          src="img/avatar.jpg"
                          className="img-fluid rounded-circle p-3"
                          style={{ width: '100px', height: '100px' }}
                          alt=""
                        />
                        <div>
                          <p className="mb-2" style={{ fontSize: '14px' }}>
                            April 12, 2024
                          </p>
                          <div className="d-flex justify-content-between">
                            <h5>Sam Peters</h5>
                            <div className="d-flex mb-3">
                              <i className="fa fa-star text-secondary"></i>
                              <i className="fa fa-star text-secondary"></i>
                              <i className="fa fa-star text-secondary"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                            </div>
                          </div>
                          <p className="text-dark">
                            The generated Lorem Ipsum is therefore always free
                            from repetition injected humour, or
                            non-characteristic words etc. Susp endisse
                            ultricies nisi vel quam suscipit
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane"
                      id="nav-vision"
                      role="tabpanel"
                    >
                      <p className="text-dark">
                        Tempor erat elitr rebum at clita. Diam dolor diam
                        ipsum et tempor sit. Aliqu diam amet diam et eos
                        labore. 3
                      </p>
                      <p className="mb-0">
                        Diam dolor diam ipsum et tempor sit. Aliqu diam amet
                        diam et eos labore. Clita erat ipsum et lorem et
                        sit
                      </p>
                    </div>
                  </div>
                </div>
                <form action="#">
                  <h4 className="mb-5 fw-bold">Leave a Reply</h4>
                  <div className="row g-4">
                    <div className="col-lg-6">
                      <div className="border-bottom rounded">
                        <input
                          type="text"
                          className="form-control border-0 me-4"
                          placeholder="Your Name *"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="border-bottom rounded">
                        <input
                          type="email"
                          className="form-control border-0"
                          placeholder="Your Email *"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="border-bottom rounded my-4">
                        <textarea
                          name=""
                          id=""
                          className="form-control border-0"
                          cols="30"
                          rows="8"
                          placeholder="Your Review *"
                          spellCheck="false"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="d-flex justify-content-between py-3 mb-5">
                        <div className="d-flex align-items-center">
                          <p className="mb-0 me-3">Please rate:</p>
                          <div className="d-flex align-items-center" style={{ fontSize: '12px' }}>
                            <i className="fa fa-star text-muted"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                        </div>
                        <a
                          href="#"
                          className="btn border border-secondary text-primary rounded-pill px-4 py-3"
                        >
                          Post Comment
                        </a>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-4 col-xl-3">
              <div className="row g-4 fruite">
                <div className="col-lg-12">
                  <div className="input-group w-100 mx-auto d-flex mb-4">
                    <input
                      type="search"
                      className="form-control p-3"
                      placeholder="keywords"
                      aria-describedby="search-icon-1"
                    />
                    <span id="search-icon-1" className="input-group-text p-3">
                      <i className="fa fa-search"></i>
                    </span>
                  </div>
                  <div className="mb-4">
                    <h4>Categories</h4>
                    <ul className="list-unstyled fruite-categorie">
                      <li>
                        <div className="d-flex justify-content-between fruite-name">
                          <a href="#">
                            <i className="fas fa-apple-alt me-2"></i>Apples
                          </a>
                          <span>(3)</span>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex justify-content-between fruite-name">
                          <a href="#">
                            <i className="fas fa-apple-alt me-2"></i>Oranges
                          </a>
                          <span>(5)</span>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex justify-content-between fruite-name">
                          <a href="#">
                            <i className="fas fa-apple-alt me-2"></i>Strawberry
                          </a>
                          <span>(2)</span>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex justify-content-between fruite-name">
                          <a href="#">
                            <i className="fas fa-apple-alt me-2"></i>Banana
                          </a>
                          <span>(8)</span>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex justify-content-between fruite-name">
                          <a href="#">
                            <i className="fas fa-apple-alt me-2"></i>Pumpkin
                          </a>
                          <span>(5)</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <FeaturedProducts />

                {/* <BannerComponent /> */}
              </div>
            </div>
          </div>
          {/* <RelatedProducts /> */}
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
