import React from "react";
import LeftBar from "../leftBar/LeftBar";
import BasicInfo from "../basicInfo/BasicInfo";
import GeneralInfo from "../generalInfo/GeneralInfo";
import LocationInfo from "../locationInfo/LocationInfo";
import PropertyDetail from "../propertyDetail/PropertyDetails";

const MainContainer = () => {
  const mystyle = {
    color: "#1F1F1F",
    background: "#FFFFFF",
    borderRadius: "50%",
    border: "#FFFFFF",
  };
  const [tabs,setTabs]=React.useState(0)
  const [state,setState]=React.useState({
    propertyType:"",
    negotable:"",
    price:"",
    ownerShip:"",
    propertyAge:"",
    propertyApproved:"",
    propertyDescription:"",
    bankLoan:"",
  })

  return (
    <div style={{ display: "flex" }} id="main-container">
      <div>
        <LeftBar />
      </div>
      <div id="rightBar">
        <header>
          <div className="userName">
            <p>User ID : 06PPD125</p>
            <p style={{ marginLeft: "750px" }}>
              <i class="bi bi-person"></i> User Name
            </p>

            <div class="dropdown">
              <span>
                {" "}
                <i class="bi bi-chevron-down"></i>{" "}
              </span>
              <div class="dropdown-content">
                <p>LogOut</p>
              </div>
            </div>

            <br />
          </div>
          <br />
          <hr />
          <div>
            <br />
            <p style={{ marginLeft: "40px" }}>
              <b>ADD NEW PROPERTY</b>
            </p>
          </div>
        </header>
        {/* here we have to write the 4 tabs */}
        <button onClick={() => {
            setTabs(0)
          }}  id="basicInfoBtn">
          <i class="bi bi-1-circle"></i>{" "}
          Basic Info
        </button>
        <button onClick={() => {
          setTabs(1)
        }} className="sub-btn">
          <i class="bi bi-2-circle"></i> Property Detail
        </button>
        <button onClick={() => {
          setTabs(2)
        }} className="sub-btn">
          <i class="bi bi-3-circle"></i> General Info
        </button>
        <button onClick={() => {
          setTabs(3)
        }} className="sub-btn">
          <i class="bi bi-4-circle"></i> Locatoin Info{" "}
        </button>
         {/* render the components */}
      {tabs===0 && <BasicInfo state={state} setState={setState} tabs={tabs} setTabs={setTabs}></BasicInfo>}
      {tabs===1 && <PropertyDetail state={state} setState={setState} tabs={tabs} setTabs={setTabs}></PropertyDetail>}
      {tabs===2 && <GeneralInfo state={state} setState={setState} tabs={tabs} setTabs={setTabs}></GeneralInfo>}
      {tabs===3 && <LocationInfo state={state} setState={setState} tabs={tabs} setTabs={setTabs}></LocationInfo>}
      </div>

     
    </div>
  );
};

export default MainContainer;
