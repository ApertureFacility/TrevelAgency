import React from 'react';
import './ClubInfo.css';

const ClubInfo: React.FC = () => {
  const clubData = {
    name: "Турклуб Фейковый",
    description: "Частное туристское унитарное предприятие «Турклуб Фейковый» - крупнейший белорусский туроператор походов и активного отдыха с 2024 года.",
    address: "Беларусь, город Фейковск",
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
    <div className="club-info">
      <h1 className="club-info__title">{clubData.name}</h1>
      <p className="club-info__description">{clubData.description}</p>
      <p className="club-info__address">{clubData.address}</p>
      <p className="club-info__phone">Телефон: {clubData.phone}</p>
      <p className="club-info__email">Email: {clubData.email}</p>
      <p className="club-info__working-hours">Время работы: {clubData.workingHours}</p>
      <div className="club-info__social-links">
        <a href={clubData.socialLinks.telegram} target="_blank" rel="noopener noreferrer">Telegram</a>
        <a href={clubData.socialLinks.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href={clubData.socialLinks.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href={clubData.socialLinks.vkontakte} target="_blank" rel="noopener noreferrer">ВКонтакте</a>
      </div>
    </div>
  );
};

export default ClubInfo;
