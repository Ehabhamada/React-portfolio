import {AiOutlineTwitter} from 'react-icons/ai'
import {FaFacebook} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import './footer.css'

function Footer() {
  return (
    <footer>
      <a data-aos="zoom-in" href="#" className='footer_logo'>Ehab</a>
      <div className="premalinks">
        <li data-aos="fade-up" data-aos-duration="1000"  data-aos-delay="300"
><a href="#About">About</a></li>
        <li data-aos="fade-up" data-aos-duration="1000"  data-aos-delay="600"
><a href="#">Home</a></li>
        <li data-aos="fade-up" data-aos-duration="1000"  data-aos-delay="800"
><a href="#About">Experience</a></li>
        <li data-aos="fade-up" data-aos-duration="1000"  data-aos-delay="1000"
><a href="#Services">Services</a></li>
        <li data-aos="fade-up" data-aos-duration="1000"  data-aos-delay="1200"
><a href="#Portfolio">Portfolio</a></li>
        <li data-aos="fade-up" data-aos-duration="1000"  data-aos-delay="1400"
><a href="#Testmonials">Testmonials</a></li>
        <li data-aos="fade-up" data-aos-duration="1000"  data-aos-delay="1600"
><a href="#Contact">Contact</a></li>
      </div>
      <div className="footer_social">
        <a data-aos="fade-right"href="http://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook/>
        </a>
        <a data-aos="zoom-in-up" href="http://instagram.com" target="_blank" rel="noopener noreferrer">
          <FiInstagram/>
        </a>
        <a data-aos="fade-left"href="http://twitter.com" target="_blank" rel="noopener noreferrer">
          <AiOutlineTwitter/>
        </a>
      </div>
      <div data-aos="fade-up" className="footer_copyright">
        <small>&copy; Ehab Hamada All Rights Recervid</small>
      </div>
    </footer>
  )
}

export default Footer