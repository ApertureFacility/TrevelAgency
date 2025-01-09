import React from 'react';
import './ClubInfo.css';


const AboutUs: React.FC = () => {
  const clubData = {
    name: "Турклуб Фейковый",
    description: "Частное туристическое предприятие «Турклуб Фейковый» — крупнейший организатор походов и активного отдыха в Беларуси. Мы вдохновляем на приключения, соединяя вас с природой и новыми друзьями с 2024 года.",
    mission: "Мы верим, что активный отдых способен изменить жизнь к лучшему, а путешествия делают нас богаче на эмоции и впечатления.",
    vision: "Наша цель — создавать безопасные и незабываемые маршруты, объединяющие комфорт и дух приключений.",
    team: [
      { name: "Иван Иванов", position: "Гид", bio: "Опытный путешественник с более чем 10-летним стажем." },
      { name: "Анна Смирнова", position: "Маркетолог", bio: "Обожает природу и помогает делиться этим с миром." },
      { name: "Петр Васильев", position: "Организатор", bio: "Ответственный за комфорт и безопасность в пути." },
    ],
    address: "Беларусь, город Фейковск, ул. Выдуманная, д. 1",
    phone: "+375 44 000-00-00",
    email: "info@fakeclub.by",
    workingHours: "Пн-Пт: 10:00–19:00",
    socialLinks: {
      telegram: "https://t.me/fakeclub",
      instagram: "https://www.instagram.com/fakeclub.by/",
      facebook: "https://www.facebook.com/fakeclub/",
      vkontakte: "https://vk.com/fakeclub"
    }
  };

  return (
    <div className="about-us">
      <div className="about-us__header">
        <h1 className="about-us__title">{clubData.name}</h1>
        <p className="about-us__description">{clubData.description}</p>
      </div>

      <section className="about-us__section about-us__mission">
        <h2>Наша миссия</h2>
        <p>{clubData.mission}</p>
      </section>

      <section className="about-us__section about-us__vision">
        <h2>Наше видение</h2>
        <p>{clubData.vision}</p>
      </section>

      <section className="about-us__section about-us__team">
        <h2>Наша команда</h2>
        <div className="team-grid">
          {clubData.team.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-card__avatar"></div>
              <h3>{member.name}</h3>
              <p className="team-card__position">{member.position}</p>
              <p className="team-card__bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="about-us__section about-us__contact">
        <h2>Контакты</h2>
        <p><strong>Адрес:</strong> {clubData.address}</p>
        <p><strong>Телефон:</strong> {clubData.phone}</p>
        <p><strong>Email:</strong> {clubData.email}</p>
        <p><strong>Время работы:</strong> {clubData.workingHours}</p>
      </section>

      <div className="about-us__social-links">
        <h3>Мы в социальных сетях</h3>
        <a href={clubData.socialLinks.telegram} target="_blank" rel="noopener noreferrer" className="social-icon telegram"></a>
        <a href={clubData.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="social-icon instagram"></a>
        <a href={clubData.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="social-icon facebook"></a>
        <a href={clubData.socialLinks.vkontakte} target="_blank" rel="noopener noreferrer" className="social-icon vkontakte"></a>
      </div>
    </div>
  );
};

export default AboutUs;
