import React from "react";

import classes from "./Footer.module.css";
import { FiFacebook, FiInstagram } from "react-icons/fi";

const FooterView = () => {
  return (
    <div className={classes["wrapper"]}>
      <div className={classes["contact"]}>
        <div className={classes["part1"]}>
          <div className={classes["title"]}>(+373) 06 02 93 933</div>
          <div className={classes["desc"]}>delimira.md@gmail.com</div>
        </div>
        <div className={classes["part2"]}>
          <div className={classes["title"]}>CC Atrium</div>
          <div className={classes["desc"]}>
            Улица Албишоара 4, Кишинев 2001, Молдова 2 этаж, бутик # 23
          </div>
        </div>
      </div>
      <div className={classes["info"]}>
        <div className={classes["infoTitle"]}>Полезная информация</div>
        <div className={classes["buttonContainer"]}>
          <div className={classes["button"]}>Политика конфиденциальности</div>
          <div className={classes["button"]}>Доставка и оплата</div>
          <div className={classes["button"]}>О нас</div>
          <div className={classes["button"]}>Контакты</div>
        </div>
      </div>
      <div className={classes["follow"]}>
        <div className={classes["text"]}>следите за нами</div>
        <div className={classes["icons"]}>
          <FiFacebook className={classes["iconsSocial"]} />
          <FiInstagram className={classes["iconsSocial"]} />
        </div>
      </div>
    </div>
  );
};

export default FooterView;
