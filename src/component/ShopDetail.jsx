import React from "react";
import Navbar from "../component/Navbar";
import ModalSearch from "../component/ModalSearch";
import SinglePage from "../component/SinglePage";
import SingleProduct from "../component/SingleProduct";
import Footer from "../component/Footer";
import Copyright from "../component/Copyright";




const ShopDetail=()=>{
    return(
        <>
        <Navbar />
        <ModalSearch />
        <SinglePage />
        <SingleProduct />
        <Footer />
        <Copyright />
        </>
    );
};
export default ShopDetail;