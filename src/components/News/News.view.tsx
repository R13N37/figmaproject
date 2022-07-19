import React from "react";

import { BsArrowRight } from "react-icons/bs";
import classes from "./News.module.css";
import example from "../../assets/images/example.png";
import productItems from "./News.map";
import { IProduct } from "./News.model";
import CardItem from "../CardItem/CardItem";

const NewsView = () => {
  return (
    <div className={classes["wrapper"]}>
      <div className={classes["leftSide"]}>
        <img className={classes["image"]} src={example} />
      </div>
      <div className={classes["rightSide"]}>
        <div className={classes["news"]}>Новинки</div>
        <div className={classes["goToNews"]}>
          Перейти к новинкам <BsArrowRight className={classes["rightArrow"]} />
        </div>
        <div className={classes["products"]}>
          {productItems.map((item: IProduct) => {
            return (
              <CardItem
                clasification={item.clasification}
                img={item.img}
                currentImage={item.currentImage}
                title={item.title}
                price={item.price}
                description={item.description}
                currentColor={item.currentColor}
                pattern={item.pattern}
              ></CardItem>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NewsView;
