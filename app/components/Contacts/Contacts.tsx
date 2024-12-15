"use client"

import React, { useState } from 'react';
import './Contacts.css';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [question, setQuestion] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, whatsapp, question });
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <h2 className="contact-form__heading">Остались вопросы по программе?</h2>
      <p className="contact-form__paragraph">Заполните форму - и мы свяжемся с Вами!</p>
      <label className="contact-form__label">
        Напишите Ваше имя:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="contact-form__input"
          required
        />
      </label>
      <label className="contact-form__label">
        Электронная почта:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="contact-form__input"
          required
        />
      </label>
      <label className="contact-form__label">
        Напишите номер WhatsApp для связи:
        <input
          type="tel"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
          className="contact-form__input"
          required
          placeholder="+7 (999) 999-99-99"
        />
      </label>
      <label className="contact-form__label">
        Ваш вопрос:
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="contact-form__textarea"
          required
        />
      </label>
      <button type="submit" className="contact-form__button">Отправить</button>
      <p className="contact-form__consent">
        Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь с{' '}
        <a href="/privacy-policy">политикой конфиденциальности</a>.
      </p>
    </form>
  );
};

export default ContactForm;
