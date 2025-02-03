"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import "./MainPage.css";
import "./headerComponent/header.css";
import TravelBlog from "./BlogSection/BlogSection";
import Footer from "./footerComponent/footer";
import FirstSection from "./firstSection/firstSection";
import ContactForm from "./ContactsSection/ContactsSection";
import TestimonialsPage from "@/app/components/MainPage/feedbackSection/feedbackSection";
import ActivityCards from "./ActivityComponent/ActivivtyCards";

const MainPage: React.FC = () => {
  const pathname = usePathname(); // Получаем текущий путь

  useEffect(() => {
    window.scrollTo(0, 0); // Прокрутка страницы вверх при изменении пути
  }, [pathname]); // useEffect срабатывает при изменении пути

  return (
    <div className="homepage">
      <FirstSection />
      <section className="homepage__tours"></section>
      <ActivityCards />
      <section className="homepage__promotions">
        <TravelBlog />
      </section>
      <section className="homepage__guides">
        <TestimonialsPage />
      </section>
      <section className="homepage__contacts">
        <ContactForm />
        <Footer />
      </section>
    </div>
  );
};

export default MainPage;
