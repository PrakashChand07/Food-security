import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div
        className="collapse navbar-collapse justify-content-center"
        id="bs-example-navbar-collapse-1"
      >
        <ul
          className="navbar-nav align-items-center"
          style={{ fontWeight: 700, flexWrap: "nowrap", whiteSpace: "nowrap" }}
          id="responsive-menu"
        >

          {/* <li className="nav-item">
            <Link to="/About" className="nav-link px-2 py-2 text-black">
              About Us
            </Link>
          </li> */}

          <li className="nav-item dropdown ">
            <a
              href="/"
              className="nav-link dropdown-toggle px-2 py-2 text-black"
              id="keyInfoDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Key Information
            </a>
            <ul
              className="dropdown-menu bg-lightgrey p-0 rounded"
              aria-labelledby="keyInfoDropdown"
            >
              <li>
                <Link
                  className="dropdown-item py-2 px-4 text-capitalize text-black border-0"
                  to="/About"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item py-2 px-4 text-capitalize text-black border-0"
                  to="/Speakers"
                >
                  Speakers
                </Link>
              </li>
             
              <li>
                <Link
                  className="dropdown-item py-2 px-4 text-capitalize text-black border-0"
                  to="/Agenda"
                >
                  Agenda
                </Link>
              </li>

              <li>
                <Link
                  className="dropdown-item py-2 px-4 text-capitalize text-black border-0"
                  to="/WhyExhibit"
                >
                  Why Exhibit?
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item py-2 px-4 text-capitalize text-black border-0"
                  to="/WhoAttends"
                >
                  Who Attends?
                </Link>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <Link to="/awards" className="nav-link px-2 py-2 text-black">
              Awards
            </Link>
          </li>

          {/* Dropdown example */}

          <li className="nav-item dropdown">
            <a
              href="/"
              className="nav-link dropdown-toggle px-2 py-2 text-black"
              id="applyToDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Apply To
            </a>
            <ul
              className="dropdown-menu bg-lightgrey p-0 rounded"
              aria-labelledby="applyToDropdown"
            >
              <li>
                <Link
                  className="dropdown-item py-2 px-4 text-capitalize text-black border-0"
                  to="/Speak"
                >
                  Speak
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item py-2 px-4 text-capitalize text-black border-0"
                  to="/nominate"
                >
                  Nominate
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item py-2 px-4 text-capitalize text-black border-0"
                  to="/pitch"
                >
                  Pitch
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item py-2 px-4 text-capitalize text-black border-0"
                  to="/partners"
                >
                  Partners
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item py-2 px-4 text-capitalize text-black border-0"
                  to="/exhibit-sponsor"
                >
                  Exhibit / Sponsor
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item py-2 px-4 text-capitalize text-black border-0"
                  to="/visit"
                >
                  Visit
                </Link>
              </li>
            </ul>
          </li>


          <li className="nav-item">
            <Link to="/EventPartners" className="nav-link px-2 py-2 text-black">
              Event Partners
            </Link>
          </li>

          {/* <li className="nav-item dropdown">
            <a
              href="/"
              className="nav-link dropdown-toggle px-2 py-2 text-black"
              id="media"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Media
            </a>
            <ul
              className="dropdown-menu bg-lightgrey p-0 rounded"
              aria-labelledby="media"
            >
              <li>
                <Link
                  className="dropdown-item py-2 px-4 text-black black border-0"
                  to="/Bloglists"
                >
                  Press & Media
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item py-2 px-4 text-black black border-0"
                  to="/Blogs"
                >
                  Blogs
                </Link>
              </li>
            </ul>
          </li> */}

          <li className="nav-item">
            <Link to="/PastEdition" className="nav-link px-2 py-2 text-black">
              Past Edition
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
