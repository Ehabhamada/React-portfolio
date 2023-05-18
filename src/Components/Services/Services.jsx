import { BiCheck } from 'react-icons/bi';
import './srvices.css';

const services = [
  {
    title: 'UI/UX Design',
    items: [
      'Lorem ipsum dolor sit amet consectetur adipisicing.',
      'Lorem ipsum dolor sit amet consectetur adipisicing.',
      'Lorem ipsum dolor sit amet consectetur adipisicing.',
      'Lorem ipsum dolor sit amet consectetur adipisicing.',
      'Lorem ipsum dolor sit amet consectetur adipisicing.',
      'Lorem ipsum dolor sit amet consectetur adipisicing.',
    ],
  },
  {
    title: 'Web Development',
    items: [
      'Lorem ipsum dolor sit amet consectetur adipisicing.',
      'Lorem ipsum dolor sit amet consectetur adipisicing.',
      'Lorem ipsum dolor sit amet consectetur adipisicing.',
      'Lorem ipsum dolor sit amet consectetur adipisicing.',
      'Lorem ipsum dolor sit amet consectetur adipisicing.',
      'Lorem ipsum dolor sit amet consectetur adipisicing.',
      'Lorem ipsum dolor sit amet consectetur adipisicing.',
    ],
  },
  {
    title: 'Content Creation',
    items: [
      'Lorem ipsum dolor sit amet consectetur adipisicing.',
      'Lorem ipsum dolor sit amet consectetur adipisicing.',
      'Lorem ipsum dolor sit amet consectetur adipisicing.',
      'Lorem ipsum dolor sit amet consectetur adipisicing.',
      'Lorem ipsum dolor sit amet consectetur adipisicing.',
      'Lorem ipsum dolor sit amet consectetur adipisicing.',
    ],
  },
];

function Services() {

  return (
    <section id="services">
      <h5 data-aos="fade-right">What I Offer</h5>
      <h2 data-aos="fade-left">Services</h2>
      <div className="container services_container">
        {services.map((service, index) => (
          <article key={index} data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'} className="service">
            <div className="service_head">
              <h3>{service.title}</h3>
            </div>
            <ul className="service_list">
              {service.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <BiCheck className="service_list-icon" />
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;
