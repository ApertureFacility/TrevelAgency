// app/components/search/[region]/page.tsx
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation"; // Получаем параметры поиска

interface CardData {
  id: number;
  title: string;
  description: string;
  image: string;
}

const SearchResultsPage = ({ params }: { params: { region: string } }) => {
  const searchParams = useSearchParams(); // Получаем параметры поиска
  const [cards, setCards] = useState<CardData[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchCards = async () => {
    setLoading(true);

    // Получаем параметры из URL
    const region = params.region;
    const dateFrom = searchParams?.get("datefrom");
    const dateTo = searchParams?.get("dateto");
    const activity = searchParams?.get("activity");

    try {
      // Формируем URL для API с учётом наличия фильтров
      let apiUrl = `/api/cards?`; // URL вашего API
      if (region !== "any") apiUrl += `region=${region}&`;
      if (dateFrom) apiUrl += `dateFrom=${dateFrom}&`;
      if (dateTo) apiUrl += `dateTo=${dateTo}&`;
      if (activity) apiUrl += `activity=${activity}&`;

      // Запрашиваем данные
      const response = await fetch(apiUrl);
      const data = await response.json();

      setCards(data); // Обновляем состояние карточек
    } catch (error) {
      console.error("Ошибка при загрузке данных:", error);
      setCards([]); // Если ошибка, очищаем карточки
    } finally {
      setLoading(false);
    }
  };

  // Загружаем карточки при загрузке страницы или изменении фильтров
  useEffect(() => {
    fetchCards();
  }, [params.region, searchParams]);

  return (
    <div>
      <h1>Результаты поиска</h1>
      {loading && <p>Загрузка...</p>}
      {!loading && cards.length === 0 && <p>Нет данных для отображения</p>}

      <div className="cards-container">
        {cards.map((card) => (
          <div key={card.id} className="card">
            <img src={card.image} alt={card.title} />
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResultsPage;
