import React from "react";
import s from "./style.module.css";

function Header(props) {
  return (
    <header>
      <img className={s.logo} src={require("./images/icon.png")} />
      <p className={s.pages}>Pages</p>
      <nav className={s.container}>
        <p className={s.home}> Home </p>
        <p> Author </p>
        <p>Companies </p>
        <p>Articles </p>
      </nav>
      <button className={s.btn}>Order Today </button>
    </header>
  );
}

export default Header;
