import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitter,
  faPinterest,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import logo from "../images/logo-footer.svg";

const Footer = () => {
  return (
    <footer className="footer row mx-0 gap-sm bg-dark-violet ps pe py-5 text-center text-lg-start">
      <div className="col-12 col-lg-4 px-lg-0 pt-2 pt-md-4">
        <img src={logo} alt="logo" className="mx-auto mx-lg-0" />
      </div>
      <div className="col-12 col-lg-6 px-lg-0 pt-1 pt-md-4">
        <ul className="list-unstyled mb-0 row gap-sm">
          <li className="col-12 col-lg-4 px-lg-0">
            <h2 className="text-white fs-6 mb-4">Features</h2>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="nav-link gray fs-6 mb-2">
                  Link Shortening
                </a>
              </li>
              <li>
                <a href="#" className="nav-link gray fs-6 mb-2">
                  Branded Links
                </a>
              </li>
              <li>
                <a href="#" className="nav-link gray fs-6 mb-2">
                  Analytics
                </a>
              </li>
            </ul>
          </li>
          <li className="col-12 col-lg-4 px-lg-0">
            <h2 className="text-white fs-6 mb-4">Resources</h2>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="nav-link gray fs-6 mb-2">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="nav-link gray fs-6 mb-2">
                  Developers
                </a>
              </li>
              <li>
                <a href="#" className="nav-link gray fs-6 mb-2">
                  Support
                </a>
              </li>
            </ul>
          </li>
          <li className="col-12 col-lg-4 px-lg-0">
            <h2 className="text-white fs-6 mb-4">Company</h2>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="nav-link gray fs-6 mb-2">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="nav-link gray fs-6 mb-2">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="nav-link gray fs-6 mb-2">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="nav-link gray fs-6 mb-2">
                  Contact
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="col-12 col-lg-2 px-lg-0 pt-2 pt-md-4">
        <ul className="list-unstyled d-flex justify-content-center justify-content-lg-end gap-4 mb-0">
          <li>
            <a
              href="#"
              className="nav-link lh-1 fs-3 text-white"
              aria-label="Facebook account"
            >
              <FontAwesomeIcon icon={faFacebookSquare} />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="nav-link lh-1 fs-3 text-white"
              aria-label="Twitter account"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="nav-link lh-1 fs-3 text-white"
              aria-label="Pinterest account"
            >
              <FontAwesomeIcon icon={faPinterest} />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="nav-link lh-1 fs-3 text-white"
              aria-label="Instagram account"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
