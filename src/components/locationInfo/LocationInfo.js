import React from "react";
import "./locationInfo.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function locationInfo({state,setState,tabs,setTabs}) {
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
    <>
        <div id="form-container">
          <div className="sub-formContainer">
            <form method="POST">
              <label>Email</label>
              <br />
              <div className="inputField">
                <input placeholder="Email" name="email" />
              </div>
              <br />
              <label>Area</label>
              <br />
              <div className="inputField">
                <input placeholder="Select Area" name="area" />
                <i class="bi bi-chevron-down"></i>
              </div>
              <br />
              <label>Address</label>
              <br />
              <div className="inputField">
                <input placeholder="Address" name="address" />
              </div>
              <br />
              <label>Latitude</label>
              <br />
              <div className="inputField">
                <input placeholder="Latitude" name="latitude" />
                <br />
              </div>
            </form>
          </div>
          <div className="sub-formContainer">
            <form method="POST">
              <label>City</label>
              <br />
              <div className="inputField">
                <input placeholder="Select City" name="city" />
                <i class="bi bi-chevron-down"></i>
              </div>
              <br />
              <label>Pincode</label>
              <br />
              <div className="inputField">
                <input placeholder="Select Pincode" name="pincode" />
                <i class="bi bi-chevron-down"></i>
              </div>
              <br />
              <label>Landmark</label>
              <br />
              <div className="inputField">
                <input placeholder="Landmark" name="landmark" />
              </div>
              <br />
              <label>Longitude</label>
              <br />
              <div className="inputField">
                <input placeholder="Longitude" name="longitude" />
              </div>
              <br />
            </form>
          </div>
        </div>
        <div id="lowerBtn">
          <Link to="/generalInfo">
            <button className="previousBtn">
              <b>Previous</b>
            </button>
          </Link>
          <button onClick={handleClick} className="saveBtn">
            <b>Add Property</b>
          </button>
        </div>
  </>
  );
}
