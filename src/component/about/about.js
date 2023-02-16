import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './about.css';
import about from './aboutimg1.jpg'

export function About(){
    return(
        <>
        <div className="container-fluid p-5" id="about">
            <h1 className="text-center font">About Us</h1>
        </div>
        <div className="container-fluid row">
            <div className="col-lg-6 p-5">
                <img src={about} className="col-lg-8 "/>
            </div>
            <div className="col-lg-6 p-5">
                <p className="aboutpara">We are one of the leading construction and real estate company in Coimbatore providing quality design and construction with fully vastu complaint gated community flats and row houses for the last 30 years. Delivered over 20 lakhs square feet of construct area to more then 1000 happy families.</p>

                <p className="aboutpara">From small beginnings, handling government construction projects, we have grown in stature and our mark as a trusted name in business. Today some of the finest residential enclaves in the city bear the hallmark of our expertise and experience.  We started out in 1991 and our growth story has been nothing short of spectacular. Our commitment to deliver quality across all areas of the business has been a prime factor in strong customer acceptance across the year.</p>
            </div>

        </div>
            </>

    );
}