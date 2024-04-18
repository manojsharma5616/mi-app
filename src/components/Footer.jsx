import React from "react";
import { BsArrowRepeat } from "react-icons/bs";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { CiMap } from "react-icons/ci";
import { MdArrowForwardIos } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import "../styles/Footer.css";
const Footer = ({ footer }) => {
  return (
    <div className="footer">
      <div className="preFooter">
        <div>
          <BsArrowRepeat />
          <p>
            <b>Hassle-free replacement</b>
            <br />
            10-day easy replacement policy on mi.com
          </p>
        </div>
        <div>
          <IoShieldCheckmarkOutline />
          <p>
            <b>100% secure payments</b> <br /> We support Cards, Wallets, EMI
            and COD
          </p>
        </div>
        <div>
          <CiMap />
          <p>
            <b>Vast service network</b> <br /> 1000 Mi service-centers across
            600 cities
          </p>
        </div>
      </div>
      <div className="preFooter-2">
        <div>
          <p>LET'S STAY IN TOUCH</p>
          <span>Get updates on sales specials and more</span>
        </div>
        <div>
          <div>
            <input type="email" placeholder="Enter Email Address" />
            <MdArrowForwardIos />
          </div>
          <span>Thanks. You're on our email list for special offers.</span>
        </div>
        <div>
          <p>FOLLOW MI</p>
          <span>We want to hear from you!</span>
        </div>
        <div>
          <FaFacebookF />
          <FaYoutube />
          <FaInstagram />
          <IoLogoTwitter />
        </div>
      </div>
      <div className="preFooter-3">
        <div>
          <p>SUPPORT</p>
          {footer.support.map((item, index) => (
            <a key={item.url} href={item.url}>
              {item.name}
            </a>
          ))}
        </div>
        <div>
          <p>SHOP AND LEARN</p>
          {footer.shopAndLearn.map((item, index) => (
            <a key={item.url} href={item.url}>
              {item.name}
            </a>
          ))}
        </div>
        <div>
          <p>RETAIL STORE</p>
          {footer.retailStore.map((item, index) => (
            <a key={item.url} href={item.url}>
              {item.name}
            </a>
          ))}
        </div>
        <div>
          <p>ABOUT US</p>
          {footer.aboutUS.map((item, index) => (
            <a key={item.url} href={item.url}>
              {item.name}
            </a>
          ))}
        </div>
        <div>
          <p>CONTACT US</p>
          {footer.contactUs.map((item, index) => (
            <a key={item.url} href={item.url}>
              {item.name}
            </a>
          ))}
        </div>
        <div>
          <p>Chat with our Virtual AI Bot(24/7 Live Agent Support)</p>
          <button>CHAT NOW</button>
        </div>
      </div>
      <div className="copyRight">
        <div>Copyright @ 2010 - 2021 xiamoi. All Rights Reserved</div>
      </div>
    </div>
  );
};

export default Footer;
