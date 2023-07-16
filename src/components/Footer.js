import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.instagram.com/rishabh.p29/">
          <InstagramIcon />
        </a>
        <a href="https://github.com/AlphaRishabh">
          <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/rishabh-pandey-4359631a0/">
          <LinkedInIcon />
        </a>
      </div>
      <p>&copy; alphaRishabh</p>
    </div>
  );
}

export default Footer;
