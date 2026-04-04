function Faq() {
  return (
    <div>
      <section className="faq-general-ques pb-0">
        <div className="container">
          <div className="general-ques">
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 p-2">
                <div className="general-ques-left text-white">
                  <div className="general-ques-image text-center">
                    <img
                      src="assets/images/team/4.png"
                      alt="faq-general-image"
                      className="w-50"
                    />
                    <br />
                  </div>
                  <div className="speaker-statement-box p-4 rounded bg-pink w-lg-80 mb-mi">
                    <div className="speaker-statement ps-4 border-start border-white border-7">
                      <p>
                        <small>
                          " Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Ut elit tellus, luctus nec ullamcorper mattis,
                          pulvinar dapibus leo."
                        </small>
                      </p>
                      <h6 className="text-white">Nelson Helso</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 p-2">
                <div className="general-ques-right">
                  <div className="section-title pb-4 text-center text-lg-start">
                    <p className="mb-1 pink">GENERAL QUESTIONS</p>
                    <h2 className="mb-2">
                      FREQUENT ASKED <span className="pink">QUESTIONS!!</span>
                    </h2>
                    <p className="text-black">
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                  <div className="faq-accordion p-4 bg-white rounded border border-2 border-light-subtle">
                    <div
                      className="accordion accordion-faq "
                      id="accordionFlushExample"
                    >
                      <div className="accordion-item ">
                        <p className="accordion-header p-4">
                          <button
                            className="accordion-button collapsed fw-semibold p-0"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne"
                            aria-expanded="false"
                            aria-controls="flush-collapseOne"
                          >
                            GLOBAL SEARCH ENGINE OPTIMIZATION
                          </button>
                        </p>
                        <div
                          id="flush-collapseOne"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body bg-lightgrey p-6">
                            Phasellus quis diam sed ligula sagittis tempus
                            malesuada sed eros. Quisque elementum, diam et
                            pellentesque volutpat, ligula diam suscipit ligula,
                            sit amet hendrerit arcu ipsum eu nulla. Morbi sed
                            molestie nulla, ac viverra turpis.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <p className="accordion-header p-4">
                          <button
                            className="accordion-button collapsed  fw-semibold p-0"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseTwo"
                            aria-expanded="false"
                            aria-controls="flush-collapseTwo"
                          >
                            WE OWN AND SHAPE OUR FUTURE
                          </button>
                        </p>
                        <div
                          id="flush-collapseTwo"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body bg-lightgrey p-6">
                            Placeholder content for this accordion, which is
                            intended to demonstrate the{" "}
                            <code>.accordion-flush</code> class. This is the
                            second item's accordion body. Let's imagine this
                            being filled with some actual content.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <p className="accordion-header p-4">
                          <button
                            className="accordion-button collapsed fw-semibold p-0"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseThree"
                            aria-expanded="false"
                            aria-controls="flush-collapseThree"
                          >
                            HOW LONG DO I GET SUPPORT & UPDATES?
                          </button>
                        </p>
                        <div
                          id="flush-collapseThree"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body bg-lightgrey p-6">
                            Placeholder content for this accordion, which is
                            intended to demonstrate the{" "}
                            <code>.accordion-flush</code> class. This is the
                            third item's accordion body. Nothing more exciting
                            happening here in terms of content, but just filling
                            up the space to make it look, at least at first
                            glance, a bit more representative of how this would
                            look in a real-world application.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*--General question Section end--*/}

      {/*--Populer question Section start--*/}
      <section className="faq-popular-ques bg-lightgrey">
        <div className="container">
          <div className="popular-ques">
            <div className="row">
              <div className="col-lg-6">
                <div className="popular-ques-left me-4 m-sm-0">
                  <div className="section-title pb-4 text-center text-lg-start">
                    <p className="mb-1 pink">POPULAR QUESTIONS</p>
                    <h2 className="mb-">
                      Eventen's <span className="pink">FAQ!!</span>
                    </h2>
                    <p className="text-black">
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                  <div className="faq-accordion p-4 mb-6 bg-white rounded">
                    <div
                      className="accordion accordion-faq"
                      id="accordionExample"
                    >
                      <div className="accordion-item ">
                        <p className="accordion-header p-4">
                          <button
                            className="accordion-button collapsed fw-semibold p-0 text-uppercase"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="false"
                            aria-controls="flush-collapseOne"
                          >
                            We are a global family that values diversity
                          </button>
                        </p>
                        <div
                          id="collapseOne"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body bg-lightgrey p-6">
                            Phasellus quis diam sed ligula sagittis tempus
                            malesuada sed eros. Quisque elementum, diam et
                            pellentesque volutpat, ligula diam suscipit ligula,
                            sit amet hendrerit arcu ipsum eu nulla. Morbi sed
                            molestie nulla, ac viverra turpis.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <p className="accordion-header p-4">
                          <button
                            className="accordion-button collapsed  fw-semibold p-0 text-uppercase"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="flush-collapseTwo"
                          >
                            Sed eget justo eget urna placerat dapibus non magna?
                          </button>
                        </p>
                        <div
                          id="collapseTwo"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body bg-lightgrey p-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Curabitur interdum, arcu a accumsan vulputate,
                            leo diam sodales mi, et bibendum mi nunc at lorem.
                            Etiam ut nisi hendrerit, iaculis metus at, accumsan
                            purus. Vestibulum facilisis iaculis mauris ac
                            pulvinar.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <p className="accordion-header p-4">
                          <button
                            className="accordion-button collapsed fw-semibold p-0 text-uppercase"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="flush-collapseThree"
                          >
                            we create sustainable growth
                          </button>
                        </p>
                        <div
                          id="collapseThree"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body bg-lightgrey p-6">
                            Phasellus quis diam sed ligula sagittis tempus
                            malesuada sed eros. Quisque elementum, diam et
                            pellentesque volutpat, ligula diam suscipit ligula,
                            sit amet hendrerit arcu ipsum eu nulla. Morbi sed
                            molestie nulla, ac viverra turpis.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6  align-self-center">
                <div className="faq-form bg-white rounded box-shadow p-6 ms-4 m-sm-0">
                  <div className="form-title mb-4">
                    <h2 className="mb-2">
                      Still have a <span className="pink">Question</span>?
                    </h2>
                    <p className="m-0 text-black">
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                  <div className="form-content justify-content-between">
                    <form>
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="mb-3"
                      />
                      <div className=" row justify-content-around">
                        <div className="col-lg-6 col-md-6">
                          <div className="phone-no">
                            <input
                              type="tel"
                              placeholder="Phone No."
                              className="mb-3"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="email">
                            <input
                              type="email"
                              placeholder="Email Address"
                              className="mb-3"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <textarea
                        placeholder="How may we help you?"
                        rows="4"
                        className="mb-3 bg-[#707070]"
                      ></textarea>
                      <button className="btn mb-5" id="sub-btn">
                        SEND MESSAGE
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Faq;
