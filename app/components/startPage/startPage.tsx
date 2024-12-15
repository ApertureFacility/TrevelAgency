"use client";

import React, { useEffect, useState } from "react";
import "./startPage.css";
import FirstSection from "../firstSection/firstSection";
import "../header/header.css";
import TestimonialsPage from "@/app/feedback/page";
import TripsFilter from "../ToursSection/TripsFilter";

const MainPage: React.FC = () => {
  return (
    <div className="homepage">
    <FirstSection/> 
      <section className="homepage__tours">
<TripsFilter/>
      </section>

      <section className="homepage__guides">
       <TestimonialsPage/>
      </section>
      <section className="homepage__promotions">
      </section>

      <section className="homepage__contacts">
        <h2 className="homepage__section-title">Контакты</h2>
        <p className="homepage__section-text">Как нас найти...</p>
      </section>
    </div>
  );
};

export default MainPage;
