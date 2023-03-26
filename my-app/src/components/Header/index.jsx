import React from "react";
import { NavLink } from "react-router-dom";
import s from "./style.module.css";

function Header(props) {
  return (
    <header>
      <img className={s.logo} src={require("./images/icon.png")} />
      <p className={s.pages}> Pages </p>
      <nav className={s.container}>
        <NavLink to="/" className={s.home}>
          Home
        </NavLink>
        <NavLink to="/author" className={s.link}>
          Author
        </NavLink>
        <NavLink to="/companies" className={s.link}>
          Companies
        </NavLink>
        <NavLink to="/articles" className={s.link}>
          Articles
        </NavLink>
      </nav>
      <button className={s.btn}>Order Today </button>
    </header>
  );
}

export default Header;
