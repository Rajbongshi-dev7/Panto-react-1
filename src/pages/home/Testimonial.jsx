import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { reviews } from "../../utils/reviews";
import Ratings from "../../components/Ratings";

const Testimonial = () => {
  return (
    <section className="section-container px-8 mb-20 md:mb-30 lg:mb-40">
      <div className="text-center  mb-12">
        <h3 className="uppercase text-lg font-semibold text-primary mb-4">
          testimonials
        </h3>
        <h2 className=" capitalize text-4xl font-bold mb-4">
          Our Client Reviews
        </h2>
      </div>
      {/* reviw cards */}
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {reviews.map((review, index) => (
          <SwiperSlide
            key={index}
            style={{ backgroundImage: `url(${review.coverImg})` }}
            className=" bg-cover rounded-lg md:h-[500px]"
          >
            <div className="md:h-[500px] flex justify-center items-center p-8 pb-1 rounded-xl mb-4">
              <div className="mt-30 bg-white  rounded-xl md:w-4/5 w-full p-4 relative">
                <img
                  src={review.image}
                  alt=""
                  className="size-20 absolute -top-8 left-1/2 -translate-x-1/2 object-cover ring-2 ring-primary rounded-full"
                />
                <div className="mt-16 text-center">
                  <h3 className="text-lg font-semibold ">{review.name}</h3>
                  <p className="mb-3">Verified Customer</p>
                  <p className="text-gray-500 mb-4">{review.review}</p>
                  <div className="w-full mx-auto mb-2 flex items-center justify-center text-center">
                    <Ratings rating={review.rating} />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
