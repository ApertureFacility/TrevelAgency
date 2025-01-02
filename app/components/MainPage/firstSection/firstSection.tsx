import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Header from "../headerComponent/header";
import "./firstSection.css";
import UnifiedSearch from "../../Search/search";

const images = [
  "/images/mount.jpg",
  "/images/mount2.jpg",
  "/images/mount3.jpg",
];

interface Trip {
  id: number;
  region: string;
  type: string;
  date: string;
  budget: number;
}

const FirstSection: React.FC = () => {
  const [filters, setFilters] = useState({
    region: "",
    type: "",
    startDate: "",
    endDate: "",
    budgetMin: "",
    budgetMax: "",
  });

  const [trips, setTrips] = useState<Trip[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);



  const handleSearch = async () => {
    setLoading(true);
    setError(null);

    try {
      const queryParams = new URLSearchParams();

      if (filters.region) queryParams.append("region", filters.region);
      if (filters.type) queryParams.append("type", filters.type);
      if (filters.startDate) queryParams.append("startDate", filters.startDate);
      if (filters.endDate) queryParams.append("endDate", filters.endDate);
      if (filters.budgetMin) queryParams.append("budgetMin", filters.budgetMin);
      if (filters.budgetMax) queryParams.append("budgetMax", filters.budgetMax);

      const response = await fetch(`/api/trips?${queryParams.toString()}`);

      if (!response.ok) {
        throw new Error("Ошибка при загрузке данных");
      }

      const data: Trip[] = await response.json();
      setTrips(data);
    } catch (err: any) {
      setError(err.message || "Произошла ошибка");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="homepage__hero">
      <Header />
      <div className="homepage__hero-content">
        <div className="homepage__hero_text">
          <h1 className="homepage__hero-title">
            Добро пожаловать в Турклуб Восхождение!
          </h1>
         <UnifiedSearch/>
          <p className="homepage__hero-text">
            Ваши незабываемые путешествия начинаются здесь.
          </p>
        </div>
      </div>

      {/* Слайдер */}
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
          ></SwiperSlide>
        ))}
      </Swiper>

  
    </section>
  );
};

export default FirstSection;
