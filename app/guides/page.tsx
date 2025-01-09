"use client"

import React, { useState } from "react";
import "./employee.css";
import Header from "../components/MainPage/headerComponent/header";

interface Employee {
  id: number;
  name: string;
  role: string;
  plannedHikes: number;
  avatarUrl: string;
}

// Фейковые данные сотрудников
const fakeEmployees: Employee[] = Array.from({ length: 30 }, (_, index) => ({
  id: index + 1,
  name: `Employee ${index + 1}`,
  role: index % 3 === 0 ? "Developer" : index % 3 === 1 ? "Designer" : "Manager",
  plannedHikes: Math.floor(Math.random() * 10) + 1, // От 1 до 10 походов
  avatarUrl: `https://cs13.pikabu.ru/avatars/1873/x1873132-1972677953.png`,
}));

const EmployeeList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState(""); // Состояние для хранения поискового запроса

  // Фильтрация сотрудников по имени
  const filteredEmployees = fakeEmployees.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    
    <div className="employee-list">
      <Header/>
      <h1 className="employee-list__title">Список сотрудников компании</h1>
      {/* Поле для поиска */}
      <input
        type="text"
        placeholder="Найти сотрудника..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="employee-list__search"
      />
      <ul className="employee-list__items">
        {filteredEmployees.length > 0 ? (
          filteredEmployees.map((employee) => (
            <li className="employee-list__item" key={employee.id}>
              <div className="employee-list__avatar-container">
                <img
                  src={employee.avatarUrl}
                  alt={employee.name}
                  className="employee-list__avatar"
                />
              </div>
              <div className="employee-list__info">
                <span className="employee-list__name">{employee.name}</span> —{" "}
                <span className="employee-list__role">{employee.role}</span>
              </div>
              <div className="employee-list__hikes">
                Запланировано походов: {employee.plannedHikes}
              </div>
            </li>
          ))
        ) : (
          <li className="employee-list__no-results">Сотрудники не найдены</li>
        )}
      </ul>
    </div>
  );
};

export default EmployeeList;
