import React, { Children, PropsWithChildren } from "react";

import classes from "./CardItem.module.css";

type Props = {
  clasification: string;
  img: string;
  currentImage: string;
  currentColor: JSX.Element;
  title: string;
  price: string;
  description: string;
  pattern: JSX.Element;
};

const CardItemView: React.FC<Props> = (props: PropsWithChildren<Props>) => {
  return (
    <div className={classes["wrapper"]}>
      <img className={classes["image"]} src={props.img} />
      <div className={classes["itemProduct"]}>
        <div className={classes["clasification"]}>{props.clasification}</div>
        <div className={classes["colorsPallete"]}>
          <div className={classes["currentColor"]}>{props.currentColor}</div>
          <div className={classes["currentImage"]}>{props.currentImage}</div>
        </div>
        <div className={classes["patern"]}>{props.pattern}</div>
      </div>
      <div className={classes["info"]}>
        <div className={classes["title"]}>{props.title}</div>
        <div className={classes["price"]}>{props.price}</div>
        <div className={classes["description"]}>{props.description}</div>
      </div>
    </div>
  );
};

export default CardItemView;
