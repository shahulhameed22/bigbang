import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';
import logo from './logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faDiagramProject, faHome, faImage, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link as Scroll } from "react-scroll";

export function Header(){
    return(
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light posi">
            <a class="navbar-brand col-lg-2 col-4"  >
                <img src={logo} className="col-lg-6"/>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item row pr-4">
                    <FontAwesomeIcon icon={faHome} className="mt-2 iconcustom"></FontAwesomeIcon><Scroll activeClass="active" to="home" spy={true} smooth={true} duration={700}> <a class="nav-link"  >Home</a></Scroll>
                </li>
                <li class="nav-item row pr-4">
                    <FontAwesomeIcon icon={faAddressCard} className="mt-2 iconcustom"></FontAwesomeIcon><Scroll activeClass="active" to="about" spy={true} smooth={true} duration={700}> <a class="nav-link"  >About</a></Scroll>
                </li>
                <li class="nav-item row pr-4">
                    <FontAwesomeIcon icon={faDiagramProject} className="mt-2 iconcustom"></FontAwesomeIcon><Scroll activeClass="active" to="project" spy={true} smooth={true} duration={700}> <a class="nav-link">Projects</a></Scroll>
                </li>
                <li class="nav-item row pr-4">
                    <FontAwesomeIcon icon={faUser} className="mt-2 iconcustom"></FontAwesomeIcon><Scroll activeClass="active" to="testnimonial" spy={true} smooth={true} duration={700}><a class="nav-link"  >Testimonials</a></Scroll>
                </li>
                <li class="nav-item row pr-4">
                    <FontAwesomeIcon icon={faImage} className="mt-2 iconcustom"></FontAwesomeIcon><Scroll activeClass="active" to="gallery" spy={true} smooth={true} duration={700}><a class="nav-link"  >Gallery</a></Scroll>
                </li>
                <li class="nav-item row pr-4">
                    <FontAwesomeIcon icon={faPhone} className="mt-2 iconcustom"></FontAwesomeIcon><Scroll activeClass="active" to="contact" spy={true} smooth={true} duration={700}> <a class="nav-link"  >Contact</a></Scroll>
                </li>
                
                </ul>
            </div>
            </nav>
        </>

    );
}