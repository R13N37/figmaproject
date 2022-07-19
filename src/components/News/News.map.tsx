import { IProduct } from "./News.model";

import classes from "./News.module.css";
import item1 from "../../assets/images/item1.png";
import item2 from "../../assets/images/item2.png";
import item3 from "../../assets/images/item3.png";

const productItems: IProduct[] = [
  {
    clasification: "NEW",
    img: item1,
    currentImage: "beigne",
    title: "LUXVISAGE",
    price: "316 mdl",
    description: "Крем тональный skin evolution soft matte blur effect",
    currentColor: <div className={classes["currentColor1"]}></div>,
    pattern: (
      <div className={classes["pattern"]}>
        <ul className={classes["colorWrapper"]}>
          <li
            className={`${classes["patternItem1"]} ${classes["colorItem"]}`}
          ></li>
          <li
            className={`${classes["patternItem2"]} ${classes["colorItem"]}`}
          ></li>
          <li
            className={`${classes["patternItem3"]} ${classes["colorItem"]}`}
          ></li>
          <li
            className={`${classes["patternItem4"]} ${classes["colorItem"]}`}
          ></li>
          <li
            className={`${classes["patternItem5"]} ${classes["colorItem"]}`}
          ></li>
        </ul>
      </div>
    ),
  },
  {
    clasification: "NEW",
    img: item2,
    currentImage: "cream velvet",
    title: "LUXVISAGE",
    price: "120 mdl",
    description: "Помада для губ glam look cream velvet",
    currentColor: <div className={classes["currentColor2"]}></div>,
    pattern: (
      <div className={classes["pattern"]}>
        <ul className={classes["colorWrapper"]}>
          <li
            className={`${classes["patternItem1"]} ${classes["colorItem"]}`}
          ></li>
          <li
            className={`${classes["patternItem2"]} ${classes["colorItem"]}`}
          ></li>
          <li
            className={`${classes["patternItem3"]} ${classes["colorItem"]}`}
          ></li>
          <li
            className={`${classes["patternItem4"]} ${classes["colorItem"]}`}
          ></li>
          <li
            className={`${classes["patternItem5"]} ${classes["colorItem"]}`}
          ></li>
        </ul>
      </div>
    ),
  },
  {
    clasification: "NEW",
    img: item3,
    currentImage: "metal hype",
    title: "LUXVISAGE",
    price: "99 mdl",
    description: "Cияющие жидкие тени для век metal hype",
    currentColor: <div className={classes["currentColor3"]}></div>,
    pattern: (
      <div className={classes["pattern"]}>
        <ul className={classes["colorWrapper"]}>
          <li
            className={`${classes["patternItem1"]} ${classes["colorItem"]}`}
          ></li>
          <li
            className={`${classes["patternItem2"]} ${classes["colorItem"]}`}
          ></li>
          <li
            className={`${classes["patternItem3"]} ${classes["colorItem"]}`}
          ></li>
          <li
            className={`${classes["patternItem4"]} ${classes["colorItem"]}`}
          ></li>
          <li
            className={`${classes["patternItem5"]} ${classes["colorItem"]}`}
          ></li>
        </ul>
      </div>
    ),
  },
];

export default productItems;
