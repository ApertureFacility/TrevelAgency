import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Header from "../header/header";
import "@/app/components/firstSection/firstSection.css";

const images = [
  "/images/mount.jpg",
  "/images/mount2.jpg",
  "/images/mount3.jpg",
];

const FirstSection: React.FC = () => {

  return (
    <section
      className="homepage__hero"
    >
      <Header />
      <div className="homepage__hero-content">
        <div className="homepage__hero_text">
          <h1 className="homepage__hero-title">
            Добро пожаловать в Турклуб Восхождение!
          </h1>
          <div className="homepage__search">
            <input
              type="text"
              className="homepage__search-input"
              placeholder="Введите название тура или места"
            />
            <button className="homepage__search-button">Найти</button>
          </div>
          <p className="homepage__hero-text">
            Ваши незабываемые путешествия начинаются здесь.
          </p>
        </div>
      </div>
      <Swiper
  modules={[Navigation, Pagination, Autoplay]}
  spaceBetween={0}
  slidesPerView={1}
  autoplay={{ delay: 7000, disableOnInteraction: false }}
  loop={true}
  pagination={{ clickable: true }}
  navigation
  className="background-swiper"
>
  {images.map((image, index) => (
    <SwiperSlide
      key={index}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
        width: "100%",
      }}
    >

    </SwiperSlide>
  ))}
</Swiper>

    </section>
  );
};

export default FirstSection;
