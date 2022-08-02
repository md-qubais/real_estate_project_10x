import React from "react";
import "./basicInfo.css";
import axios from "axios";
import { useState } from "react";

export default function BasicInfo({state,setState,tabs,setTabs}) {
  const mystyle = {
    color: "#1F1F1F",
    background: "#FFFFFF",
    borderRadius: "50%",
    borderColor: "#FFFFFF",
    borderDisplay: "none",
  };
  //const url="mongodb+srv://real-estate-catalog:real123@real-estate-catalog.q7wsqsz.mongodb.net/realEstateDatabase?retryWrites=true&w=majority"
  const url = "http://localhost:3005/";
  const [upload, setPosts] = useState({
    propetyType: "",
    price: "",
    propertyAge: "",
  });
  const handleClick = () => {
    console.log(upload);
    // axios({
    //     url: "http://localhost:3005/",
    //     method: "POST",
    //     headers: {
    //     },
    //     data: upload
    axios
      .post(url, (req, res) => {
        console.log(res);
      })
      // })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <section>
      <div id="form-container">
        <div className="sub-formContainer">
          <form method="POST">
            <label>Property Type</label>
            <br />
            <div className="inputField">
              <input
                placeholder={state.propertyType===''?"select a property type":state.propertyType}
                type="text"
                value={state.propertyType}
                onChange={(e) => {
                 setState({
                  ...state,
                  propertyType:e.target.value
                 })
                }}
                id="propertType"
                name="propertyType"
              />
              <i class="bi bi-chevron-down"></i>
            </div>
            <br />
            <label>Price</label>
            <br />
            <div className="inputField">
              <input
                placeholder="select price"
                type="text"
                value={state.price}
                onChange={(e) => {
                  setState({ ...state, price: e.target.value });
                }}
                id="price"
                name="price"
              />
            </div>
            <br />
            <label>Property Age</label>
            <br />
            <div className="inputField">
              <input
                placeholder="select property age"
                type="text"
                value={upload.propertyAge}
                onChange={(e) => {
                  setPosts({ ...upload, propertyAge: e.target.value });
                }}
                id="propertyAge"
                name="propertyAge"
              />
              <i class="bi bi-chevron-down"></i>
            </div>
            <br />
            <label>Property Description</label>
            <br />
            <div className="inputField">
              <input placeholder="select property description" />
            </div>
            <br />
          </form>
        </div>
        <div className="sub-formContainer">
          <form method="POST">
            <label>Negotable</label>
            <br />
            <div className="inputField">
              <input placeholder="select negotable" />
              <i class="bi bi-chevron-down"></i>
            </div>
            <br />
            <label>Ownership</label>
            <br />
            <div className="inputField">
              <input placeholder="select ownership" />{" "}
              <i class="bi bi-chevron-down"></i>
            </div>
            <br />
            <label>Property Approved </label>
            <br />
            <div className="inputField">
              <input placeholder="select property approved" />
              <i class="bi bi-chevron-down"></i>
            </div>
            <br />
            <label>Bank Loan</label>
            <br />
            <div className="inputField">
              <input placeholder="bank loan" />
              <i class="bi bi-chevron-down"></i>
            </div>
          </form>
        </div>
      </div>
      <div id="lowerBtn">
        <button className="cancelBtn">
          <b>Cancel</b>
        </button>
      </div>
    </section>
  );
}
