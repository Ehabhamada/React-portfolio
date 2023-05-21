import React from 'react';
import './portfolio.css';

import portfolio1 from '../../assets/portfolio1.png';
import portfolio2 from '../../assets/portfolio2.png';
import portfolio3 from '../../assets/portfolio3.png';
import portfolio4 from '../../assets/portfolio4.png';
import portfolio5 from '../../assets/portfolio5.png';
import portfolio6 from '../../assets/portfolio6.png';

const data = [
  { id: 1, img: portfolio1, title: 'Ultimate-Website', github: 'https://github.com/Ehabhamada/Ultimate-Website-Elzero', demo: 'https://ehabhamada.github.io/Ultimate-Website-Elzero/' },
  { id: 2, img: portfolio2, title: 'Spicial-Disgin-elzero', github: 'https://github.com/Ehabhamada/Javascript-Spicial-Disgin', demo: 'https://ehabhamada.github.io/Javascript-Spicial-Disgin/' },
  { id: 3, img: portfolio3, title: 'React-TodoList-APP', github: 'https://github.com/Ehabhamada/React-TodoList-APP', demo: 'https://ehabhamada.github.io/React-TodoList-APP/' },
  { id: 4, img: portfolio4, title: 'e-commerce-store-nextj', github: 'https://github.com/Ehabhamada/e-commerce-store-useing-sanity-stripe', demo: 'https://ehabhamada-e-commerce-store-useing-sanity-stripe.vercel.app/' },
  { id: 5, img: portfolio5, title: 'Shopping-Cart', github: 'https://github.com/Ehabhamada/Shopping-Cart', demo: 'https://ehabhamada.github.io/Shopping-Cart/' },
  { id: 6, img: portfolio6, title: 'product-management-crud', github: 'https://github.com/Ehabhamada/Full-product-management-system-crud', demo: 'https://ehabhamada.github.io/Full-product-management-system-crud/' }
];


const Portfolio = () => {
  return (
    <section id="Portfolio">
      <h5 data-aos="fade-right">My Recent Work</h5>
      <h2 data-aos="fade-left">Portfolio</h2>
      <div data-aos="fade-up" className="container Portfolio_container">
        {data.map(({ id, img, title, github, demo }) => (
          <article data-aos="zoom-in-up" key={id} className="Portfolio_item">
            <div className="Portfolio_item-image">
              <img src={img} alt="img" />
            </div>
            <h3>{title}</h3>
            <div className="Portfolio_item-CTA">
              <a href={github} className="btn" target="_blank" rel="noopener noreferrer">Github</a>
              <a href={demo} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
