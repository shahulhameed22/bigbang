import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './project.css';
import three from './3bhk.jpg';
import apart from './apart2.jpg';
import apart1 from './apartment.jpg'


export function Project(){
    return(
        <>
        <div className="container-fluid main" id="project">
            <div className="container p-5">
                <h1 className="text-center text-white font">SH Housing-Real Estate</h1>
                <h1 className="text-center text-white font">Builders:on-going Projects</h1>
            </div>
            <div className="container-fluid row justify-content-around p-5">
            <div class="card col-lg-3 mb-4">
                <img src={three} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h3 class="card-title">SH APPLE GARDEN</h3>
                    <p class="card-text">3 BHK INDIVIDUAL HOUSES</p>
                    <h5 class="card-text">@peelamedu</h5>
                    <a href="#" class="btn btn-primary">FOR BOOKING</a>
                </div>
            </div>
            <div class="card col-lg-3 mb-4">
                <img src={apart} class="card-img-top" alt="..."/>
                <div class="card-body">
                <h3 class="card-title">SH CATCH CLOUD</h3>
                    <p class="card-text">2&3 BHK APPARTMENTS</p>
                    <h5 class="card-text">@saravambatti</h5>
                    <a href="#" class="btn btn-primary">FOR BOOKING</a>
                </div>
            </div>
            <div class="card col-lg-3 mb-4">
                <img src={apart1} class="card-img-top" alt="..."/>
                <div className="card-body">

                    <h3 class="card-title">SH ROYAL ONE</h3>
                    <p class="card-text">2&3 BHK APPARTMENTS</p>
                    <h5 class="card-text">@KUNIYAMUTHUR</h5>
                    <a href="#" class="btn btn-primary">FOR BOOKING</a>
                
                </div>
             </div>

            </div>
        
        </div>
        
        </>
    )
}