import React from "react";
import "./generalInfo.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function GeneralInfo({state,setState,tabs,setTabs}) {
  const mystyle = {
    color: "#1F1F1F",
    background: "#FFFFFF",
    borderRadius: "50%",
    border: "#FFFFFF",
  };
  const url1 = "http://localhost:3005/";
  const handleClick = (req, res) => {
    axios.post(url1).then((response) => {
      console.log(response);
    });
  };

  return (
        <section>
          <div id="form-container">
            <div className="sub-formContainer">
              <form method="POST">
                <label>Name</label>
                <br />
                <div className="inputField">
                  <input placeholder="Owner" />
                  <i class="bi bi-chevron-down"></i>
                </div>
                <br />
                <label>Posted by</label>
                <br />
                <div className="inputField">
                  <input placeholder="Posted By" />
                  <i class="bi bi-chevron-down"></i>
                </div>
                <br />
                <label>Featured Package</label>
                <br />
                <div className="inputField">
                  <input placeholder="Please Select" />
                  <i class="bi bi-chevron-down"></i>
                </div>
                <br />
              </form>
            </div>
            <div className="sub-formContainer">
              <form>
                <label>Mobile</label>
                <br />
                <div className="inputField">
                  <input placeholder="Enter Mobile Number" />
                </div>
                <br />
                <label>Sale Type</label>
                <br />
                <div className="inputField">
                  <input placeholder="Please Select" />
                  <i class="bi bi-chevron-down"></i>
                </div>
                <br />
                <label>PPD Package </label>
                <br />
                <div className="inputField">
                  <input placeholder="Please Select" />
                  <i class="bi bi-chevron-down"></i>
                </div>
                <br />
              </form>
            </div>
          </div>
         
          <br />
          <input
            type="file"
            style={{ display: "none" }}
            name="image-upload"
            id="input"
            accept="image/*"
          />
          <div className="label">
            <label htmlFor="input" className="image-upload">
              <div id="camera">
                <i class="bi bi-camera"></i>
              </div>
              Add Photo
            </label>
          </div>

          <div id="lowerBtn">
            <Link to="/propertyDetail">
              <button className="previousBtn">
                <b>Previous</b>
              </button>
            </Link>
            <Link to="/locationInfo">
              <button onClick={handleClick} className="saveBtn">
                <b>Save & Continue</b>
              </button>
            </Link>
          </div>
        </section>
      
  );
}
