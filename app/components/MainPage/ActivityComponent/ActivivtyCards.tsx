import React from "react";
import Link from "next/link";
import "./Activity.css";

interface Activity {
  title: string;
  count: number;
  imageUrl: string;
  link: string;  // добавим ссылку к активности
}

const activities: Activity[] = [
  { title: "Путешествия", count: 198, imageUrl: "/images/hiking2.jpeg", link: "/tours/travel" },
  { title: "Сплавы", count: 171, imageUrl: "/images/splav2.jpg", link: "/tours/splav" },
  { title: "Фридайвинг", count: 0, imageUrl: "/images/free5.jpg", link: "/tours/freediving" },
  { title: "Восхождения", count: 117, imageUrl: "/images/mount66.jpg", link: "/tours/climbing" },
  { title: "С детьми", count: 88, imageUrl: "/images/withkids3.jpg", link: "/tours/with-kids" },
  { title: "Все остальные", count: 248, imageUrl: "/images/all.jpg", link: "/tours/others" },
];

const ActivityCards: React.FC = () => {
  return (
    <div className="activity-cards">
      {activities.map((activity, index) => (
        <Link href={activity.link} key={index}>
          <div className="activity-card">
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
        </Link>
      ))}
    </div>
  );
};

export default ActivityCards;
