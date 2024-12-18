import React from "react";
import style from "./Header.module.scss";
import { FaSearch } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
const Header = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.upContainer}>
          <div className={style.faq}>
            <p>About Us</p>
            <p>Privacy</p>
            <p>FAQ</p>
            <p>Contact</p>
          </div>
          <div className={style.my}>
            <div className={style.wish}>
                <p>My Wishlist</p>
                <p>Track Yourt Order</p>
            </div>
            <div className={style.contact}>
                <i><FaInstagram /></i>
                <i><FaYoutube /></i>
                <i><FaFacebook /></i>
                <i><FaTwitter /></i>
                <i><FaLinkedin /></i>
            </div>
          </div>
        </div>
        <div className={style.bottomContainer}>
            <div className={style.logo}>
              <img src="https://preview.colorlib.com/theme/capitalshop/assets/img/logo/logo.png" alt="logo" />
            </div>
            <div className={style.navbar}>
              <nav>
                <ul>
                  <li><a href="">Home</a></li>
                  <li><a href="">Men</a></li>
                  <li><a href="">Women</a></li>
                  <li><a href="">Baby Collection</a></li>
                  <li><a href="">Pages</a></li>
                  <li><a href="">Blog</a></li>
                  <li><a href="">Contact</a></li>
                </ul>
              </nav>
            </div>
            <div className={style.iconbox}>
                <i><FaSearch /></i>
                <i><IoPersonOutline /></i>
                <i><SlBasket /></i>
            </div>
        </div>
      </div>
    </>
  );
};

export default Header;
