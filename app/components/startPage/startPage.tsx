"use client";

import React, { useEffect, useState } from "react";
import "./startPage.css";
import FirstSection from "../firstSection/firstSection";
import "../header/header.css";

const MainPage: React.FC = () => {
  return (
    <div className="homepage">
    <FirstSection/> 
      <section className="homepage__tours">
        <h2 className="homepage__section-title">Популярные туры</h2>
        <p className="homepage__section-text">Описание туров...</p>
      </section>

      <section className="homepage__guides">
        <h2 className="homepage__section-title">Наши Гиды</h2>
        <p className="homepage__section-text">Описание гидов...</p>
      </section>

      <section className="homepage__promotions">
        <h2 className="homepage__section-title">Акции и Скидки</h2>
        <p className="homepage__section-text">Описание акций...</p>
      </section>

      <section className="homepage__contacts">
        <h2 className="homepage__section-title">Контакты</h2>
        <p className="homepage__section-text">Как нас найти...</p>
      </section>
    </div>
  );
};

export default MainPage;
