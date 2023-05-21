import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { TbBrandMessenger } from "react-icons/tb";
import { BsWhatsapp } from "react-icons/bs";
function Contact() {
  return (
    <section id="contact">
      <h5 data-aos="fade-down">Get in Touch</h5>
      <h2 data-aos="fade-up">Contact Me</h2>
      <div className="container Contact_container">
        <div data-aos="fade-right" className="Contact_options">
          <article className="Contact_option">
            <MdOutlineEmail className="Contact_option-icon"/>
            <h4 >Email</h4>
            <h5 className="text-[0.9rem]">Wd.EhabHamada@gmail.com</h5>
            <a
              href="mailto:Wd.EhabHamada@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a messgage
            </a>
          </article>
          <article className="Contact_option">
            <TbBrandMessenger  className="Contact_option-icon"/>
            <h4>Messenger</h4>
            <h5>Ehab Hamada</h5>
            <a href="https://m.me/id" target="_blank" rel="noopener noreferrer">
              Send a messgage
            </a>
          </article>
          <article className="Contact_option">
            <BsWhatsapp  className="Contact_option-icon"/>
            <h4>WhatsApp</h4>
            <h5>01121909076</h5>
            <a
              href="https://wa.me/+201121909076"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a messgage
            </a>
          </article>
        </div>
        <form data-aos="fade-left" action="">
          <input className="input-textarea"
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input className="input-textarea" type="email" name="email" placeholder="Your Email" required />
          <textarea className="input-textarea"
            name="Message"
            rows="7"
            placeholder="Your Message"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
