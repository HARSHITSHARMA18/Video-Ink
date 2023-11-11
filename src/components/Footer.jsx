import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";

import usersolid from "../assets/user-solid.png";
import envelopesolid from "../assets/envelope-solid.png";
import vidyologo from "../assets/vidyo-logo.svg";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col justify-center items-center p-[8rem]">
        <div className="flex flex-col justify-center items-center collaboration">
          <h3 className="lg:text-5xl text-white m-8">
            Video{" "}
            <span className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ">
              Ink
            </span>
          </h3>
          <h1 className="text-3xl text-white">X</h1>
          <img src={vidyologo} alt="" />
        </div>

        <div className="flex flex-row justify-center items-center icons-container p-8">
          <a href="https://linkedin.com/in/harshitsharma18">
            <img className="footer-icons" src={linkedin} alt="LinkedIn" />
          </a>
          <a href="https://github.com/HARSHITSHARMA18">
            <img className="footer-icons" src={github} alt="GitHub" />
          </a>
          <a href="mailto:18harshitsharma11@gmail.com">
            <img className="footer-icons" src={envelopesolid} alt="Mail" />
          </a>
          <a href="https://portfolio-harshit-sharma.netlify.app/">
            <img className="footer-icons" src={usersolid} alt="portfolio" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
