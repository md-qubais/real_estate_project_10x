import React from "react";
import "./propertyDetail.css";
import axios from "axios";

export default function PropertyDetail() {
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
                <label>Length</label>
                <br />
                <div className="inputField">
                  <input placeholder="Example: 5000" />
                </div>
                <br />
                <label>Total Area</label>
                <br />
                <div className="inputField">
                  <input placeholder="Example: 7500" />
                </div>
                <br />
                <label>No of BHK</label>
                <br />
                <div className="inputField">
                  <input placeholder="Select No of BHK" />
                  <i class="bi bi-chevron-down"></i>
                </div>
                <br />
                <label>Attached</label>
                <br />
                <div className="inputField">
                  <input placeholder="Select Attached" />
                  <i class="bi bi-chevron-down"></i>
                </div>
                <br />
                <label>Furnished</label>
                <br />
                <div className="inputField">
                  <input placeholder="Select Furnished" />
                  <i class="bi bi-chevron-down"></i>
                </div>
                <br />
                <label>Lift</label>
                <br />
                <div className="inputField">
                  <input placeholder="Select Lift" />
                  <i class="bi bi-chevron-down"></i>
                </div>
                <br />
                <label>Facing</label>
                <br />
                <div className="inputField">
                  <input placeholder="Select Facing" />
                </div>
                <br />
              </form>
            </div>
            <div className="sub-formContainer">
              <form method="POST">
                <label>Breath</label>
                <br />
                <div className="inputField">
                  <input placeholder="example 1000" />
                </div>
                <br />
                <label>Area Unit</label>
                <br />
                <div className="inputField">
                  <input placeholder="Area Unit" />
                  <i class="bi bi-chevron-down"></i>
                </div>
                <br />
                <label>No of Floor</label>
                <br />
                <div className="inputField">
                  <input placeholder="Select No of Floor" />
                  <i class="bi bi-chevron-down"></i>
                </div>
                <br />
                <label>Western Toilet</label>
                <br />
                <div className="inputField">
                  <input placeholder="Select Western Toilet" />
                  <i class="bi bi-chevron-down"></i>
                </div>
                <br />
                <label>Car Parkinh</label>
                <br />
                <div className="inputField">
                  <input placeholder="Select Car Parking" />
                  <i class="bi bi-chevron-down"></i>
                </div>
                <br />
                <label>Electricity</label>
                <br />
                <div className="inputField">
                  <input placeholder="Example 3 Phase" />
                </div>
                <br />
              </form>
            </div>
          </div>
          <div id="lowerBtn"></div>
        </section>
      
  );
}
