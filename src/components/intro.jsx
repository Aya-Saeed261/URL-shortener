import introImg from "../images/illustration-working.svg";

const Intro = () => {
  return (
    <section className="intro overflow-hidden pb-5 pt-lg-5">
      <div className="ps pe d-flex flex-column-reverse flex-lg-row align-items-lg-center gap-5 gap-lg-0">
        <div className="text-center text-lg-start mx-auto mx-lg-0">
          <h1 className="main-heading dark-violet fw-bolder mb-3 mb-md-2">
            More than just shorter links
          </h1>
          <p className="description gray">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button
            type="button"
            className="get-started btn-hover btn bg-cyan text-white rounded-5 fs-5"
          >
            Get Started
          </button>
        </div>
        <div className="image-holder">
          <img src={introImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Intro;
