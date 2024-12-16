"use client";

import React, { useEffect, useState } from "react";
import "./startPage.css";
import "../header/header.css";
import TripsFilter from "../ToursSection/TripsFilter";
import TravelBlog from "../Blog/Blog";
import Footer from "../footer/footer";
import FirstSection from "../firstSection/firstSection";
import ContactForm from "../Contacts/Contacts";
import TestimonialsPage from "@/app/Feedback/page";
import ActivityCards from "./ActivivtyCards";
import MapComponent from "./map";


const MainPage: React.FC = () => {
  return (
    <div className="homepage">
    <FirstSection/> 
      <section className="homepage__tours">
        
      <TripsFilter/>
      <MapComponent />
      </section>
      <ActivityCards/>
      <section className="homepage__promotions">
      <TravelBlog/>
      
      </section>
      <section className="homepage__guides">
      <TestimonialsPage/>
      </section>
      <section className="homepage__contacts">
     <ContactForm/>
      </section>
      <Footer/>
    </div>

  );
};

export default MainPage;
