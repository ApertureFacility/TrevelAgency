import { useState } from 'react';
import './TripsFilter.css';

interface Trip {
  id: number;
  region: string;
  type: string;
  date: string;
  budget: number;
}

const TripsFilter = () => {
  const [filters, setFilters] = useState({
    region: '',
    type: '',
    startDate: '',
    endDate: '',
    budgetMin: '',
    budgetMax: '',
  });

  const [trips, setTrips] = useState<Trip[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFilterChange = (key: string, value: any) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleSearch = async () => {
    setLoading(true);
    setError(null);

    try {
      const queryParams = new URLSearchParams();

      if (filters.region) queryParams.append('region', filters.region);
      if (filters.type) queryParams.append('type', filters.type);
      if (filters.startDate) queryParams.append('startDate', filters.startDate);
      if (filters.endDate) queryParams.append('endDate', filters.endDate);
      if (filters.budgetMin) queryParams.append('budgetMin', filters.budgetMin);
      if (filters.budgetMax) queryParams.append('budgetMax', filters.budgetMax);

      const response = await fetch(`/api/trips?${queryParams.toString()}`);

      if (!response.ok) {
        throw new Error('Ошибка при загрузке данных');
      }

      const data: Trip[] = await response.json();
      setTrips(data);
    } catch (err: any) {
      setError(err.message || 'Произошла ошибка');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="trips-filter">
      <h1 className="trips-filter__title">Фильтры</h1>

      <div className="trips-filter__form">
        <div className="trips-filter__form-group">
          <label className="trips-filter__label">Регион:</label>
          <input
            className="trips-filter__input"
            type="text"
            value={filters.region}
            onChange={(e) => handleFilterChange('region', e.target.value)}
          />
        </div>

        <div className="trips-filter__form-group">
          <label className="trips-filter__label">Тип похода:</label>
          <select
            className="trips-filter__select"
            value={filters.type}
            onChange={(e) => handleFilterChange('type', e.target.value)}
          >
            <option value="">Все</option>
            <option value="easy">Легкий</option>
            <option value="medium">Средний</option>
            <option value="hard">Сложный</option>
          </select>
        </div>

        <div className="trips-filter__form-group">
          <label className="trips-filter__label">Не ранее даты:</label>
          <input
            className="trips-filter__input"
            type="date"
            value={filters.startDate}
            onChange={(e) => handleFilterChange('startDate', e.target.value)}
          />
        </div>

        <div className="trips-filter__form-group">
          <label className="trips-filter__label">Не позднее даты:</label>
          <input
            className="trips-filter__input"
            type="date"
            value={filters.endDate}
            onChange={(e) => handleFilterChange('endDate', e.target.value)}
          />
        </div>

        <div className="trips-filter__form-group">
          <label className="trips-filter__label">Бюджет от:</label>
          <input
            className="trips-filter__input"
            type="number"
            value={filters.budgetMin}
            onChange={(e) => handleFilterChange('budgetMin', e.target.value)}
          />
        </div>

        <div className="trips-filter__form-group">
          <label className="trips-filter__label">Бюджет до:</label>
          <input
            className="trips-filter__input"
            type="number"
            value={filters.budgetMax}
            onChange={(e) => handleFilterChange('budgetMax', e.target.value)}
          />
        </div>

        <button
          className="trips-filter__button"
          onClick={handleSearch}
          disabled={loading}
        >
          {loading ? 'Поиск...' : 'Применить фильтры'}
        </button>
      </div>

      {error && <div className="trips-filter__error">Ошибка: {error}</div>}

      <h2 className="trips-filter__results-title">Список походов</h2>
      {loading ? (
        <p className="trips-filter__loading">Загрузка...</p>
      ) : trips.length > 0 ? (
        <ul className="trips-filter__list">
          {trips.map((trip) => (
            <li className="trips-filter__list-item" key={trip.id}>
              <div className="trips-filter__trip">
                <span className="trips-filter__trip-region">{trip.region}</span>
                <span className="trips-filter__trip-type">{trip.type}</span>
                <span className="trips-filter__trip-date">{trip.date}</span>
                <span className="trips-filter__trip-budget">${trip.budget}</span>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="trips-filter__no-results">По вашему запросу ничего не найдено.</p>
      )}
    </div>
  );
};

export default TripsFilter;
