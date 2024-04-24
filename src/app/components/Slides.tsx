"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, A11y } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import slide1 from "@/public/images/slide-1.jpg";
import slide2 from "@/public/images/slide-2.jpg";
import slide3 from "@/public/images/slide-3.jpg";
import Image from "next/image";

const SLIDE_IMAGES = [
  {
    id: 1,
    image: slide1
  },
  {
    id: 2,
    image: slide2
  },
  {
    id: 3,
    image: slide3
  }
];

function Slides() {
  return (
    <Swiper
      modules={[Pagination, Scrollbar, A11y]}
      slidesPerView={1}
      draggable={false}
      loop
      pagination={{ clickable: true }}
    >
      {SLIDE_IMAGES.map((item) => {
        return (
          <SwiperSlide key={item.id}>
            <Image src={item.image} alt="slide image" className="w-full" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default Slides;
