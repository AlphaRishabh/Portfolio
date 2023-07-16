import React from "react";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
// import EmailIcon from "@material-ui/icons/Email";
// import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Rishabh Pandey</h2>
        <div className="prompt">
          <p>A software developer with curiosity and passion in working with new technolgies.</p>
        </div>
        <div class="download">
  
  <a href="https://drive.google.com/file/d/11ND31fgHDCmrBgw9bDqhQcCuT_rmrFYG/view?usp=sharing" download="RishabhPandeyCV">
    <button>DownloadCV</button>
  </a>

 </div>
      </div>
    </div>
  );
}

export default Home;
