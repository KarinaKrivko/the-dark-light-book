import React from "react";
import s from "./style.module.css";

function MainPage(props) {
  return (
    <div className={s.container}>
      <p className={s.welcome}>Welcome To Pages!!!</p>
      <h1>
        Your Books From <br></br>
        The Best Writer.
      </h1>
      <p className={s.believe}>
        We believe that reading books are essential to a healthy culture.{" "}
        <br></br>
        They're where authors can connect with readers.
      </p>
      <img className={s.book} src={require("./book.png")} alt="book" />
      <button className={s.btn}>Order Today </button>
      <p className={s.demo}>Read Free Demo</p>

      <ul className={s.info}>
        <li>Pages:</li>
        <li>Length:</li>
        <li>Rating:</li>
      </ul>

      <div className={s.extra_info}>
        <p>250pages</p>
        <p>10 Hours</p>
        <p>4.5/5(305 ratings)</p>
      </div>
    </div>
  );
}

export default MainPage;
