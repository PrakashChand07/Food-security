import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const PartnerSlider = () => {
  const partners = [
    "assets/images/icon/1.jpg",
    "assets/images/icon/2.jpg",
    "assets/images/icon/3.jpg",
    "assets/images/icon/4.jpg",
    "assets/images/icon/5.jpg",
    "assets/images/icon/1.jpg",
    "assets/images/icon/2.jpg",
    "assets/images/icon/3.jpg",
    "assets/images/icon/4.jpg",
    "assets/images/icon/5.jpg",
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

export default PartnerSlider;
