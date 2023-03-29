import React from "react";
import s from "./style.module.css";
import { NavLink } from "react-router-dom";

function Main(props) {
  return (

    <div className={s.container}>
      <p className={s.welcome}>Welcome To Pages!!!</p>

      <p className={s.best_writer}>Your Books From <br></br>
      The Best Writer.</p>

      <p className={s.believe}>
        We believe that reading books are essential to a healthy culture.{" "}
        <br></br>
        They're where authors can connect with readers.
      </p>

      <img className={s.book} src={require("./book.png")} alt="book" />

      <button className={s.btn}>Order Today </button>

      <NavLink to="/demo" className={s.demo}>
        Read Free Demo
      </NavLink>

      <ul className={s.info}>
        <li>Pages:</li><br></br>
        <li>Length:</li><br></br>
        <li>Rating:</li><br></br>
      </ul>

      <div className={s.extra_info}>
        <p>250pages</p><br></br>
        <p>10 Hours</p><br></br>
        <p>4.5/5(305 ratings)</p><br></br>
      </div>
    </div>
   
  );
}

export default Main;
