// components/ActivityCards.tsx
import React from "react";
import './Activity.css'

interface Activity {
  title: string;
  count: number;
  imageUrl: string;
}

const activities: Activity[] = [
  { title: "С рюкзаком", count: 198, imageUrl: "/images/hiking2.jpeg" },
  { title: "Сплавы", count: 171, imageUrl: "/images/splav2.jpg" },
  { title: "Фридайвинг", count: 0, imageUrl: "/images/free5.jpg" },
  { title: "Восхождения", count: 117, imageUrl: "/images/mount66.jpg" },
  { title: "С детьми", count: 88, imageUrl: "/images/withkids3.jpg" },
  { title: "Все остальные", count: 248, imageUrl: "/images/all.jpg" },
];

const ActivityCards: React.FC = () => {
  return (
    <div className="activity-cards">
      {activities.map((activity, index) => (
        <div className="activity-card" key={index}>
          <img
            src={activity.imageUrl}
            alt={activity.title}
            className="activity-card__image"
          />
          <div className="activity-card__text">
            <span className="activity-card__title">{activity.title}</span>
            <span className="activity-card__count">{activity.count} походов</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActivityCards;
