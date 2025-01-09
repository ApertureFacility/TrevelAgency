import React from "react";
import "./feedbackSection.css";

interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  tour: string; 
  date: string; 
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Иван Петров",
    avatar: "https://sun9-25.userapi.com/impg/RXTAdN81gDQaUv6MEWV41gSPFzn7lpxwKboTwQ/buT4E11ADno.jpg?size=320x213&quality=96&crop=72,0,623,415&sign=fa57fdd339ed6ccbd4d20efd67e7713b&c_uniq_tag=A01iS9na0sLqhWKzj30z2iqTEbEjsi_xMBZiySz8yr8&type=album",
    tour: "Эльбрус с востока",
    date: "сентябрь 2021 г.",
    text: "Этот сервис превзошел мои ожидания! Все сделано качественно и в срок. Я очень рада, что выбрала именно их. Они действительно заботятся о клиентах и их потребностях. Путешествие было просто невероятным, и я получила огромное удовольствие. Рекомендую всем! Прекрасное обслуживание и внимательный персонал. Обязательно обращусь к ним снова. Такого сервиса я еще не встречала, они настоящие профессионалы."
  },
  {
    id: 2,
    name: "Анна Смирнова",
    avatar: "https://sun9-11.userapi.com/impf/c639623/v639623668/4e247/i0erSQv8jBw.jpg?size=604x403&quality=96&sign=d2a75986f07743b1d27989f3cc409e0c&type=album",
    tour: "Алтайский хребет",
    date: "июль 2021 г.",
    text: "Очень благодарен за вашу работу. Отличный подход к клиентам! Ваш сервис поразил меня своим качеством и профессионализмом. Путешествие было организовано на высшем уровне. Я получил массу положительных эмоций и впечатлений. Не могу дождаться следующего путешествия с вами. Ваши гиды — просто лучшие! Потрясающий опыт и незабываемые моменты. Всем рекомендую вас! Спасибо за ваше внимание к деталям."
  },
  {
    id: 3,
    name: "Екатерина Иванова",
    avatar: "https://i.pinimg.com/736x/ee/85/4a/ee854ad5e4cf42eedc3ebf46971a77f5.jpg",
    tour: "Карпатские горы",
    date: "май 2021 г.",
    text: "Работа выполнена на высшем уровне! Обязательно обращусь снова. Я впечатлена качеством обслуживания и внимательностью команды. Они превратили мое путешествие в настоящее приключение. Все было организовано идеально. Настоятельно рекомендую этот сервис. Очень довольна результатом. Они действительно лучшие в своем деле. В следующий раз непременно выберу их снова. Спасибо за незабываемые моменты!"
  },
  {
    id: 4,
    name: "Дмитрий Кузнецов",
    avatar: "https://i.ytimg.com/vi/dfLzvsaVXjg/hqdefault.jpg",
    tour: "Кавказские горы",
    date: "июнь 2020 г.",
    text: "Не могу сказать, насколько я впечатлён их обслуживанием и подходом к клиентам. Это было настоящее приключение, которое я никогда не забуду. Профессионализм и внимание к деталям на высшем уровне. Спасибо за незабываемые моменты и отличное настроение!"
  },
  {
    id: 5,
    name: "Марина Соколова",
    avatar: "https://s.pfst.net/2016.05/48260116756767ab845b24ff8c726a9d08103981a18b_b.jpg",
    tour: "Тянь-Шань",
    date: "август 2021 г.",
    text: "Путешествие было просто фантастическим! Организация на высшем уровне, забота о мелочах просто поражает. Настоятельно рекомендую этот турклуб всем, кто хочет получить максимум удовольствия от своих приключений. Отличные гиды и замечательная компания!"
  },
  {
    id: 6,
    name: "Сергей Волков",
    avatar: "https://www.voyage-to.me/upload/photos/2017/09/cDGx6DQUoOsMvPWCZc7d_25_14fb899311d0accd5ac532883c0f8231_avatar_full.jpg?cache=0",
    tour: "Мальдивы",
    date: "октябрь 2020 г.",
    text: "Не могу выразить словами, насколько я был счастлив в этом путешествии. Организация и внимание к деталям просто на высшем уровне. Гиды очень профессиональны и всегда готовы помочь. Спасибо за незабываемые моменты и великолепные впечатления!"
  },
];



const TestimonialItem: React.FC<Testimonial> = ({ name, avatar, tour, date, text }) => {
  return (
    <div className="testimonial">
      <img
        className="testimonial__avatar"
        src={avatar}
        alt={`Аватар ${name}`}
      />
      <div className="testimonial__content">
        <h3 className="testimonial__name">{name}</h3>
        <p className="testimonial__tour">{tour}</p>
        <p className="testimonial__date">{date}</p>
        <p className="testimonial__text">{text}</p>
      </div>
    </div>
  );
};

const TestimonialsPage: React.FC = () => {
  return (
    <div className="testimonials">
      <h1 className="testimonials__title">Отзывы наших клиентов</h1>
      <div className="testimonials__grid">
        {testimonials.map((testimonial) => (
          <TestimonialItem key={testimonial.id} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsPage;
