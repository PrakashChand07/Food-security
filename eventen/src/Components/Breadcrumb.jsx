function Breadcrumb({ title, subtitle, bgImage }) {
  const bannerStyle = {
    backgroundImage: `url(${bgImage || "/assets/images/background/d.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    // backgroundPosition: "center bottom",
    backgroundPosition: "center -200%",

  };

  return (
    <div>
      {/*-- Banner section starts --*/}
      <section className=" page-banner position-relative pb-0" style={bannerStyle}>
        <div className="overlay"></div>
        <div className="container">
          <div className="page-title text-center position-relative py-11">
            <h2 className=" text-uppercase" style={{ color: "white" }}>{title}</h2>
            <p className="text-white mt-3 fs-5" style={{ color: "white", fontWeight: "500" }}>
              {subtitle
                ? subtitle
                : "Welcome to our page — explore more about what we do!"}
            </p>
          </div>
        </div>
      </section>
      {/*-- Banner Section end --*/}
    </div>
  );
}

export default Breadcrumb;
