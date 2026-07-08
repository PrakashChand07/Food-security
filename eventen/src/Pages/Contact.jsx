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
                  <div className="event-venue pb-4">
                    <h5 className="text-white pb-2">EVENT VENUE:</h5>
                    <p className="m-0">Will Announce Soon</p>
                  </div>
                  <div className="address pb-4">
                    <h5 className="text-white pb-2">ADDRESS:</h5>
                    <p className="m-0">Dubai, UAE</p>
                  </div>
                  <div className="office pb-4">
                    <h5 className="text-white pb-2">HEAD OFFICE:</h5>
                    <p className="m-0">
                      54, Bihari Vilas, Tundla,
                      <br />
                      Uttar Pradesh, India
                    </p>
                  </div>
                  <div className="office pb-4">
                    <h5 className="text-white pb-2">BRANCH OFFICES:</h5>
                    <p className="m-0">
                      783, WeWork DLF Forum, Cybercity,
                      <br />
                      Phase III, Gurugram (Haryana) - 122002
                    </p>
                    <p className="m-0 mt-2">
                      H-190, 2nd Floor, Sector 63,
                      <br />
                      Noida - 201301
                    </p>
                  </div>
                  <div className="customer-service pb-4">
                    <h5 className="text-white pb-2">CUSTOMER SERVICE:</h5>
                    <p className="m-0">
                      Email:{" "}
                      <a
                        href="mailto:contact@foodsecuritysummitx.com"
                        className="text-white text-decoration-underline"
                      >
                        contact@foodsecuritysummitx.com
                      </a>
                    </p>
                    <p className="m-0 mt-1">
                      WhatsApp:{" "}
                      <a
                        href="https://wa.me/+971585508265"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-decoration-underline"
                      >
                        +971 58 550 8265
                      </a>
                    </p>
                    <p className="m-0">CS Hotline: +971 58 550 8265</p>
                    <p className="m-0 small text-white-70 mt-1">
                      Operating Hours: Monday – Friday, 10:00 AM – 6:00 PM (GST Time)
                    </p>
                  </div>
                  <div className="direction-link">
                    <a
                      href="https://maps.google.com/?q=Dubai,+UAE"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-decoration-underline"
                    >
                      Get Directions
                    </a>
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
                      Have questions, feedback, or interest in collaborating? Send us a message and join the conversation shaping a food-secure future.
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
                title="Dubai, UAE Location Map"
                height="400"
                className="rounded w-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115835.13945616183!2d55.1712796!3d25.0657005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%2C%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1730529600000!5m2!1sen!2sin"
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
