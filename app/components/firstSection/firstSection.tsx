import React, { useEffect, useState } from "react";
import Header from "../header/header";
import '@/app/components/firstSection/firstSection.css'



const firsSection: React.FC = () => {
    return (
       <section className="homepage__hero">
       <Header />
       <div className="homepage__hero-content">
       <div className="homepage__hero_text">
        <h1 className="homepage__hero-title">Добро пожаловать в Турклуб Восхождение!</h1>
        <div className="homepage__search">
        <input
          type="text"
          className="homepage__search-input"
          placeholder="Введите название тура или места"
        />
        <button className="homepage__search-button">Найти</button>
      </div>
        <p className="homepage__hero-text">Ваши незабываемые путешествия начинаются здесь.</p>
       </div>
     
    </div>
  </section>
    );
  };
  
  export default firsSection;
  