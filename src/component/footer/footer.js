import React from "react";
import './footer.css';
import logo from './logo.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTwitter,faFacebook,faInstagram,faYoutube,faLinkedin, faWhatsapp} from '@fortawesome/free-brands-svg-icons'
export function Footer(){
    return(
        <div className="footer" id="contact">
            <div className="contrainer-fluid">
                <h2 className="text-center text-white pt-5 font">Contact Us</h2>
            </div>
        
            <div class="text-white row container-fluid p-5">
                <div class="col-lg-3">
                    
                    <p> <span class="city"> HEAD OFFICE </span><br/> No15 C-a, Shringar Nagar, Bharathi Colony Rd, Peelamedu, <br/> 
                    Coimbatore, Tamil Nadu 641004 India.
                    <br/> Mobile: <a href="tel:8575181751">85751-81751 &nbsp;</a>/ <a href="tel:04223500110">0422 3500 110 &nbsp;</a> <br/> Mail: <a href="mailto:hello@bigbang.biz">hello@bigbang.biz&nbsp;</a><br/>  
                    </p> <br/>
                </div>
                    <div className="col-lg-2">

                        <a href="#">Home</a><br/>
                        <a href="#">About Us</a><br/>
                        <a href="#">Projects</a><br/>
                        <a href="#">Testimonials</a><br/>
                        <a href="#">Gallery</a><br/>
                        <a href="#">Contact</a><br/>
                    </div>
                    
                    
                    <div className="col-lg-4">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.167102436413!2d76.99420091744385!3d11.026086399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859a1b179b075%3A0xe499ea577ca32005!2sBigBang!5e0!3m2!1sen!2sin!4v1676524885133!5m2!1sen!2sin" className="col-lg-8"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div class="col-lg-3">
                    <h3 className="text-white">Follows Us On:
                    </h3>
                        <h3>
                            <a href="https://twitter.com/bigbangbranding"><FontAwesomeIcon icon={faTwitter}  className="iconcustom ml-3"/></a>
                            <a href="https://www.facebook.com/thebigbangcreations"><FontAwesomeIcon icon={faFacebook} className="iconcustom ml-3"/></a>
                            <a href="https://wwhttps://www.instagram.com/bigbang.biz/"><FontAwesomeIcon icon={faInstagram} className="iconcustom ml-3"/></a>
                            <a href="https://api.whatsapp.com/message/K5MRY3D5JAO6A1?autoload=1&app_absent=0"><FontAwesomeIcon icon={faWhatsapp} className="iconcustom ml-3"/></a>
                            <a href="https://www.linkedin.com/company/bigbang-creation/"><FontAwesomeIcon icon={faLinkedin} className="iconcustom  ml-3"/></a>
                        </h3>
                    </div>
                
                
            </div>
                <div class="col-lg-12 text-center border-top text-white">
                
                    <p>Copyright © 2023 BigBang. All Right Reserved.</p>
                </div>
        </div>
    );
}