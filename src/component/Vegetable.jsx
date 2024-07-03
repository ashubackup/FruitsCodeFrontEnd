import React from "react";

import OwlCarousel from "react-owl-carousel";

const Vegetable =()=>{

    const options = {
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i className="bi bi-arrow-left"></i>',
            '<i className="bi bi-arrow-right"></i>'
        ],
        responsiveclassName: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:4
            }
        }
      };

    return(
        <>
         {/* <!-- Vesitable Shop Start--> */}
         <div className="container-fluid vegetable py-5">
                <div className="container py-5">
                    <h1 className="mb-0">Fresh Organic Vegetables</h1>
                    <OwlCarousel className="owl-theme vegetable-carousel justify-content-center mt-5" {...options}
                    >
                    {/* <div className="owl-carousel vegetable-carousel justify-content-center"> */}
                        <div className="border border-primary rounded position-relative vegetable-item">
                            <div className="vegetable-img">
                                <img src="/img/vegetable-item-6.jpg" className="img-fluid w-100 rounded-top" alt="" />
                            </div>
                            <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{ top: '10px', right: '10px' }}>Vegetable</div>
                            <div className="p-4 rounded-bottom">
                                <h4>Parsley</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                <div className="d-flex justify-content-between flex-lg-wrap">
                                    <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                    <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                                </div>
                            </div>
                        </div>
                    <div className="border border-primary rounded position-relative vesitable-item">
                        <div className="vesitable-img">
                            <img src="img/vegetable-item-1.jpg" className="img-fluid w-100 rounded-top" alt="" /> 
                        </div>
                        <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{top: '10px', right: '10px'}}>Vegetable</div>
                        <div className="p-4 rounded-bottom">
                            <h4>Parsely</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                                <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="border border-primary rounded position-relative vesitable-item">
                        <div className="vesitable-img">
                            <img src="img/vegetable-item-3.png" className="img-fluid w-100 rounded-top bg-light" alt="" />
                        </div>
                        <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{top: '10px', right: '10px'}}>Vegetable</div>
                        <div className="p-4 rounded-bottom">
                            <h4>Banana</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                                <p className="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
                                <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="border border-primary rounded position-relative vesitable-item">
                        <div className="vesitable-img">
                            <img src="img/vegetable-item-4.jpg" className="img-fluid w-100 rounded-top" alt="" />
                        </div>
                        <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{top: '10px', right: '10px'}}>Vegetable</div>
                        <div className="p-4 rounded-bottom">
                            <h4>Bell Papper</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                                <p className="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
                                <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="border border-primary rounded position-relative vesitable-item">
                        <div className="vesitable-img">
                            <img src="img/vegetable-item-5.jpg" className="img-fluid w-100 rounded-top" alt="" />
                        </div>
                        <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{top: '10px', right: '10px'}}>Vegetable</div>
                        <div className="p-4 rounded-bottom">
                            <h4>Potatoes</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                                <p className="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
                                <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="border border-primary rounded position-relative vesitable-item">
                        <div className="vesitable-img">
                            <img src="img/vegetable-item-6.jpg" className="img-fluid w-100 rounded-top" alt="" />
                        </div>
                        <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{top: '10px', right: '10px'}}>Vegetable</div>
                        <div className="p-4 rounded-bottom">
                            <h4>Parsely</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                                <p className="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
                                <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="border border-primary rounded position-relative vesitable-item">
                        <div className="vesitable-img">
                            <img src="img/vegetable-item-5.jpg" className="img-fluid w-100 rounded-top" alt="" />
                        </div>
                        <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{top: '10px', right: '10px'}}>Vegetable</div>
                        <div className="p-4 rounded-bottom">
                            <h4>Potatoes</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                                <p className="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
                                <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="border border-primary rounded position-relative vesitable-item">
                        <div className="vesitable-img">
                            <img src="img/vegetable-item-6.jpg" className="img-fluid w-100 rounded-top" alt="" />
                        </div>
                        <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{top: '10px', right: '10px'}}>Vegetable</div>
                        <div className="p-4 rounded-bottom">
                            <h4>Parsely</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                                <p className="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
                                <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                            </div>
                        </div>
                    </div>
                {/* </div> */}
                </OwlCarousel>
            </div>
        </div>
        {/* <!-- Vesitable Shop End --> */}
        </>
    );
};
export default Vegetable;