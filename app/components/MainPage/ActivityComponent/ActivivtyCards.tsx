import React, { useEffect, useState } from "react";
import Link from "next/link";
import "./Activity.css";

interface Activity {
  id: number;
  title: string;
  count: number;
  imageUrl: string;
  link: string;
}

const defaultActivities: Activity[] = [
  { id: 1, title: "Путешествия", count: 198, imageUrl: "/images/hiking2.jpeg", link: "/tours/travel" },
  { id: 2, title: "Сплавы", count: 171, imageUrl: "/images/splav2.jpg", link: "/tours/splav" },
  { id: 3, title: "Фридайвинг", count: 0, imageUrl: "/images/free5.jpg", link: "/tours/freediving" },
  { id: 4, title: "Восхождения", count: 117, imageUrl: "/images/mount66.jpg", link: "/tours/climbing" },
  { id: 5, title: "С детьми", count: 88, imageUrl: "/images/withkids3.jpg", link: "/tours/with-kids" },
  { id: 6, title: "Все остальные", count: 248, imageUrl: "/images/all.jpg", link: "/tours" },
];

const ActivityCards: React.FC = () => {
  const [activities, setActivities] = useState<Activity[]>(defaultActivities);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await fetch("/api/activities");
        if (!response.ok) throw new Error("Ошибка загрузки данных");

        const data = await response.json();

        const formattedActivities: Activity[] = data.map((activity: any) => ({
          id: activity.id,
          title: activity.name,
          count: activity._count?.tours ?? 0,
          imageUrl: defaultActivities.find((a) => a.id === activity.id)?.imageUrl || "/images/default.jpg",
          link: defaultActivities.find((a) => a.id === activity.id)?.link || "/tours",
        }));

        setActivities(formattedActivities);
      } catch (err) {
        setError("Не удалось загрузить активности");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchActivities();
  }, []);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="activity-cards">
      {activities.map((activity) =>
        activity.link ? (
          <Link href={activity.link} key={activity.id}>
            <div className="activity-card">
              <img src={activity.imageUrl} alt={activity.title} className="activity-card__image" />
              <div className="activity-card__text">
                <span className="activity-card__title">{activity.title}</span>
                <span className="activity-card__count">{activity.count} походов</span>
              </div>
            </div>
          </Link>
        ) : null
      )}
    </div>
  );
};

export default ActivityCards;
