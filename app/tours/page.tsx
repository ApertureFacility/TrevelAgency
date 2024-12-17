"use client"

import { useEffect, useState } from "react";

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
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h1>Туры</h1>
      <ul>
        {tours.map((tour) => (
          <li key={tour.id} style={{ marginBottom: "20px" }}>
            <h2>{tour.title}</h2>
            <p>{tour.description}</p>
            <p>Цена: ${tour.price}</p>
            <p>Место: {tour.location}</p>
            <img
              src={tour.images}
              alt={tour.title}
              style={{ width: "300px", borderRadius: "8px" }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tours;
