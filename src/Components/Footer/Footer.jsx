import {AiOutlineTwitter} from 'react-icons/ai'
import {FaFacebook} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import './footer.css'
import { Link } from 'react-scroll'

function Footer() {
  return (
    <footer>
      <a data-aos="zoom-in" href="#" className='footer_logo'>Ehab</a>
      <div className="premalinks">
        <li className='cursor-pointer' data-aos="fade-up" data-aos-duration="1000"  data-aos-delay="300"
><Link to="about">About</Link></li>
        <li className='cursor-pointer' data-aos="fade-up" data-aos-duration="1000"  data-aos-delay="600"
><Link to="header">Home</Link></li>
        <li className='cursor-pointer' data-aos="fade-up" data-aos-duration="1000"  data-aos-delay="800"
><Link to="Experience">Experience</Link></li>
        {/* <li data-aos="fade-up" data-aos-duration="1000"  data-aos-delay="1000"
><Link to="Services">Services</Link></li> */}
        <li className='cursor-pointer' data-aos="fade-up" data-aos-duration="1000"  data-aos-delay="1200"
><Link to="Portfolio">Portfolio</Link></li>
        {/* <li data-aos="fade-up" data-aos-duration="1000"  data-aos-delay="1400"
><Link to="Testmonials">Testmonials</Link></li> */}
        <li className='cursor-pointer' data-aos="fade-up" data-aos-duration="1000"  data-aos-delay="1600"
><Link to="contact">Contact</Link></li>
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