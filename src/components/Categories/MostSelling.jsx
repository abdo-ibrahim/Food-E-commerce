import React from "react";
import Card from "../card/Card";
import { Navigation, Scrollbar } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../../styles/components/Categories/MostSelling.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import products from "../../api/Data";
const MostSelling = () => {
  return (
    <section className="most-selling" id="most-selling">
      <div className="container">
        <Swiper
          modules={[Navigation, Scrollbar]}
          spaceBetween={40}
          slidesPerView={1.3}
          navigation={{ nextEl: ".right-arrow", prevEl: ".left-arrow" }}
          scrollbar={{
            el: ".scroll-pagination",
            draggable: true,
          }}
          breakpoints={{
            600: {
              slidesPerView: 2.3,
            },
            1000: {
              slidesPerView: 3.3,
            },
            1440: {
              slidesPerView: 4.5,
            },
          }}
        >
          {products.map((product) => (
            <SwiperSlide>
              <Card key={product.id} product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swipe-pagination  p-2">
          <div className="scroll-pagination"></div>
          <div className="arrows flex items-center gap-2">
            <div className="left-arrow center-flex">
              <FaArrowLeft className="text-[20px]" />
            </div>
            <div className="right-arrow center-flex">
              <FaArrowRight className="text-[20px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MostSelling;
