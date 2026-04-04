import React from "react";
import Breadcrumb from "../Components/Breadcrumb";
import Pagehelmet from "../Components/Pagehelmet";
import Contactform from "../Components/Contactform";

function Contact() {
  return (
    <div>
      <Pagehelmet pageTitle="Contact Us" />
      <Breadcrumb title="Contact Us" />

      {/*--Contact Section end--*/}
      <section className="contact">
        <div className="container">
          <div className="contact-inner text-center text-md-start">
            <div className="row g-md-5 gy-5 align-items-center">
              <div className="col-lg-4 col-md-5">
                <div className="contact-event-info p-8 text-white h-100 rounded bg-pink">
                  <div className="event-venue pb-5">
                    <h5 className="text-white pb-2">EVENT VENUE:</h5>
                    <p className="m-0">Galleria mall conference center</p>
                  </div>
                  <div className="address pb-5">
                    <h5 className="text-white pb-2">ADDRESS:</h5>
                    <p className="m-0">
                      19 By Pass NR, Bali, Indonesia, BC 22196
                    </p>
                  </div>
                  <div className="reception-info pb-5">
                    <h5 className="text-white pb-2">RECEPTION INFO:</h5>
                    <p className="m-0">Booking: (+62) 1919-2020</p>
                  </div>
                  <div className="ticket-info pb-5">
                    <h5 className="text-white pb-2">Ticket INFO:</h5>
                    <p className="m-0">Booking: (+62) 1919-2020</p>
                    <p className="m-0">Email: eventen@mail.com</p>
                  </div>
                  <div className="direction-link">
                    <a  href="/">Get Directions</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-7">
                <div className="contact-form">
                  <div className="form-title mb-4">
                    <h2 className="mb-1">
                      Drop a <span className="pink">line</span>
                    </h2>
                    <p className="text-black">
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                  <div className="form">
                    <Contactform />
                  </div>
                </div>
              </div>
            </div>
            <div className="map-direction mt-5">
              <iframe
              title="Google Map"
                height="400"
                className="rounded w-100"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=+(mangal%20bazar)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      {/*--Contact Section end--*/}
    </div>
  );
}

export default Contact;
