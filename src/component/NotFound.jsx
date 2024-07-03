import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import ModalSearch from "../component/ModalSearch";
import SinglePage from "../component/SinglePage";
import Footer from "../component/Footer";
import Copyright from "../component/Copyright";

const NotFound=()=>{

    const shopName="404 Error"
    const [loading, setLoading] = useState(true); // Add loading state

       // Simulate data fetching or component preparation
       useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false); // Set loading to false after 2 seconds
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return(
        <>
{loading && (
                <div id="spinner" className="show w-100 vh-100 bg-white position-fixed translate-middle top-50 start-50 d-flex align-items-center justify-content-center">
                    <div className="spinner-grow text-primary" role="status"></div>
                </div>
            )}
            <Navbar />
            <ModalSearch />
            {!loading && <SinglePage name={shopName} />}
            {/* <!-- 404 Start --> */}
        <div className="container-fluid py-5">
            <div className="container py-5 text-center">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <i className="bi bi-exclamation-triangle display-1 text-secondary"></i>
                        <h1 className="display-1">404</h1>
                        <h1 className="mb-4">Page Not Found</h1>
                        <p className="mb-4">We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>
                        <a className="btn border-secondary rounded-pill py-3 px-5" href="/">Go Back To Home</a>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- 404 End --> */}
            <Footer />
            <Copyright />
        </>
    );
};
export default NotFound;