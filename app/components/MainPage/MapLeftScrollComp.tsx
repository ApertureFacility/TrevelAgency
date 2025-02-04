import React from "react";
import './scroll.css'
import Image from "next/image";


const locations = [
  { name: "Россия", count: 570, flagUrl: "/images/bel.png" },
  { name: "Эльбрус", count: 570, flagUrl: "/images/bel.png" },
  { name: "Кавказ", count: 570, flagUrl: "/images/bel.png" },
  { name: "Камчатка", count: 570, flagUrl: "/images/bel.png" },
  { name: "Азия", count: 570, flagUrl: "/images/bel.png" },
  { name: "Aфрика ", count: 570, flagUrl: "/images/bel.png" },
  { name: "Армения", count: 570, flagUrl: "/images/bel.png" },
  { name: "Абхазия", count: 570, flagUrl: "/images/bel.png" },
  { name: "Россия", count: 570, flagUrl: "/images/bel.png" },
  { name: "Россия", count: 570, flagUrl: "/images/bel.png" },
  { name: "Россия", count: 570, flagUrl: "/images/bel.png" },
  { name: "Россия", count: 570, flagUrl: "/images/bel.png" },
  { name: "Россия", count: 570, flagUrl: "/images/bel.png" },
  { name: "Россия", count: 570, flagUrl: "/images/bel.png" },
];

const ScrollableList: React.FC = () => {
  return (
    <div className="scrollable-list">
      {locations.map((location, index) => (
        <div className="scrollable-list__item" key={index}>
          <Image src={location.flagUrl} alt={`${location.name} flag`} className="scrollable-list__flag" width={300} height={300}/>
          <span className="scrollable-list__name">{location.name}</span>
          <span className="scrollable-list__count">{location.count}</span>
        </div>
      ))}
    </div>
  );
};

export default ScrollableList;
