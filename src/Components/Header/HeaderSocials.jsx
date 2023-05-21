import { BsGithub ,BsFacebook,BsLinkedin} from "react-icons/bs";

function HeaderSocials() {
  return (
    <div className="header-social">
      <a href="https://www.linkedin.com/in/ehab-hamada/" target="_blank" rel="noopener noreferrer" className="SocialIcon">
        <BsLinkedin />
      </a>
      <a href="http://facebook.com" target="_blank" rel="noopener noreferrer" className="SocialIcon">
        <BsFacebook />
      </a>
      <a href="https://github.com/Ehabhamada" target="_blank" rel="noopener noreferrer" className="SocialIcon">
        <BsGithub />
      </a>
    </div>
  );
}

export default HeaderSocials;
