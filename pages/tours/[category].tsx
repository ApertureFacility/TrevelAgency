"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import "./categories.css"; 


interface Tour {
  id: number;
  title: string;
  description: string;
  price: number;
  location: string;
  images: { url: string }[];
}

const CategoryTours = () => {
  const router = useRouter();
  const { category } = router.query;

  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!category) {
      setLoading(false);
      return;
    }

    const fetchTours = async () => {
      try {
        const response = await fetch(`/api/tours?category=${category}`);
        if (!response.ok) throw new Error("Ошибка загрузки данных");

        const data: Tour[] = await response.json();
        if (data.length === 0) {
          setError("Нет доступных туров в этой категории");
        } else {
          setTours(data);
        }
      } catch (err) {
        setError("Не удалось загрузить туры");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, [category]);

  if (loading) return <p>Загрузка данных...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="category-container">
      <h1 className="category-heading">Туры в категории: {category}</h1>
      <div className="tours-grid">
        {tours.length > 0 ? (
          tours.map((tour) => (
            <div key={tour.id} className="tour-card">
              {tour.images.length > 0 && (
                <img src={tour.images[0].url} alt={tour.title} className="tour-image" />
              )}
              <div className="tour-content">
                <h2 className="tour-title">{tour.title}</h2>
                <p className="tour-description">{tour.description}</p>
                <p className="tour-info">Цена: ${tour.price}</p>
                <p className="tour-info">Локация: {tour.location}</p>
              </div>
            </div>
          ))
        ) : (
          <p>Нет доступных туров</p>
        )}
      </div>
    </div>
  );
};

export default CategoryTours;