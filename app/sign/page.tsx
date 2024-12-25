"use client"

import React, { useState } from 'react';
import './LoginForm.css'

const LoginForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
  
      // Простая валидация
      if (!email || !password) {
        setError('Пожалуйста, заполните все поля');
        return;
      }
  
      setError('');
  
      // Здесь вы можете добавить логику для отправки данных на сервер
      console.log('Email:', email);
      console.log('Password:', password);
    };
  
    return (
      <div className="login-form-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2 className="login-title">Вход в аккаунт</h2>
          {error && <p className="login-error">{error}</p>}
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Пароль:</label>
            <input
              type="password"
              id="password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="login-button">Войти</button>
          <div className="login-actions">
            <button type="button" className="action-button">Напомнить пароль</button>
            <button type="button" className="action-button">Зарегистрироваться</button>
          </div>
        </form>
      </div>
    );
  };
  
  export default LoginForm;
