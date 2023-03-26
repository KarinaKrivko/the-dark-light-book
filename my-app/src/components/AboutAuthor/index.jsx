import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./style.module.css";



function AboutAuthor(props) {
    return (
        <div>
            <NavLink to="/author" />
            <p className={s.author}>About Author's Book</p>
        </div>
    );
}

export default AboutAuthor;