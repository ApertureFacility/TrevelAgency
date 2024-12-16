"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; 
import "./search.css"; 

const UnifiedSearch: React.FC = () => {
  const router = useRouter();


  const [filters, setFilters] = useState({
    region: "",
    activity: "",
    dateFrom: "",
    dateTo: "",
  });


  const handleChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };


  const handleSearch = () => {
    const queryParams = new URLSearchParams();


    if (filters.region) queryParams.append("region", filters.region);
    if (filters.activity) queryParams.append("activity", filters.activity);
    if (filters.dateFrom) queryParams.append("datefrom", filters.dateFrom);
    if (filters.dateTo) queryParams.append("dateto", filters.dateTo);


    const region = filters.region || "api/cards?region=any";


    const targetUrl = `api/cards?region=any`;


    router.push(targetUrl);
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
        value={filters.activity}
        onChange={(e) => handleChange("activity", e.target.value)}
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
