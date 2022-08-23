import React from "react";
import "./Footer.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <div className="container-fluid footer_wrapper">
      <div className="container footer_section">
        <div className="row">
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 footer_web_about">
            <p className="footer_title">Foolish Developer</p>
            <p className="footer_title_about">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dumm
            </p>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 footer_social_link_column">
            <div className="footer_social_link">
           <div><InstagramIcon style={{fontSize:"40px"}} /></div>
           <div><FacebookIcon style={{fontSize:"40px"}} /></div>
           <div><LinkedInIcon style={{fontSize:"40px"}}/></div>
           </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 footer_news_letter">
            <p>Newsletter</p>
            <div className="footer_news_input_box">
            <input type="text" placeholder="Write your Email" />
            <button>Subscribe</button>
            </div>
            
          </div>
        
        </div>

        <hr></hr>

        <div className="row">
          <div className="col-xxl-12 madeby_me">
            <p>Gym WebApp by Hiren Patel</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
