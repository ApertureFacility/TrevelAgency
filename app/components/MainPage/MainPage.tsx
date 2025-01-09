"use client";

import React from "react";
import "./MainPage.css";
import "./headerComponent/header.css";
import TravelBlog from "./BlogSection/BlogSection";
import Footer from "./footerComponent/footer";
import FirstSection from "./firstSection/firstSection";
import ContactForm from "./ContactsSection/ContactsSection";
import TestimonialsPage from "@/app/components/MainPage/feedbackSection/feedbackSection";
import ActivityCards from "./ActivityComponent/ActivivtyCards";
import dynamic from 'next/dynamic';

const MainPage: React.FC = () => {
  return (
    <div className="homepage">
    <FirstSection/> 
      <section className="homepage__tours">
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
