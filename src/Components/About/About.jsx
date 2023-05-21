import Me from '../../assets/me-about.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
import './about.css';

function About() {
  return (
    <section id='about'>
      <h5 data-aos="fade-right">Get Know</h5>
      <h2 data-aos="fade-left">About Me</h2>
      <div className="container about_container">
        <div data-aos="fade-right" className="about_me">
          <div className="about_me-image">
            <img src={Me} alt="me" />
          </div>
        </div>
        <div data-aos="fade-left" className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className='about-icon self-center' />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
            <article className="about_card">
              <FiUsers className='about-icon' />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className='about-icon' />
              <h5>Projects</h5>
              <small>16+ Completed</small>
            </article>
          </div>
          <p>
Front-end developer specialized in designing attractive and responsive websites. Proficient in HTML, CSS, JavaScript, ReactJS, React Native, Bootstrap, Tailwind CSS, and jQuery. Committed to utilizing the latest technologies to deliver exceptional solutions.          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  );
}

export default About;
