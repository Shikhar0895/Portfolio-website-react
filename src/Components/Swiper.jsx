import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import {
  EffectCoverflow,
  Pagination,
  Keyboard,
  Navigation,
} from "swiper/modules";
import { artworks } from "../assets";

export default function SwiperScroll() {
  const [slideNum, setSlideNum] = useState(window.innerWidth > 640 ? 2 : 1);

  useEffect(() => {
    const handleslidesPerView = () => {
      setSlideNum(window.innerWidth > 640 ? 3 : 1);
    };

    window.addEventListener("resize", handleslidesPerView);

    return () => {
      window.removeEventListener("resize", handleslidesPerView);
    };
  }, []);

  console.log(screen);

  const swiperStyle = {
    background: "white",
    width: "100%",
    height: "100%",
    color: "black",
    // minHeight: "248px",
    minWidth: "100%",
    // maxHeight: "356px",
    // maxWidth: "956px",
    backgroundColor: "rgb(23 19 33)",
  };

  const slideStyle = {
    textAlign: "center",
    fontSize: "18px",
    background: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "calc((100% - 30px) / 2) !important",
    backgroundColor: "rgb(23 19 33)",
    borderRadius: "60px",
  };

  const imgStyle = {
    display: "block",
    width: "100%",
    height: "100%",
    objectFit: "scale-down",
  };
  return (
    <>
      {/* <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        style={swiperStyle}
      >
        
        {artworks.map((art, index) => (
          <SwiperSlide key={Math.random() * index} style={slideStyle}>
            <img style={imgStyle} src={art} />
          </SwiperSlide>
        ))}
        
      </Swiper> */}
      {/* <Swiper
        slidesPerView={1}
        grid={{
          rows: 1,
        }}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        style={swiperStyle}
      > */}
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        keyboard={{
          enabled: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Keyboard, Navigation]}
        className="mySwiper"
        style={swiperStyle}
      >
        {artworks.map((art, index) => (
          <SwiperSlide key={Math.random() * index} style={slideStyle}>
            <img style={imgStyle} src={art} />
          </SwiperSlide>
        ))}
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </>
  );
}
