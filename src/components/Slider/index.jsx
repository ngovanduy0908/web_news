import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderPage = ({ slides }) => {
  return (
    <div>
      <Slider autoplaySpeed={4000}>
        {slides.map((slide) => (
          <div key={slide.id}>
            <img src={slide.img} alt={slide.caption} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderPage;
