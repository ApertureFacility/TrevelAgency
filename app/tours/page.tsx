"use client";

import { useEffect, useState } from "react";
import "./Tours.css"; 


interface Tour {
  id: number;
  title: string;
  description: string;
  price: number;
  location: string;
  images: { url: string }[];  
}


const Tours = () => {
  const [tours, setTours] = useState<Tour[]>([]); 
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await fetch("/api/tours");
        if (!response.ok) throw new Error("Ошибка загрузки данных");

        const data: Tour[] = await response.json(); 
        console.log(data)
        setTours(data);
      } catch (err) {
        setError("Не удалось загрузить данные туров");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, []);


  if (loading) return <p>Загрузка данных...</p>;
  if (error) return <p className="tours__error">{error}</p>;

  return (
    <div className="tours">
      <h1 className="tours__heading">Туры</h1>
      <div className="tours__card-container">
        {tours.map((tour) => (
          <div key={tour.id} className="tours__card">
           {Array.isArray(tour.images) && tour.images.length > 0 && (
  <img src={tour.images[0].url} alt={tour.title} className="tours__image" />
)}
            <div className="tours__card-content">
              <h2 className="tours__card-title">{tour.title}</h2>
              <p className="tours__description">{tour.description}</p>
              <p className="tours__price">Цена: ${tour.price}</p>
              <p className="tours__location">Место: {tour.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tours;
