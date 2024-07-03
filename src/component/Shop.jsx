// import React, { useEffect, useState } from "react";
// import Navbar from "../component/Navbar";
// import PriceRange from "../component/PriceRange";
// import SinglePage from "../component/SinglePage";
// import Footer from "../component/Footer";
// import Copyright from "../component/Copyright";
// import FeaturedProducts from "../component/FeaturedProducts";
// import BannerComponent from "../component/BannerComponent";
// // import ModalSearch from "../component/ModalSearch";

// const Shop = () => {

//     const [fruits, setFruits] = useState([]);
//     const [loading, setLoading] = useState(true); // Add loading state
//     setLoading(false); // Set loading to false when data is fetched


//     useEffect(() => {
//         // Fetch data from the JSON file
//         fetch('shop.json')
//             .then(response => response.json())
//             .then(data => {
//                 setFruits(data);
//                 setLoading(false); // Set loading to false when data is fetched
//             })
//             .catch(error => {
//                 console.error('Error fetching data:', error);
//                 setLoading(false); // Set loading to false even if there's an error
//             });
//     }, []);

//     return (
//         <>


//             {loading ? (
//                 // Spinner Start
//                 <div id="spinner" className="show w-100 vh-100 bg-white position-fixed translate-middle top-50 start-50 d-flex align-items-center justify-content-center">
//                     <div className="spinner-grow text-primary" role="status"></div>
//                 </div>
//                 // Spinner End
//             ) : (
//                 <>
//                     <Navbar />

//                     {/* <!-- Single Page Header start --> */}
//                     <SinglePage />
//                     {/* <!-- Single Page Header End --> */}


//                     {/* <!-- Fruits Shop Start--> */}
//                     <div class="container-fluid fruite py-5">
//                         <div class="container py-5">
//                             <h1 class="mb-4">Fresh fruits shop</h1>
//                             <div class="row g-4">
//                                 <div class="col-lg-12">
//                                     <div class="row g-4">
//                                         <div class="col-xl-3">
//                                             <div class="input-group w-100 mx-auto d-flex">
//                                                 <input type="search" class="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1" />
//                                                 <span id="search-icon-1" class="input-group-text p-3"><i class="fa fa-search"></i></span>
//                                             </div>
//                                         </div>
//                                         <div class="col-6"></div>
//                                         <div class="col-xl-3">
//                                             <div class="bg-light ps-3 py-3 rounded d-flex justify-content-between mb-4">
//                                                 <label for="fruits">Default Sorting:</label>
//                                                 <select id="fruits" name="fruitlist" class="border-0 form-select-sm bg-light me-3" form="fruitform">
//                                                     <option value="volvo">Nothing</option>
//                                                     <option value="saab">Popularity</option>
//                                                     <option value="opel">Organic</option>
//                                                     <option value="audi">Fantastic</option>
//                                                 </select>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div class="row g-4">
//                                         <div class="col-lg-3">
//                                             <div class="row g-4">
//                                                 <div class="col-lg-12">
//                                                     <div class="mb-3">
//                                                         <h4>Categories</h4>
//                                                         <ul class="list-unstyled fruite-categorie">
//                                                             <li>
//                                                                 <div class="d-flex justify-content-between fruite-name">
//                                                                     <a href="#"><i class="fas fa-apple-alt me-2"></i>Apples</a>
//                                                                     <span>(3)</span>
//                                                                 </div>
//                                                             </li>
//                                                             <li>
//                                                                 <div class="d-flex justify-content-between fruite-name">
//                                                                     <a href="#"><i class="fas fa-apple-alt me-2"></i>Oranges</a>
//                                                                     <span>(5)</span>
//                                                                 </div>
//                                                             </li>
//                                                             <li>
//                                                                 <div class="d-flex justify-content-between fruite-name">
//                                                                     <a href="#"><i class="fas fa-apple-alt me-2"></i>Strawbery</a>
//                                                                     <span>(2)</span>
//                                                                 </div>
//                                                             </li>
//                                                             <li>
//                                                                 <div class="d-flex justify-content-between fruite-name">
//                                                                     <a href="#"><i class="fas fa-apple-alt me-2"></i>Banana</a>
//                                                                     <span>(8)</span>
//                                                                 </div>
//                                                             </li>
//                                                             <li>
//                                                                 <div class="d-flex justify-content-between fruite-name">
//                                                                     <a href="#"><i class="fas fa-apple-alt me-2"></i>Pumpkin</a>
//                                                                     <span>(5)</span>
//                                                                 </div>
//                                                             </li>
//                                                         </ul>
//                                                     </div>
//                                                 </div>
//                                                 {/* Price Range Component Start */}
//                                                 <PriceRange />
//                                                 {/* Price Range Component End */}
//                                                 <div class="col-lg-12">
//                                                     <div class="mb-3">
//                                                         <h4>Additional</h4>
//                                                         <div class="mb-2">
//                                                             <input type="radio" class="me-2" id="Categories-1" name="Categories-1" value="Beverages" />
//                                                             <label for="Categories-1"> Organic</label>
//                                                         </div>
//                                                         <div class="mb-2">
//                                                             <input type="radio" class="me-2" id="Categories-2" name="Categories-1" value="Beverages" />
//                                                             <label for="Categories-2"> Fresh</label>
//                                                         </div>
//                                                         <div class="mb-2">
//                                                             <input type="radio" class="me-2" id="Categories-3" name="Categories-1" value="Beverages" />
//                                                             <label for="Categories-3"> Sales</label>
//                                                         </div>
//                                                         <div class="mb-2">
//                                                             <input type="radio" class="me-2" id="Categories-4" name="Categories-1" value="Beverages" />
//                                                             <label for="Categories-4"> Discount</label>
//                                                         </div>
//                                                         <div class="mb-2">
//                                                             <input type="radio" class="me-2" id="Categories-5" name="Categories-1" value="Beverages" />
//                                                             <label for="Categories-5"> Expired</label>
//                                                         </div>
//                                                     </div>
//                                                 </div>

//                                                 {/* Feartured Product Start  */}
//                                                 <FeaturedProducts />
//                                                 {/* Feartured Product End  */}
//                                                 {/* Banner Component start  */}

//                                                 <BannerComponent />

//                                                 {/* Banner Component End  */}
//                                             </div>
//                                         </div>
//                                         <div class="col-lg-9">
//                                             <div class="row g-4 justify-content-center">
//                                                 {fruits.map((fruit) =>
//                                                 (
//                                                     <div key={fruit.id} className="col-md-6 col-lg-6 col-xl-4">
//                                                         <div className="rounded position-relative fruite-item">
//                                                             <div className="fruite-img">
//                                                                 <img src={fruit.image} className="img-fluid w-100 rounded-top" alt={fruit.name} />
//                                                             </div>
//                                                             <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{ top: '10px', left: '10px' }}>Fruits</div>
//                                                             <div className="p-4 border border-secondary border-top-0 rounded-bottom">
//                                                                 <h4>{fruit.name}</h4>
//                                                                 <p>{fruit.description}</p>
//                                                                 <div className="d-flex justify-content-between flex-lg-wrap">
//                                                                     <p className="text-dark fs-5 fw-bold mb-0">{fruit.price}</p>
//                                                                     <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 ))}
//                                                 <div class="col-12">
//                                                     <div class="pagination d-flex justify-content-center mt-5">
//                                                         <a href="#" class="rounded">&laquo;</a>
//                                                         <a href="#" class="active rounded">1</a>
//                                                         <a href="#" class="rounded">2</a>
//                                                         <a href="#" class="rounded">3</a>
//                                                         <a href="#" class="rounded">4</a>
//                                                         <a href="#" class="rounded">5</a>
//                                                         <a href="#" class="rounded">6</a>
//                                                         <a href="#" class="rounded">&raquo;</a>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     {/* <!-- Fruits Shop End--> */}


//                     {/* <!-- Footer Start --> */}
//                     <Footer />
//                     {/* <!-- Footer End --> */}

//                     {/* <!-- Copyright Start --> */}
//                     <Copyright />

//                     {/* <!-- Copyright End --> */}
//                 </>
//             )}

//         </>
//     );
// }
// export default Shop;


import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import PriceRange from "../component/PriceRange";
import SinglePage from "../component/SinglePage";
import Footer from "../component/Footer";
import Copyright from "../component/Copyright";
import FeaturedProducts from "../component/FeaturedProducts";
import BannerComponent from "../component/BannerComponent";
// import ModalSearch from "../component/ModalSearch";

const Shop = () => {
    const [fruits, setFruits] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        console.log("Fetching data from shop.json");
        fetch('/shop.json')
            .then(response => {
                console.log("Response received:", response);
                return response.json();
            })
            .then(data => {
                console.log("Data fetched:", data);
                setFruits(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);
    

    return (
        <>
            {loading ? (
                // Spinner Start
                <div id="spinner" className="show w-100 vh-100 bg-white position-fixed translate-middle top-50 start-50 d-flex align-items-center justify-content-center">
                    <div className="spinner-grow text-primary" role="status"></div>
                </div>
                // Spinner End
            ) : (
                <>
                    <Navbar />

                    {/* <!-- Single Page Header start --> */}
                    <SinglePage />
                    {/* <!-- Single Page Header End --> */}

                    {/* <!-- Fruits Shop Start--> */}
                    <div className="container-fluid fruite py-5">
                        <div className="container py-5">
                            <h1 className="mb-4">Fresh fruits shop</h1>
                            <div className="row g-4">
                                <div className="col-lg-12">
                                    <div className="row g-4">
                                        <div className="col-xl-3">
                                            <div className="input-group w-100 mx-auto d-flex">
                                                <input type="search" className="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1" />
                                                <span id="search-icon-1" className="input-group-text p-3"><i className="fa fa-search"></i></span>
                                            </div>
                                        </div>
                                        <div className="col-6"></div>
                                        <div className="col-xl-3">
                                            <div className="bg-light ps-3 py-3 rounded d-flex justify-content-between mb-4">
                                                <label htmlFor="fruits">Default Sorting:</label>
                                                <select id="fruits" name="fruitlist" className="border-0 form-select-sm bg-light me-3" form="fruitform">
                                                    <option value="volvo">Nothing</option>
                                                    <option value="saab">Popularity</option>
                                                    <option value="opel">Organic</option>
                                                    <option value="audi">Fantastic</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row g-4">
                                        <div className="col-lg-3">
                                            <div className="row g-4">
                                                <div className="col-lg-12">
                                                    <div className="mb-3">
                                                        <h4>Categories</h4>
                                                        <ul className="list-unstyled fruite-categorie">
                                                            <li>
                                                                <div className="d-flex justify-content-between fruite-name">
                                                                    <a href="#"><i className="fas fa-apple-alt me-2"></i>Apples</a>
                                                                    <span>(3)</span>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="d-flex justify-content-between fruite-name">
                                                                    <a href="#"><i className="fas fa-apple-alt me-2"></i>Oranges</a>
                                                                    <span>(5)</span>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="d-flex justify-content-between fruite-name">
                                                                    <a href="#"><i className="fas fa-apple-alt me-2"></i>Strawbery</a>
                                                                    <span>(2)</span>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="d-flex justify-content-between fruite-name">
                                                                    <a href="#"><i className="fas fa-apple-alt me-2"></i>Banana</a>
                                                                    <span>(8)</span>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="d-flex justify-content-between fruite-name">
                                                                    <a href="#"><i className="fas fa-apple-alt me-2"></i>Pumpkin</a>
                                                                    <span>(5)</span>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* Price Range Component Start */}
                                                <PriceRange />
                                                {/* Price Range Component End */}
                                                <div className="col-lg-12">
                                                    <div className="mb-3">
                                                        <h4>Additional</h4>
                                                        <div className="mb-2">
                                                            <input type="radio" className="me-2" id="Categories-1" name="Categories-1" value="Beverages" />
                                                            <label htmlFor="Categories-1"> Organic</label>
                                                        </div>
                                                        <div className="mb-2">
                                                            <input type="radio" className="me-2" id="Categories-2" name="Categories-1" value="Beverages" />
                                                            <label htmlFor="Categories-2"> Fresh</label>
                                                        </div>
                                                        <div className="mb-2">
                                                            <input type="radio" className="me-2" id="Categories-3" name="Categories-1" value="Beverages" />
                                                            <label htmlFor="Categories-3"> Sales</label>
                                                        </div>
                                                        <div className="mb-2">
                                                            <input type="radio" className="me-2" id="Categories-4" name="Categories-1" value="Beverages" />
                                                            <label htmlFor="Categories-4"> Discount</label>
                                                        </div>
                                                        <div className="mb-2">
                                                            <input type="radio" className="me-2" id="Categories-5" name="Categories-1" value="Beverages" />
                                                            <label htmlFor="Categories-5"> Expired</label>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Featured Product Start  */}
                                                <FeaturedProducts />
                                                {/* Featured Product End  */}
                                                {/* Banner Component start  */}

                                                <BannerComponent />

                                                {/* Banner Component End  */}
                                            </div>
                                        </div>
                                        <div className="col-lg-9">
                                            <div className="row g-4 justify-content-center">
                                                {fruits.map((fruit) =>
                                                (
                                                    <div key={fruit.id} className="col-md-6 col-lg-6 col-xl-4">
                                                        <div className="rounded position-relative fruite-item">
                                                            <div className="fruite-img">
                                                                <img src={fruit.image} className="img-fluid w-100 rounded-top" alt={fruit.name} />
                                                            </div>
                                                            <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{ top: '10px', left: '10px' }}>Fruits</div>
                                                            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                                <h4>{fruit.name}</h4>
                                                                <p>{fruit.description}</p>
                                                                <div className="d-flex justify-content-between flex-lg-wrap">
                                                                    <p className="text-dark fs-5 fw-bold mb-0">{fruit.price}</p>
                                                                    <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                                <div className="col-12">
                                                    <div className="pagination d-flex justify-content-center mt-5">
                                                        <a href="#" className="rounded">&laquo;</a>
                                                        <a href="#" className="active rounded">1</a>
                                                        <a href="#" className="rounded">2</a>
                                                        <a href="#" className="rounded">3</a>
                                                        <a href="#" className="rounded">4</a>
                                                        <a href="#" className="rounded">5</a>
                                                        <a href="#" className="rounded">6</a>
                                                        <a href="#" className="rounded">&raquo;</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Fruits Shop End--> */}

                    {/* <!-- Footer Start --> */}
                    <Footer />
                    {/* <!-- Footer End --> */}

                    {/* <!-- Copyright Start --> */}
                    <Copyright />
                    {/* <!-- Copyright End --> */}
                </>
            )}
        </>
    );
}
export default Shop;
