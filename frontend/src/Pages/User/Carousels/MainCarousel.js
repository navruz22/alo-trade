import React from "react";
import bgImg from "../../../assets/background/bg_image.png";
import bgImg1 from "../../../assets/background/1.png";
import bgImg2 from "../../../assets/background/2.png";
import bgImg3 from "../../../assets/background/3.png";
import Carousel from "react-multi-carousel";

const MainCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        infinite={true}
        autoPlaySpeed={3000}
      >
        <div className="w-[100%] h-[200px] xl:h-[500px] md:h-[400px] sm:h-[300px]">
          <img src={bgImg} alt="bg" className="w-full h-full" />
        </div>
        <div className="w-[100%] h-[200px] xl:h-[500px] md:h-[400px] sm:h-[300px]">
          <img src={bgImg1} alt="bg" className="w-full h-full" />
        </div>
        <div className="w-[100%] h-[200px] xl:h-[500px] md:h-[400px] sm:h-[300px]">
          <img src={bgImg2} alt="bg" className="w-full h-full" />
        </div>
      </Carousel>
    </div>
  );
};

export default MainCarousel;
