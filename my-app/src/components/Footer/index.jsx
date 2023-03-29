import React from "react";
import { NavLink } from "react-router-dom";
import s from "./style.module.css";

function Footer(props) {
  return (
    <footer>
      <img
        className={s.logo}
        src={require("../Footer/images_footer/icon.png")}
      />
      <p className={s.pages}> Pages </p>
      <img
        className={s.icon}
        src={require("../Footer/images_footer/face.png")}
      />
      <img
        className={s.icon}
        src={require("../Footer/images_footer/twitt.png")}
      />
      <img
        className={s.icon}
        src={require("../Footer/images_footer/linked.png")}
      />
      <img
        className={s.icon}
        src={require("../Footer/images_footer/insta.png")}
      />

      <ul>
        <li className={s.container}>
          <p>Explore</p>
          <NavLink to="/" className={s.home}>
            ··· Home
          </NavLink>
          <NavLink to="/about" className={s.link}>
            ··· About
          </NavLink>
          <NavLink to="/articles" className={s.link}>
            ··· Articles
          </NavLink>
          <NavLink to="/store" className={s.link}>
            ··· Our Store
          </NavLink>
          <NavLink to="/contact" className={s.link}>
            ··· Contact us
          </NavLink>
        </li>
      </ul>

      <div className={s.contacts}>
        <h3>Keep in Touch</h3>
        <p>
          Address: 24A Kingston St, Los Vegas<br></br>
          NC 28202, USA.
        </p>
        <p> Mail: support@pages.com </p>
        <p>Phone: (+22) 123 - 4567 - 900 </p>
      </div>
    </footer>
  );
}

export default Footer;
