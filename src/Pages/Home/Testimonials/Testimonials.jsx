import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaCommentDots } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/client_review")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  return (
    <div className=" py-3">
      <SectionTitle
        heading={"What Our Clients Say"}
        subHeading={"TESTIMONIALS"}
      ></SectionTitle>
      <div>
        <div className="text-6xl flex justify-center">
          <FaCommentDots />
        </div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((item) => (
            <SwiperSlide key={item._id}>
              <div className="py-10 px-24  space-y-5 flex flex-col justify-center items-center">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={item.rating}
                  readOnly
                />

                <p>{item.details}</p>
                <h3 className="text-3xl">{item.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
