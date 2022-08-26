import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./MainSlide.module.css";

import image1 from "../../images/banner/banner1.png";
import image2 from "../../images/banner/banner2.png";
import image3 from "../../images/banner/banner3.png";
import image4 from "../../images/banner/banner4.png";
import image5 from "../../images/banner/banner5.png";

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "red" }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "green" }}
//       onClick={onClick}
//     />
//   );
// }

export default class MainSlide extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      swipeToSlide: true,
      // nextArrow: <SampleNextArrow />,
      // prevArrow: <SamplePrevArrow />,
    };
    return (
      <div>
        <Slider ref={(slider) => (this.slider = slider)} {...settings}>
          <div>
            <div className={styles.image}>
              <img src={image1} alt="img1" />
            </div>
          </div>
          <div>
            <div className={styles.image}>
              <img src={image2} alt="img2" />
            </div>
          </div>
          <div>
            <div className={styles.image}>
              <img src={image3} alt="img3" />
            </div>
          </div>
          <div>
            <div className={styles.image}>
              <img src={image4} alt="img4" />
            </div>
          </div>
          <div>
            <div className={styles.image}>
              <img src={image5} alt="img5" />
            </div>
          </div>
        </Slider>
        <div className={styles.image__dots}>
          <button className="button" onClick={this.play}>
            Play
          </button>
          <button className="button" onClick={this.pause}>
            Pause
          </button>
        </div>
      </div>
    );
  }
}
