import { BsGithub ,BsFacebook,BsLinkedin} from "react-icons/bs";

function HeaderSocials() {
  return (
    <div className="header-social">
      <a href="http://linkedin.com" target="_blank" rel="noopener noreferrer" className="SocialIcon">
        <BsLinkedin />
      </a>
      <a href="http://facebook.com" target="_blank" rel="noopener noreferrer" className="SocialIcon">
        <BsFacebook />
      </a>
      <a href="http://github.com" target="_blank" rel="noopener noreferrer" className="SocialIcon">
        <BsGithub />
      </a>
    </div>
  );
}

export default HeaderSocials;
