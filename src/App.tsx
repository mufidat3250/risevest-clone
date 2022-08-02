import { useState } from "react";
import logo from "./logo.svg";
import { Route, Link, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import Products from "./pages/Products";
import InvestmentClub from "./pages/InvestmentClub";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import FAQs from "./pages/FAQs";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Stocks from "./pages/Stocks";
import RealEstate from "./pages/RealEstate";
import FixedIncome from "./pages/FixedIncome";
import BuildWealth from "./pages/BuildWealth";

function App() {

  return (
    <div>
     
     <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="products" element={<Products />} />
        <Route path="investmentClub" element={<InvestmentClub />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="faqs" element={<FAQs />} />
        <Route path="blog" element={<Blog />} /> */}


        {/* <Route path='product' >
        <Route index element= {<Stocks/>} />
        <Route path = 'real-estate' element={<RealEstate/>}/>
        <Route path = 'fixed-income' element={<FixedIncome/>}/>
        <Route path = 'build-wealth' element={<BuildWealth/>}/>

        </Route> */}

      </Routes>
     
    </div>
  );
}

export default App;
