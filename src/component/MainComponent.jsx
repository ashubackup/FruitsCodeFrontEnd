import React from "react";
import Navbar from "./Navbar.jsx";
import ModalSearch from "../component/ModalSearch.jsx";
import Hero from "../component/Hero.jsx";
import FeaturesSection from "../component/FeaturesSection.jsx";
import Fruits from "../component/Fruits.jsx";
import Feature2 from "../component/Feature2.jsx";
import Vegetable from "../component/Vegetable.jsx";
import Banners from "../component/Banners.jsx";
import Bestsaler from "../component/Bestsaler.jsx";
import Fact from "../component/Fact.jsx";
import Tastimonial from "./ClientPage.jsx";
import Footer from "../component/Footer.jsx";
import Copyright from "../component/Copyright.jsx";

const MainComponent = () =>{
   return(
    <>
            <Navbar />
            <ModalSearch />
            <Hero />
            <FeaturesSection />
            <Fruits />
            <Feature2 />
            <Vegetable />
            <Banners />
            <Bestsaler />
            <Fact />
            <Tastimonial />
            <Footer />
            <Copyright />
    </>
   )
};
export default MainComponent;