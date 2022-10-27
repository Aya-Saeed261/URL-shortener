import icon1 from "../images/icon-brand-recognition.svg";
import icon2 from "../images/icon-detailed-records.svg";
import icon3 from "../images/icon-fully-customizable.svg";
import Form from "./form";

const Features = () => {
  return (
    <section className="features pt-4">
      <Form />
      <div className="ps pe bg-gray py-5">
        <div className="py-4 py-md-5">
          <h2 className="text-center fs-1 fw-bolder mb-3 mt-4">
            Advanced Statistics
          </h2>
          <p className="description text-center dark-gray mx-auto">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <ul className="features-list list-unstyled d-flex flex-column flex-lg-row gap-lg-4 my-5 position-relative text-center text-lg-start">
          <li className="bg-white rounded-3 position-relative">
            <div className="img-holder bg-violet rounded-circle p-4 position-absolute top-0">
              <img src={icon1} alt="" className="icon" />
            </div>
            <h3 className="fw-bolder fs-4 mb-3">Brand Recognition</h3>
            <p className="m-0 fs-6 dark-gray">
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </li>
          <li className="bg-white rounded-3 position-relative align-self-center">
            <div className="img-holder bg-violet rounded-circle p-4 position-absolute top-0">
              <img src={icon2} alt="" className="icon" />
            </div>
            <h3 className="fw-bolder fs-4 mb-3">Detailed Records</h3>
            <p className="m-0 fs-6 dark-gray">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </li>
          <li className="bg-white rounded-3 position-relative align-self-end">
            <div className="img-holder bg-violet rounded-circle p-4 position-absolute top-0">
              <img src={icon3} alt="" className="icon" />
            </div>
            <h3 className="fw-bolder fs-4 mb-3">Fully Customizable</h3>
            <p className="m-0 fs-6 dark-gray">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Features;
