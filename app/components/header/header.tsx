"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logoimg from '@/app/components/header/mount-svgrepo-com.svg';
import '@/app/components/header/header.css';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo-group">
          <div className="header__logo-text">
            <p>Турклуб Восхождение</p>
          </div>
          <div className="header__logo">
            <Image
              src={logoimg}
              width={100}
              height={50}
              alt="Travel logo"
            />
          </div>
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <Link href="/tours">
                <p>Наши туры</p>
              </Link>
            </li>
            <li className="header__nav-item">
              <Link href="/guides">
                <p>Гиды</p>
              </Link>
            </li>
            <li className="header__nav-item">
              <Link href="/promotions">
                <p>Контакты</p>
              </Link>
            </li>
            <li className="header__nav-item">
                <p onClick={toggleDropdown}>Еще</p>
                {isOpen && (
                  <div className="dropdown-content">
                    <Link href="/more/subpage1"><p>Корпоративы</p></Link>
                    <Link href="/more/subpage2"><p>Отдых в Беларуси</p></Link>
                    <Link href="/more/subpage3"><p>Блог</p></Link>
                  </div>
                )}
            </li>
          </ul>
        </nav>
        <button className='header__login-button'>Войти</button>
      </div>
    </header>
  );
};

export default Header;
