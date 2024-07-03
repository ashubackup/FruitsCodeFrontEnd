import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import ModalSearch from "../component/ModalSearch";
import SinglePage from "../component/SinglePage";
import CheckoutCode from "../component/CheckoutCode";

const Checkout=()=>{

    const name = "Checkout"
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
        <SinglePage name={name} />
        <CheckoutCode />

        </>
    );
};
export default Checkout;