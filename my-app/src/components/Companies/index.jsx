import React from "react";
import { NavLink } from "react-router-dom";
import s from "./style.module.css";

function Companies(props) {
  return (
    <div className={s.block_one}>
      <NavLink to="/companies" /> 
      <h1>Trusted By The Best</h1>
      <img className={s.line} src={require("./images/line.png")} />

      <div className={s.companies}>
        <div>
          <img className={s.img} src={require("./images/amazen.png")} />
          <p className={s.amazen}>Amazen Corp.</p>
          <p className={s.one}>
            They has been helping readers, music lovers, and videophiles find
            quality material.
          </p>
        </div>

        <div>
          <img className={s.img} src={require("./images/megan_books.png")} />
          <p className={s.megan}>Megan Books</p>
          <p className={s.two}>
            We help physical bookstores manage their overstock to the book
            inventory.
          </p>
        </div>

        <div>
          <img className={s.img} src={require("./images/megank.png")} />
          <p className={s.megank}>Megank</p>
          <p className={s.three}>
            Bookstore serving up the full spectrum of Black literature and wine
            black books.
          </p>
        </div>

        <div>
          <img className={s.img} src={require("./images/urban_store.png")} />
          <p className={s.urban}>Urban Store</p>
          <p className={s.four}>
            We also carry the latest records, issues of all of your favorite
            comic books.
          </p>
        </div>
      </div>
      <div className={s.block_two}>
        <p className={s.getCopy}>Get Book Copy Today!</p>
        <img className={s.underline} src={require("./images/line.png")} />
        <p className={s.text}>
          We believe that bookstores are essential to a healthy <br></br>
          culture. They’re where authors can connect with readers.
        </p>
        <img className={s.coffee_pic} src={require("./images/coffee_magazine.png")} />

      </div>
    </div>
  );
}

export default Companies;
