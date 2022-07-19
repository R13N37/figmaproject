import Slider from "react-slick";
import classes from "./Slider.module.css";

const SliderView = () => {
  var settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    vertical: true,
    speed: 1000,
    verticalSwiping: true,
  };
  return (
    <div className={classes["wrapper"]}>
      <Slider {...settings}>
        <div className={classes["sliderItem1"]}>
          <div className={classes["info"]}>
            <div className={classes["header"]}>
              <div className={classes["title"]}>LAMEL</div>
              <div className={classes["desc"]}>PROFFESIONAL MAKE UP</div>
            </div>
            <div className={classes["content"]}>
              <div className={classes["main"]}>
                дополнительный объем ваших губ
              </div>
              <div className={classes["description"]}>
                Professional Lip Cream Plump & Care Icon
              </div>
            </div>
          </div>
        </div>
        <div className={classes["sliderItem2"]}>
          <div className={classes["info"]}>
            <div className={classes["header"]}>
              <div className={classes["title"]}>LAMEL</div>
              <div className={classes["desc"]}>PROFFESIONAL MAKE UP</div>
            </div>
            <div className={classes["content"]}>
              <div className={classes["main"]}>
                дополнительный объем ваших губ
              </div>
              <div className={classes["description"]}>
                Professional Lip Cream Plump & Care Icon
              </div>
            </div>
          </div>
        </div>
        <div className={classes["sliderItem3"]}>
          <div className={classes["info"]}>
            <div className={classes["header"]}>
              <div className={classes["title"]}>LAMEL</div>
              <div className={classes["desc"]}>PROFFESIONAL MAKE UP</div>
            </div>
            <div className={classes["content"]}>
              <div className={classes["main"]}>
                дополнительный объем ваших губ
              </div>
              <div className={classes["description"]}>
                Professional Lip Cream Plump & Care Icon
              </div>
            </div>
          </div>
        </div>
        <div className={classes["sliderItem4"]}>
          <div className={classes["info"]}>
            <div className={classes["header"]}>
              <div className={classes["title"]}>LAMEL</div>
              <div className={classes["desc"]}>PROFFESIONAL MAKE UP</div>
            </div>
            <div className={classes["content"]}>
              <div className={classes["main"]}>
                дополнительный объем ваших губ
              </div>
              <div className={classes["description"]}>
                Professional Lip Cream Plump & Care Icon
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SliderView;
