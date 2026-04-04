import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const EventSlider = () => {
  const partners = [
    "assets/images/attend/1.jpg",
    "assets/images/attend/2.jpg",
    "assets/images/attend/3.jpg",
    "assets/images/attend/4.jpg",
    "assets/images/attend/5.jpg",
    "assets/images/attend/6.jpg",
    "assets/images/attend/7.jpg",
    "assets/images/attend/8.jpg",
    "assets/images/attend/9.jpg",
    "assets/images/attend/10.jpg",
    "assets/images/attend/11.jpg",
    "assets/images/attend/12.jpg",
    "assets/images/attend/13.jpg",
    "assets/images/attend/14.jpg",
    "assets/images/attend/15.jpg",
    "assets/images/attend/16.jpg",
    "assets/images/attend/17.jpg",
    "assets/images/attend/18.jpg",
    "assets/images/attend/19.jpg",
    "assets/images/attend/20.jpg",
    "assets/images/attend/21.jpg",
    "assets/images/attend/22.jpg",
    "assets/images/attend/23.jpg",
    "assets/images/attend/24.jpg",
    "assets/images/attend/25.jpg",

  ];

  return (
    <div className="partner-img pb-6">
      <Swiper
        spaceBetween={30}
        slidesPerView={5}
        loop={true}
        allowTouchMove={false}
        speed={5000} // movement speed (bigger = slower)
        autoplay={{
          delay: 0, // no delay between slides
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 10 },
          640: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 5, spaceBetween: 30 },
        }}
        style={{ padding: "10px 0" }}
      >
        {partners.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="p-2 partner-img-box text-center">
              <img
                src={img}
                alt={`partner-${index}`}
                className=" w-80 mx-auto"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default EventSlider;
