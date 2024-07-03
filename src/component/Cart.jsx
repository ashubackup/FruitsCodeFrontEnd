import React, { useState, useEffect } from "react";
import SinglePage from "../component/SinglePage";
import Navbar from "../component/Navbar";
import ModalSearch from "../component/ModalSearch";
import CartCode from "../component/CartCode";
import Footer from "../component/Footer";
import Copyright from "../component/Copyright";

const Cart = () => {
    const [loading, setLoading] = useState(true); // Add loading state
    const shopName = "Cart";

    // Simulate data fetching or component preparation
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false); // Set loading to false after 2 seconds
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading && (
                <div id="spinner" className="show w-100 vh-100 bg-white position-fixed translate-middle top-50 start-50 d-flex align-items-center justify-content-center">
                    <div className="spinner-grow text-primary" role="status"></div>
                </div>
            )}
            <Navbar />
            <ModalSearch />
            {!loading && <SinglePage name={shopName} />}
            <CartCode />
            <Footer />
            <Copyright />
        </>
    );
};

export default Cart;
