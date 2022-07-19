import React from "react";

import classes from "./NavBar.module.css";
import logo from "../../assets/logo.png";
import { FiSearch } from "react-icons/fi";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineShopping } from "react-icons/ai";

const NavBarView = () => {
  return (
    <div className={classes["wrapper"]}>
      <div className={classes["header"]}>
        <img className={classes["logo"]} src={logo} />
        <div className={classes["name"]}>BEAUTY</div>
      </div>
      <div className={classes["search"]}>
        <input className={classes["input"]} placeholder="Search"></input>
        <FiSearch className={classes["searchIcon"]} />
      </div>
      <div className={classes["buttons"]}>
        <div className={classes["buttonsText"]}>О нас</div>
        <div className={classes["separator"]}></div>
        <div className={classes["buttonsText"]}>Доставка и Оплата</div>
        <div className={classes["separator"]}></div>
        <div className={classes["buttonsText"]}>Контакты</div>
        <div className={classes["separator"]}></div>
        <div className={classes["buttonsText"]}>Ру</div>
      </div>
      <div className={classes["iconsWrapper"]}>
        <div className={classes["icons"]}>
          <BiUserCircle className={classes["user"]} />
          <AiOutlineShopping className={classes["shop"]} />
        </div>
        <div className={classes["price"]}>0 mdl</div>
      </div>
    </div>
  );
};

export default NavBarView;
