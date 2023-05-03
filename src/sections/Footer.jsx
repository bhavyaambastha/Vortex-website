import React from "react";
import BrandName from "../components/BrandName";
import { useScroll } from "../components/useScroll";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaFacebookF, FaTwitter } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { AiFillInstagram, AiFillLinkedin, AiOutlineSend } from "react-icons/ai";
import { motion } from "framer-motion";
import "../styles/sections/Footer.scss";
import { fromUp, fromDown } from "../utils/Animations";

function Footer() {
  const [element, controls] = useScroll();

  return (
    <div className="footer-container" ref={element}>
      <div className="container">
        <div className="main-container">
          <motion.div
            className="news-letter"
            variants={fromUp}
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            <BrandName isFooter={true} />
            <p>
              Join our newsletter to get updated with our Offers & Discounts.
            </p>
            <div className="mail">
              <input type="email" placeholder="Please Enter Your Email" />
              <button>
                <AiOutlineSend />
              </button>
            </div>
          </motion.div>
          <motion.div
            className="quick-links"
            variants={fromDown}
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#" target={"_blank"}>Home</a>
              </li>
              <li>
                <a href="#" target={"_blank"}>About Us</a>
              </li>
              <li>
                <a href="#" target={"_blank"}>Services</a>
              </li>
              <li>
                <a href="#" target={"_blank"}>Contact</a>
              </li>
              <li>
                <a href="#" target={"_blank"}>Terms & Conditions</a>
              </li>
              <li>
                <a href="#" target={"_blank"}>Privacy Policy</a>
              </li>
              <li>
                <a href="#" target={"_blank"}>Career</a>
              </li>
            </ul>
          </motion.div>
          <motion.div
            className="industries"
            variants={fromUp}
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            <h3>Services</h3>
            <ul>
              <li>
                <a href="#" target={"_blank"}>Website Development</a>
              </li>
              <li>
                <a href="#" target={"_blank"}>Mobile App Development</a>
              </li>
              <li>
                <a href="#" target={"_blank"}>Website Design</a>
              </li>
              <li>
                <a href="#" target={"_blank"}>Mobile App Design</a>
              </li>
              <li>
                <a href="#" target={"_blank"}>Digital Marketing</a>
              </li>
              <li>
                <a href="#" target={"_blank"}>Graphic Design</a>
              </li>
              <li>
                <a href="#" target={"_blank"}>IOS App Development</a>
              </li>
            </ul>
          </motion.div>
          <motion.div
            className="touch"
            variants={fromDown}
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            <h3>Get in Touch</h3>
            <div className="touch-section">
              <div className="icon">
                <MdEmail />
              </div>
              <div className="detail">
                <div className="detail-name">Email</div>
                <div className="detail-content">
                  <a href="mailto: info@vortexfilms.cc" target={"_blank"}>info@vortexfilms.cc</a>
                </div>
              </div>
            </div>
            <div className="touch-section">
              <div className="icon">
                <FaPhoneAlt />
              </div>
              <div className="detail">
                <div className="detail-name">Phone</div>
                <div className="detail-content">
                  <a href="tel: +91-8292761729" target={"_blank"}>+91-8292761729</a>
                </div>
              </div>
            </div>

            <div className="touch-section">
              <div className="icon">
                <ImLocation />
              </div>
              <div className="detail">
                <div className="detail-name">Location</div>
                <div className="detail-content">
                  <a href="#" target={"_blank"}>34-35 2nd Floor, Leonard Square Yogi Chowk, Surat - 395010</a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="copyright">
          <div className="copy">
            <p>Copyright © 2022 | Vortex</p>
          </div>
          <div className="icons">
            <div className="icon">
              <a href="#" target={"_blank"}>
                <FaFacebookF />
              </a>
            </div>
            <div className="icon">
              <a href="https://www.instagram.com/vortexfilms.cc/" target={"_blank"}>
                <AiFillInstagram />
              </a>
            </div>
            <div className="icon">
              <a href="https://www.linkedin.com/company/vortex-films00/" target={"_blank"}>
                <AiFillLinkedin />
              </a>
            </div>
            <div className="icon">
              <a href="https://twitter.com/VortexFilms_/" target={"_blank"}>
                {" "}
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
