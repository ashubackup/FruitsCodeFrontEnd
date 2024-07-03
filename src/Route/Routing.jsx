import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainComponent from "../component/MainComponent";
import Shop from "../component/Shop";
import ShopDetail from "../component/ShopDetail";
import Contact from "../component/Contact";
import Cart from "../component/Cart";
import Checkout from "../component/Checkout";
import TastimonialPage from "../component/TastimonialPage";
import NotFound from "../component/NotFound";

const Routing = () => {
    return (
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<MainComponent/>} exact={true} />
        <Route path="/shop" element={<Shop/>} exact={true} />
        <Route path="/shopDetail" element={<ShopDetail/>} exact={true} />
        <Route path="/contact" element={<Contact/>} exact={true} />
        <Route path="/cart" element={<Cart />} exact={true} />
        <Route path="/checkout" element={<Checkout />} exact={true} />
        <Route path="/testimonial" element={<TastimonialPage />} exact={true} />
        <Route path="/404" element={<NotFound />} exact={true} />

            </Routes>
            </BrowserRouter>
    );
};

export default Routing;
