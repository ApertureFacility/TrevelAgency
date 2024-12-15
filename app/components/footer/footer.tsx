import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__section">
        <h4>О клубе</h4>
        <ul>
          <li><a href="#about">О клубе</a></li>
          <li><a href="#members">Участникам</a></li>
          <li><a href="#trips">Участие в походах</a></li>
          <li><a href="#booking">Бронь и Оплата</a></li>
          <li><a href="#gear">Личное снаряжение для походов</a></li>
          <li><a href="#discounts">Партнёрская программа скидок</a></li>
          <li><a href="#help">Помощь</a></li>
          <li><a href="#rules">Правила детских программ</a></li>
        </ul>
      </div>
      <div className="footer__section">
        <h4>Сотрудничество</h4>
        <ul>
          <li><a href="#local-guides">Местным гидам</a></li>
          <li><a href="#tour-operators">Туроператарам</a></li>
          <li><a href="#travel-agencies">Турагенствам</a></li>
          <li><a href="#event-organizers">Организаторам событий</a></li>
          <li><a href="#stores">Магазинам</a></li>
          <li><a href="#resorts">Базам отдыха</a></li>
        </ul>
      </div>
      <div className="footer__section">
        <h4>Партнёры</h4>
        <ul>
          <li><a href="#club-strannik">Клуб «Странник»</a></li>
          <li><a href="#wyprawy">Wyprawy Ciekawe</a></li>
          <li><a href="#berezinsky">Березинский заповедник</a></li>
          <li><a href="#tour-organizers">Организаторы туров</a></li>
          <li><a href="#info-partners">Информационные партнёры</a></li>
          <li><a href="#friendly-orgs">Дружеские организации</a></li>
        </ul>
      </div>
      <div className="footer__section">
        <h4>Политика конфиденциальности</h4>
        <ul>
          <li><a href="#privacy-policy">Политика конфиденциальности</a></li>
        </ul>
        <p>© 2024 Турклуб Активный</p>
        <p>Email: example@example.com</p>
        <p>Телефон: +1234567890</p>
      </div>
    </footer>
  );
};

export default Footer;
