import React from "react";
import {IoLogoWhatsapp} from 'react-icons/io'
import {BsFacebook} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'
import './footer.css'
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container footer-container">
          <div className="location">
            <h4>LOCATION</h4>
            <p>We are located in Nairobi, but offer our services  countrywide.</p>
          </div>
          <div className="our-socials">
            <h4>FOLLOW US</h4>
            <div className="social-icons">
              <a href="https://wa.me/+254797950449"><IoLogoWhatsapp/></a>
              <a href=""><BsFacebook/></a>
              <a href=""><AiOutlineTwitter/></a>
              <a href=""><FaLinkedinIn/></a>
            </div>

          </div>
          <div className="about-we">
            <h4>ABOUT</h4>
            <p>Lorem, ipsum dolor . Adipisci, reiciendis.</p>
          </div>

        </div>
      </footer>
   
  

    </>

  )
}

export default Footer