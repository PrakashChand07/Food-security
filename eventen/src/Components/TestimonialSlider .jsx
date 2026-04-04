import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: 'DANIEL FRANKIE',
    role: 'Manager',
    image: 'assets/images/speakers/1.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua..'
  },
  {
    name: 'EMANUEL KELTON',
    role: 'Planner',
    image: 'assets/images/speakers/4.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua..'
  },
  {
    name: 'ROYLOR HENK',
    role: 'Director',
    image: 'assets/images/speakers/2.JPG',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua..'
  }
];

const TestimonialSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false
  };

  return (
    <div className="slider testimonial-slide">
      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <div key={index} className="px-1"> {/* ← adds horizontal gap */}
            <div className="box1 mx-4 p-6 rounded bg-white" key={index}>
              <div className="testimonial-content position-relative">
                <i className="fa fa-quote-left position-absolute" aria-hidden="true"></i>
              <p class="my-6 position-relative w-md-75 ms-6 text-black">{item.text}</p>
              </div>
              <div className="testimonial-bio d-flex align-items-center">
                <img src={item.image} alt={item.name} className="bio-img me-5 rounded-circle float-start" width={60} />
                <div>
                  <p className="mb-1 fw-semibold black">{item.name}</p>
                  <p>{item.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
