"use client"
import "./Travel.css"; 
import React, { useEffect, useState } from 'react';

interface Image {
  id: number;
  url: string;
}

interface Review {
  id: number;
  rating: number;
  comment: string;
}

interface Tour {
  id: number;
  title: string;
  description: string;
  price: number;
  location: string;
  images: Image[];
  reviews: Review[];
}

const TravelTours: React.FC = () => {
  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await fetch('/api/tours/travel');
        const data = await response.json();
        setTours(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching tours:', error);
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Туры по категории "Путешествия"</h1>
      <div className="tours">
        {tours.map((tour) => (
          <div key={tour.id} className="tour-card">
            <h2>{tour.title}</h2>
            <p>{tour.description}</p>
            <p>Локация: {tour.location}</p>
            <p>Цена: {tour.price} ₽</p>
            {tour.images.length > 0 && (
              <img
                src={tour.images[0].url}
                alt={tour.title}
                className="tour-card__image"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelTours;
