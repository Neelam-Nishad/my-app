import './App.css';
import DownloadCta from "./assets/download.svg"
import Me from "./assets/my-img.jpg"
import Facebook from "./assets/Facebook.svg"
import Instagram from "./assets/Instagram.svg"
import Linkedin from "./assets/Linkedin.svg"
import Twitter from "./assets/Twitter.svg"
import Whatsapp from "./assets/Whatsapp.svg"

function App() {
  return (
    <div className="App">
      <div className="resume-cta" onClick={() => window.open("https://drive.google.com/file/d/1C2sR5ruY6-qnSSpKceJKQEE7Qh6OPupb/view?usp=sharing")}>
        <img src={DownloadCta} />
        RESUME
      </div>
      <div className="profile-contianer box">
        <div className="Bio-contianer">
          <div className="details">
            <p className="my-title" style={{ fontSize: "35px" }}> Hello, I'm </p>
            <p className="my-name" style={{ display: "inline" }}>Neelam Nishad</p>
            <p className="my-title" style={{ display: "inline" }}> Frontend Developer</p>
            <p className="my-description">I'm Frontend Developer, I have a passion for Creating Clean, Beautiful, Interactive, Responsive and User Friendly UI, Developed by Modular, Scalable and Functional code.  </p>
          <div className="social-media-container">
            <div className="social-media" onClick={() => window.open("https://www.facebook.com/profile.php?id=100004083954376", "_blank")}>
              <img src={Facebook}/>
            </div>
            <div className="social-media" onClick={() => window.open("https://www.instagram.com/neelam__kashyap_/", "_blank")} >
              <img src={Instagram}/>
            </div>
            <div className="social-media" onClick={() => window.open("https://www.linkedin.com/in/neelam-nishad-cse/", "_blank")}>
              <img src={Linkedin}/>
            </div>
            <div className="social-media" onClick={() => window.open("https://twitter.com/Neelam_kashyap_", "_blank")}>
              <img src={Twitter}/>
            </div>
            <div className="social-media" onClick={() => window.open("//api.whatsapp.com/send?phone=918684021907&text=Hi, Reaching you through your portfolio", "_blank")}>
              <img src={Whatsapp}/>
            </div>
          </div>
          </div>
          <div className="image-top-container">
            <div className="image-container" />
            <img src={Me} className="my-image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
