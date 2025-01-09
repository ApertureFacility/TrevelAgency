"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import "./search.css";

const UnifiedSearch: React.FC = () => {
  const router = useRouter();
  const regionDropdownRef = useRef<HTMLDivElement | null>(null); // Ссылка на dropdown регионов
  const activityDropdownRef = useRef<HTMLDivElement | null>(null); // Ссылка на dropdown активностей

  const [filters, setFilters] = useState({
    region: [] as string[], // список выбранных регионов
    activity: [] as string[], // список выбранных активностей
    dateFrom: "",
    dateTo: "",
  });

  const [isRegionDropdownOpen, setIsRegionDropdownOpen] = useState(false);
  const [isActivityDropdownOpen, setIsActivityDropdownOpen] = useState(false);

  const activities = [
    "Пеший туризм",
    "Велоспорт",
    "Каякинг",
    "Скалодром",
    "Рыбалка",
    "Кемпинг",
  ];

  const regions = [
    "Все регионы", "Россия", "Эльбрус", "Кавказ", "Камчатка", "Азия", "Африка", 
    "Армения", "Южная Америка", "Абхазия", "Адыгея", "Алтай", "Архыз", "Байкал",
    "Выборг", "Грузия", "Дагестан", "Европа", "Египет", "Казахстан", "Казбек",
    "Калининград", "Карелия и Ленобласть", "Килиманджаро", "Киргизия", "Китай",
    "Крым", "Ладожские шхеры", "Ликийская тропа", "Марокко", "Монголия",
    "Мурманск, Кольский", "Непал", "Перу", "Подмосковье", "Приморье", "Приэльбрусье",
    "Сахалин и Курилы", "Северная Америка", "Северная Осетия", "Селигер", "Сибирь",
    "Сокотра", "Таджикистан", "Турция", "Узбекистан", "Урал", "Черногория", 
    "Шри-Ланка", "Эквадор", "Япония",
  ];

  // Закрытие dropdown при клике вне его
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        regionDropdownRef.current &&
        !regionDropdownRef.current.contains(event.target as Node)
      ) {
        setIsRegionDropdownOpen(false);
      }
      if (
        activityDropdownRef.current &&
        !activityDropdownRef.current.contains(event.target as Node)
      ) {
        setIsActivityDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleRegionChange = (region: string) => {
    setFilters((prev) => {
      const newRegion = prev.region.includes(region)
        ? prev.region.filter((item) => item !== region)
        : [...prev.region, region];
      return { ...prev, region: newRegion };
    });
  };

  const handleActivityChange = (activity: string) => {
    setFilters((prev) => {
      const newActivity = prev.activity.includes(activity)
        ? prev.activity.filter((item) => item !== activity)
        : [...prev.activity, activity];
      return { ...prev, activity: newActivity };
    });
  };

  const handleSearch = () => {
    const queryParams = new URLSearchParams();

    if (filters.region.length > 0) queryParams.append("region", filters.region.join(","));
    if (filters.activity.length > 0) queryParams.append("activity", filters.activity.join(","));
    if (filters.dateFrom) queryParams.append("datefrom", filters.dateFrom);
    if (filters.dateTo) queryParams.append("dateto", filters.dateTo);

    const targetUrl = `/api/cards?${queryParams.toString()}`;
    router.push(targetUrl);
  };

  return (
    <div className="unified-search">
      {/* Поле для региона */}
      <div className="unified-search__input" onClick={() => setIsRegionDropdownOpen(!isRegionDropdownOpen)}>
        <input
          type="text"
          placeholder="Куда"
          className="unified-search__input"
          value={filters.region.join(", ")} // показываем выбранные регионы
          readOnly
        />
        {isRegionDropdownOpen && (
          <div ref={regionDropdownRef} className="dropdown">
            {regions.map((region) => (
              <label key={region} className="dropdown-item">
                <input
                  type="checkbox"
                  checked={filters.region.includes(region)}
                  onChange={() => handleRegionChange(region)}
                />
                {region}
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Поле для активности */}
      <div className="unified-search__input" onClick={() => setIsActivityDropdownOpen(!isActivityDropdownOpen)}>
        <input
          type="text"
          placeholder="Вид активности"
          className="unified-search__input"
          value={filters.activity.join(", ")} // показываем выбранные активности
          readOnly
        />
        {isActivityDropdownOpen && (
          <div ref={activityDropdownRef} className="dropdown">
            {activities.map((activity) => (
              <label key={activity} className="dropdown-item">
                <input
                  type="checkbox"
                  checked={filters.activity.includes(activity)}
                  onChange={() => handleActivityChange(activity)}
                />
                {activity}
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Поле для дат */}
      <input
        type="date"
        className="unified-search__input"
        value={filters.dateFrom}
        onChange={(e) => setFilters({ ...filters, dateFrom: e.target.value })}
      />
      <input
        type="date"
        className="unified-search__input"
        value={filters.dateTo}
        onChange={(e) => setFilters({ ...filters, dateTo: e.target.value })}
      />
      <button className="unified-search__button" onClick={handleSearch}>
        Искать
      </button>
    </div>
  );
};

export default UnifiedSearch;
