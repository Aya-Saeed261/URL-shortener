import logo from "../images/logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg pt-4 pt-md-5 pb-3 pb-md-4">
      <div className="container-fluid ps pe">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="logo" />
        </a>
        <button
          className="navbar-toggler border-0 p-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="nav-holder d-flex flex-column flex-lg-row justify-content-between flex-grow-1">
            <div className="navbar-nav">
              <a
                className="nav-link text-center text-white dark-gray-lg"
                aria-current="page"
                href="#"
              >
                Features
              </a>
              <a
                className="nav-link text-center text-white dark-gray-lg"
                href="#"
              >
                Pricing
              </a>
              <a
                className="nav-link text-center text-white dark-gray-lg"
                href="#"
              >
                Resources
              </a>
            </div>
            <div className="btns d-flex flex-column flex-lg-row">
              <button type="button" className="btn text-white dark-gray-lg">
                Login
              </button>
              <button
                type="button"
                className="btn btn-hover bg-cyan rounded-5 px-4 py-2 text-white"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
