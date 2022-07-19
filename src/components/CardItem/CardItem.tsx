import React from "react";
import CardItemView from "./CardItem.view";

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

const CardItem: React.FC<Props> = (props: Props) => {
  return (
    <CardItemView
      clasification={props.clasification}
      img={props.img}
      currentImage={props.currentImage}
      title={props.title}
      price={props.price}
      description={props.description}
      currentColor={props.currentColor}
      pattern={props.pattern}
    ></CardItemView>
  );
};

export default CardItem;
