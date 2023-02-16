import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './banner.css';
import plan from './plan.jpg'
import plan1 from './plan1.jpg'
import { Link as Scroll } from "react-scroll";
export function Banner(){
    return(
    <>
    <div className="container-fluid row main" id="home">
            <div className="col-lg-6 p-5 text-center">
                <p className="quotes mt-5">"We don't build buildings</p>
                <p className="quotes mt-3">We build Wonder's"</p>
                <Scroll activeClass="active" to="contact" spy={true} smooth={true} duration={700}><input type="button" className="btn btn-success custbutton" value="Contact US"/></Scroll>
            </div>
            <div className="col-lg-6 p-5 ">
                <img src={plan} className="col-lg-6 pb-3 custombanner"/>
                <img src={plan1} className="col-lg-4 custombanner1"/>
            </div>

    
    </div>
    </>
    );
}