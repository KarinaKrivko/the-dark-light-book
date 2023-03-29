import React from "react";
import { NavLink } from "react-router-dom";
import s from "./style.module.css";

function AboutAuthor(props) {
  return (
    <div className={s.about_books}>
      <h1>The Author's Book</h1>
      <img className={s.line} src={require("./images/line.png")} />

      <NavLink to="/author" />
      <div className={s.container_one}>
        <div>
          <img className={s.img} src={require("./images/atomicBook.png")} />
        </div>
        <div>
          <p className={s.atomic}>Atomic One's</p>
          <p className={s.dollar}>$ 13.84 USD</p>
          <p className={s.description}>
            As the book contains theoretical content as well as solved
            questions.
          </p>
          <img className={s} src={require("./images/circle.png")} />
          <p className={s.book}>Printed Book</p>
        </div>

        <div>
          <img className={s.img} src={require("./images/darkLight.png")} />
        </div>

        <div>
          <p className={s.dark_light}>The Dark Light</p>
          <p className={s.dollar}>$ 86.11 USD</p>
          <p className={s.description}>
            As the book contains theoretical content as well as solved
            questions.
          </p>
          <img className={s} src={require("./images/circle.png")} />
          <p className={s.book}> Printed Book</p>
        </div>
      </div>

      <div className={s.container_two}>
        <div>
          {/* <img className={s} src={require("./images/frame.png")} /> */}
          <img className={s.photo} src={require("./images/author.png")} />
        </div>

        <div>
          <h2>About the Author</h2>
          <img className={s} src={require("./images/line.png")} />
          <p className={s.stories}>
            {" "}
            We believe that bookstores are essential to a healthy culture.
            They’re where authors can connect with readers, where we discover
            new writers, where children get hooked on the thrill of reading that
            can last a lifetime.
          </p>

          <div className={s.numbers}>
            <img className={s} src={require("./images/02.png")} />
            <img className={s} src={require("./images/4.5.png")} />
            <img className={s} src={require("./images/04.png")} />
            <p>Books Published</p>
            <p>User Reviews</p>
            <p>Best Seller Awards </p>
          </div>

          <div className={s.code_container}>
            <img className={s.qr} src={require("./images/code.png")} />
            <p className={s.name}>John Abraham , Ph.d</p>
            <email>Mail: johnabraham@gmail.com </email>
            <phone>Phone: (+2) 123 545 9000</phone>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutAuthor;
