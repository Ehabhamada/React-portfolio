import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
import './header.css';

function Header() {
  return (
    <header className="header" id="header">
      <div className="container header_container">
        <h5 className='text-color-light' data-aos="zoom-in-down">Hello, I'm</h5>
        <h1 className='text-color-white' data-aos="fade-right">Ehab Hamada</h1>
        <div className='text-animate w-max mx-auto'>
          <h5 className="relative" data-aos="fade-left">Frontend Developer</h5>
        </div>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" data-aos="fade-up" />
        </div>
        <a href="#contact" className="scroll_down">Scroll Down</a>
      </div>
    </header>
  );
}

export default Header;
