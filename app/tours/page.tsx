"use client";

import { useEffect, useState } from "react";
import "./Tours.css"; // Подключаем обычный CSS файл

// Интерфейс для данных тура
interface Tour {
  id: number;
  title: string;
  description: string;
  price: number;
  location: string;
  images: string;
}

const Tours = () => {
  const [tours, setTours] = useState<Tour[]>([]); // Состояние для хранения данных туров
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Запрос данных с сервера при монтировании компонента
  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await fetch("/api/tours");
        if (!response.ok) throw new Error("Ошибка загрузки данных");

        const data: Tour[] = await response.json(); // Преобразуем ответ в JSON
        console.log(data)
        setTours(data); // Сохраняем данные в состоянии
      } catch (err) {
        setError("Не удалось загрузить данные туров");
        console.error(err);
      } finally {
        setLoading(false); // Снимаем индикатор загрузки
      }
    };

    fetchTours();
  }, []);

  // Отображаем разные состояния
  if (loading) return <p>Загрузка данных...</p>;
  if (error) return <p className="tours__error">{error}</p>;

  return (
    <div className="tours">
      <h1 className="tours__heading">Туры</h1>
      <div className="tours__card-container">
        {tours.map((tour) => (
          <div key={tour.id} className="tours__card">
            <img
              src={tour.images}
              alt={tour.title}
              className="tours__image"
            />
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
