import React from "react";
import './contact.css'


export function Contact(){
    return(
        <>
            <div className="backk container-fluid">
                <div className="container">
                    <h1 className="text-center text-white">Contact us</h1>
                </div>
                <div className="container">
                    <form>
                        <div>

                            <input type="text" required placeholder=" Name" className="mb-5" />
                            
                        </div>
                        <div>

                            <input type="text" required placeholder=" Email"  className="mb-5"/>
                             
                        </div>
                        <div>

                        <input type="text" required placeholder="Phone Number" className="mb-5" />
                         
                        </div>
                        <div class="btn btn-primary mb-5">Send Message</div>
                    </form>
                </div>
            </div>
            {/* <div class="container-fluid backk">
                <div class="row text-center">
                        <h1>contact us</h1>
                </div>
                <div class="row">
                        <h4  className="text-center">We'd love to hear from you!</h4>
                </div>
                <div class="row input-container">
                        <div class="col-xs-12">
                            <div class="styled-input wide">
                                <input type="text" required />
                                <label>Name</label> 
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-12">
                            <div class="styled-input">
                                <input type="text" required />
                                <label>Email</label> 
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-12">
                            <div class="styled-input">
                                <input type="text" required />
                                <label>Phone Number</label> 
                            </div>
                        </div>
                        <div class="col-xs-12">
                            <div class="styled-input wide">
                                <textarea required></textarea>
                                <label>Message</label>
                            </div>
                        </div>
                        <div class="col-xs-12">
                            <div class="btn-lrg submit-btn">Send Message</div>
                        </div>
                </div>
            </div> */}

        </>
    );
}