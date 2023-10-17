import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Grid, Pagination } from "swiper/modules";
import { artworks } from "../assets";

export default function SwiperScroll() {
  const swiperStyle = {
    background: "white",
    height: "60vw",
    width: "60vw",
    color: "black",
    borderRadius: "16px",
    minHeight: "248px",
    minWidth: "320px",
    maxHeight: "356px",
    maxWidth: "956px",
  };

  const slideStyle = {
    textAlign: "center",
    fontSize: "18px",
    background: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "calc((100% - 30px) / 2) !important",
  };

  const imgStyle = {
    display: "block",
    width: "100%",
    height: "100%",
    objectFit: "cover",
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
      <Swiper
        slidesPerView={2}
        grid={{
          rows: 1,
        }}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        style={swiperStyle}
      >
        {artworks.map((art, index) => (
          <SwiperSlide key={Math.random() * index} style={slideStyle}>
            <img style={imgStyle} src={art} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
