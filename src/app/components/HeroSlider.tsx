"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, A11y } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

import hero1 from "@/public/images/hero-1.jpg";
import hero2 from "@/public/images/hero-2.jpg";
import hero3 from "@/public/images/hero-3.jpg";
import arrow_right from "@/public/images/icons/arrow-right.svg";

const SLIDE_IMAGES = [
  {
    id: 1,
    image: hero1,
    title: "MAKE BELIEVE",
    text: "Sales on selected SONY products"
  },
  {
    id: 2,
    image: hero2,
    title: "PICTURE PERFECT DEALS",
    text: "Browse our second-hand gear market"
  },
  {
    id: 3,
    image: hero3,
    title: "NEW ARRIVALS",
    text: "The newest and latest advances in technology"
  }
];

function HeroSlider() {
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
            <div className="relative">
              <Image
                src={item.image}
                alt="slide image"
                className="w-full md:h-[unset] h-[90vh] md:object-[unset] object-cover"
              />

              <div className="absolute md:p-16 p-4 md:bottom-10 md:left-10 bottom-20 left-0">
                <div className="backdrop-blur-[2px] md:bg-black/5 text-ui-white">
                  <h2 className="md:text-6xl text-3xl font-bold">
                    {item.title}
                  </h2>
                  <div className="flex items-center space-x-5">
                    <p className="md:text-xl text-sm font-semibold">
                      {item.text}
                    </p>
                    <Image
                      src={arrow_right}
                      alt="Arrow right icon"
                      height={18}
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default HeroSlider;
