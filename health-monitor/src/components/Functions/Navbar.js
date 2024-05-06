import axios from "axios";
import { React } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../../style/navbar.css";
import EditBtn from "./EditBtn";
function Navbar({ authUser }) {
  const Navigate = useNavigate();
  const location = useLocation();
  const handleEdit = (newValue) => {
    console.log("New value:", newValue);
  };

  const handleLogout = async () => {
    const res = await axios
      .get("http://localhost:5000/User/logout", { withCredentials: true })
      .then((value) => {
        console.log(value.data);
        Navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        id="navbar-usual"
        style={{ backgroundColor: "#6196A6" }}
      >
        <div className="container-fluid">
          {authUser ? (
            <div className="profile" style={{ color: "#fff" }}>
              <div>
                <i
                  className="fa-solid fa-user fa-lg "
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop2"
                ></i>

                <div
                  class="modal fade"
                  id="staticBackdrop2"
                  data-bs-backdrop="false"
                  data-bs-keyboard="false"
                  tabindex="-1"
                  aria-labelledby="staticBackdropLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-dialog-scrollable mymodal ">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" style={{color:'#008B8B'}} id="staticBackdropLabel">
                          Profile
                        </h1>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">
                        <label
                          className=" d-flex align-content-left"
                          style={{ color: "#fff", fontWeight:"bold" }}
                        >
                          Email
                        </label>
                        <EditBtn initialValue="" onEdit={handleEdit} />
                        <label
                          className=" d-flex align-content-left"
                          style={{ color: "#fff", fontWeight:"bold" }}
                        >
                          Contact number
                        </label>
                        <EditBtn initialValue="" onEdit={handleEdit} />
                        {/* <label
                          className=" d-flex align-content-left"
                          style={{ color: "#fff", fontWeight:"bold" }}
                        >
                          Doctors Connected
                        </label>
                        <EditBtn initialValue="" onEdit={handleEdit} /> */}
                      </div>
                      <div class="modal-footer">
                        <Link to="/settings">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Settings
                        </button>
                        </Link>
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <Link className="navbar-brand text-white" to="/">
              Health Monitor
            </Link>
          )}
          {/* {location.pathname === "/doctor-dashboard" && (
                    <li className="nav-item8">
                      <button className="btn btn-outline-primary" onClick={toggleSidebar}>Sidebar</button>
                     
                    </li>
        
          )} */}

          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
            style={{ display: "flex", justifyContent: "right" }}
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {authUser ? (
                <div style={{ display: "flex" }}>
                  <form class="d-flex" role="search">
                    <input
                      class="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button class="btn btn-outline-success" type="submit">
                      Search
                    </button>
                  </form>
                  {/* <li className="nav-item7">
                    <Link
                      className="nav-link text-white"
                      to="/patient-dashboard"
                    >
                      Dashboard
                    </Link>
                  </li> */}
                </div>
              ) : (
                <li className="nav-item1">
                  <Link className="nav-link text-white" to="/features">
                    Features
                  </Link>
                </li>
              )}

              {location.pathname === "/doctor-dashboard" && (
                <li>
                  <Link className="nav-link text-white" to="/doctor-dashboard">
                    Dashboard
                  </Link>
                </li>
              )}
              {[
                "/patient-dashboard",
                "/viewrecords",
                "/viewprescriptions",
                "viewimaging",
                "viewdoctornotes",
                "viewmedexpense",
                "viewvaccination",
                "/addrecords",
                "/addprescriptions",
                "/adddocnotes",
                "/addimaging",
                "/addmedexpense",
                "/addvaccination",
                "/prediction",
                "/pathealthhistory",
              ].includes(location.pathname) && (
                <li>
                  <Link className="nav-link text-white" to="/patient-dashboard">
                    Dashboard
                  </Link>
                </li>
              )}
              {/* {authUser ? (
                <div>
                  {location.pathname === "/patient-dashboard" && (
                    <li>
                      <Link className="nav-link text-white" to="patient-dashboard/about">
                  About
                </Link>
                    </li>
                  )}
                  {location.pathname === "/doctor-dashboard" && (
                    <li>
                      <Link className="nav-link text-white" to="doctor-dashboard/about">
                  About
                </Link>
                    </li>
                  )}
                </div>

              ):( */}

              {/* )} */}

              {[
                "/patient-dashboard",
                "/viewrecords",
                "/viewprescriptions",
                "viewimaging",
                "viewdoctornotes",
                "viewmedexpense",
                "viewvaccination",
                "/addrecords",
                "/addprescriptions",
                "/adddocnotes",
                "/addimaging",
                "/addmedexpense",
                "/addvaccination",
                "/prediction",
                "/pathealthhistory",
              ].includes(location.pathname) && (
                <li className="nav-item2">
                  <Link className="nav-link text-white" to="/about">
                    About
                  </Link>
                </li>
              )}
              {[
                "/patient-dashboard",
                "/viewrecords",
                "/viewprescriptions",
                "viewimaging",
                "viewdoctornotes",
                "viewmedexpense",
                "viewvaccination",
                "/addrecords",
                "/addprescriptions",
                "/adddocnotes",
                "/addimaging",
                "/addmedexpense",
                "/addvaccination",
                "/prediction",
                "/pathealthhistory",
              ].includes(location.pathname) && (
                <li className="nav-item3">
                  <Link className="nav-link text-white" to="/howitworks">
                    How it works
                  </Link>
                </li>
              )}

              {["/doctor-dashboard"].includes(location.pathname) && (
                <li>
                  <Link className="nav-link text-white" to="/mypatients">
                    My Patients
                  </Link>
                </li>
              )}
              {/* {["/doctor-dashboard"].includes(location.pathname) && (
                <li>
                  <Link className="nav-link text-white" to="/mypatients">My Patients</Link>
                </li>
              )} */}

              {authUser ? (
                <div style={{ display: "flex" }}>
                  <li className="nav-item4">
                    <Link
                      className="nav-link text-white"
                      to="/"
                      onClick={handleLogout}
                    >
                      Logout
                    </Link>
                  </li>
                </div>
              ) : (
                <div style={{ display: "flex" }}>
                  <li className="nav-item5">
                    <Link className="nav-link text-white" to="/login">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item6">
                    <Link
                      className="nav-link text-white"
                      to="/register-patient"
                    >
                      Register
                    </Link>
                  </li>
                </div>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
