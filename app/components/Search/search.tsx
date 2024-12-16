"use client"

import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Для навигации по URL
import "./search.css"; // Добавим стили для объединённого поиска

const UnifiedSearch: React.FC = () => {
  const navigate = useNavigate();

  // Состояние для полей формы
  const [filters, setFilters] = useState({
    region: "",
    dateFrom: "",
    dateTo: "",
  });

  // Обновление состояния при изменении полей
  const handleChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  // Обработчик клика на кнопку поиска
  const handleSearch = () => {
    const queryParams = new URLSearchParams();

    // Добавляем параметры в URL, если они заполнены
    if (filters.region) queryParams.append("region", filters.region);
    if (filters.dateFrom) queryParams.append("datefrom", filters.dateFrom);
    if (filters.dateTo) queryParams.append("dateto", filters.dateTo);

    // Формируем целевой URL
    const targetUrl = `/search/${filters.region || "any"}/?${queryParams.toString()}`;

    // Навигация по целевому URL
    navigate(targetUrl);
  };

  return (
    <div className="unified-search">
          <input
        type="text"
        placeholder="Куда"
        className="unified-search__input"
        value={filters.region}
        onChange={(e) => handleChange("region", e.target.value)}
      />
      <input
        type="text"
        placeholder="Вид активности"
        className="unified-search__input"
        value={filters.region}
        onChange={(e) => handleChange("region", e.target.value)}
      />
      <input
        type="date"
        className="unified-search__input"
        value={filters.dateFrom}
        onChange={(e) => handleChange("dateFrom", e.target.value)}
      />

      <input
        type="date"
        className="unified-search__input"
        value={filters.dateTo}
        onChange={(e) => handleChange("dateTo", e.target.value)}
      />

      <button className="unified-search__button" onClick={handleSearch}>
        Искать
      </button>
    </div>
  );
};

export default UnifiedSearch;

