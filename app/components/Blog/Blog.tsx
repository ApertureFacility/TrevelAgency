import React from 'react';
import './TravelBlog.css';

const images = [
  { src: "/images/forest1.jpeg", alt: 'An example image' },
  { src: "/images/forest2.jpeg", alt: 'An example image' },
  { src: "/images/forest3.jpeg", alt: 'An example image' },
  { src: "/images/mount4.jpeg", alt: 'An example image' },
  { src: "/images/mount5.jpeg", alt: 'An example image' },
  { src: "/images/mount6.jpeg", alt: 'An example image' },
];

const TravelBlog: React.FC = () => {
  return (
    <div className="travel-blog">
      <h3 className="travel-blog__title">Фотогалерея поездок</h3>
      <div className="travel-blog__images">
        {images.map((image, index) => (
          <div key={index} className="travel-blog__item">
            <img src={image.src} alt={image.alt} className="travel-blog__image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelBlog;
