import React from "react";
import './testimonials.css'
import Gowthamraj from './user2.avif';
import sathya from './user1.jpeg';
import prak from '././user3.avif';
import ganesh from '././user5.avif';
import sha from '././user6.avif';
import quote from './double.jpeg';
export function Testimonial(){
    return(
        <div class=" col-lg-12  d-lg-block main " id="testnimonial">
        <div class="col-lg-12  text-center p-5 ">
          <h2 className="text-white font">TESTIMONIAL<br/></h2>
            <div class="col-lg-10  mt-5 justif d-lg-flex d-lg-overflow-none   scroll1">

              <div class=" card col-lg-3 pt-5 mb-4 backcolor-banner2 scimg ">
                    <img src={quote} className="siz" />
                <div className="card-body">

                    <p class="testimonial">"Prior to choosing SH Housing, we walked through countless newly constructed homes. After seeing this apartment SH Swara, it was clear that the quality and importance they provide to the customers was next level."</p>
                    <img src={Gowthamraj} class=" borderradius"/>
                    <b><p> Amudha Sundaram </p></b>
                    <b><p>SH APPLE GARDEN Buyer </p></b>
                </div>
              </div>
              <div class=" card col-lg-3 pt-5 mb-4 backcolor-banner2 scimg ">
                    <img src={quote} className="siz" />
                <div className="card-body">

                    <p class="testimonial">"SH renders better quality in construction. I have purchased a flat at RR Swara in saravanampatti. The process of buying a property from RR is joyous one. The staffs in SH are very kind and responsive."</p>
                    <img src={sathya} class="  borderradius"/>
                    <b><p> Sahithya Mithun </p></b>
                    <b><p>SH CATCH CLOUD Buyer </p></b>
                </div>
              </div>
              <div class=" card col-lg-3  pt-5 mb-4 backcolor-banner2 scimg ">
                    <img src={quote} className="siz" />
                <div className="card-body">

                    <p class="testimonial">"I vouch for SH Housing products and their services. They are one of the finest Builder’s and my relationship with them will continue forever as they are “delivering happiness literally."</p>
                    <img src={prak} class="  borderradius"/>
                    <b><p class="">jenny s</p></b>
                    <b><p>SH ROYAL ONE Buyer</p></b>
                </div>
              </div>
              
              <div class=" card col-lg-3  pt-5  mb-4  backcolor-banner2 scimg">
                    <img src={quote} className="siz" />
                <div className="card-body">

                    <p class="testimonial">"As a Loyal customer I booked one more flat in their new project SH CATCH CLOUD @ GV Residency, Coimbatore in the year 2015."</p>
                    <img src={ganesh} class="  borderradius"/>
                    <b><p class="">kelly</p></b>
                    <b><p>SH CATCH CLOUD Buyer</p></b>
                </div>
              </div>
              
              
            </div>
            

        </div>
      </div>
              
          
      
    );
}