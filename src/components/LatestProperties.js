import React from "react";
import PropertyCard from "./PropertyCard";
import { GoArrowUpRight } from "react-icons/go";

// SWIPER UTILITIES
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const LatestProperties = () => {
  return (
    <div className="bg-[#FBFBFE] w-full py-10 md:py-16">
      <div className="container px-4 mx-auto md:px-0">
        <div className="flex justify-between ">
          <div className="flex flex-col gap-2 md:gap-4">
            <h2 className="text-xl font-bold md:text-2xl">
              Explore our latest properties
            </h2>
            <p>Find your gem from 1800+ properties</p>
          </div>
          <div className="flex items-end justify-between gap-2 cursor-pointer ">
            <p>See all properties</p>
            <GoArrowUpRight style={{ fontSize: "20px" }} />
          </div>
        </div>
        <div className="w-full gap-4 px-4 py-10">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="w-full "
          >
            <SwiperSlide>
              <PropertyCard />
            </SwiperSlide>
            <SwiperSlide>
              <PropertyCard />
            </SwiperSlide>
            <SwiperSlide>
              <PropertyCard />
            </SwiperSlide>
            <SwiperSlide>
              <PropertyCard />
            </SwiperSlide>
            <SwiperSlide>
              <PropertyCard />
            </SwiperSlide>
            <SwiperSlide>
              <PropertyCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default LatestProperties;
