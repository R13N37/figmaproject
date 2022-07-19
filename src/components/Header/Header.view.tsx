import React from "react";

import { HiMenuAlt2 } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
import classes from "./Header.module.css";

const HeaderView = () => {
  return (
    <div className={classes["wrapper"]}>
      <div className={classes["content"]}>
        <ul className={classes["itemsWrapper"]}>
          <li className={classes["item"]}>
            <HiMenuAlt2 className={classes["listIcon"]} />
            Каталог
          </li>
          <li className={classes["item"]}>Лицо</li>
          <li className={classes["item"]}>Глаза</li>
          <li className={classes["item"]}>Брови</li>
          <li className={classes["item"]}>Губы</li>
          <li className={classes["item"]}>Кисти</li>
          <li className={classes["item"]}>Ресницы</li>
          <li className={classes["item"]}>Волосы</li>
          <li className={classes["item"]}>Уход за лицом </li>
          <li className={classes["itemCustomize"]}>
            ЕЩЕ <IoMdArrowDropdown className={classes["listIcon"]} />
          </li>
        </ul>
        <ul className={classes["itemsWrapper"]}>
          <li className={classes["item"]}>Новинки</li>
          <li className={classes["item"]}>Скидки</li>
          <li className={classes["item"]}>Бренды</li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderView;
