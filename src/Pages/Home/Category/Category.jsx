import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";

import "./catStyle.css";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <div className="h-52 w-full md:h-96 mb-40">
      <SectionTitle
        heading={"From 11:00am to 10:00pm"}
        subHeading={"ORDER ONLINE"}
      />
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="flex flex-col ">
          <img src={img1} alt="" />
          <h3 className="text-xl md:text-3xl z-20 -mt-[100px] text-white font-bold uppercase">
            Salad
          </h3>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col">
          <img src={img2} alt="" />
          <h3 className="text-3xl z-20 -mt-[100px] text-white font-bold uppercase">
            pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col">
          <img src={img3} alt="" />
          <h3 className="text-3xl z-20 -mt-[100px] text-white font-bold uppercase">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col">
          <img src={img4} alt="" />
          <h3 className="text-3xl z-20 -mt-[100px] text-white font-bold uppercase">
            desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col">
          <img src={img5} alt="" />
          <h3 className="text-3xl z-20 -mt-[100px] text-white font-bold uppercase">
            Salad
          </h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
