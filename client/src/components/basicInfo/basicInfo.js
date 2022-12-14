import React  from 'react'
import LeftBar from '../leftBar/leftBar'
import "./basicInfo.css"
import {Link} from "react-router-dom"
import axios from 'axios';
import { useState } from "react";

export default function BasicInfo() {
  const mystyle = {
    color: "#1F1F1F",
    background: "#FFFFFF",
    borderRadius:"50%",
     borderColor:"#FFFFFF",
    borderDisplay:"none"
  };
//const url="mongodb+srv://real-estate-catalog:real123@real-estate-catalog.q7wsqsz.mongodb.net/realEstateDatabase?retryWrites=true&w=majority"
  const url= "http://localhost:3005/";
  const [upload,setPosts] = useState({propetyType:"", price:"",propertyAge :""});
   const handleClick =()=>{
    console.log(upload);
    // axios({
    //     url: "http://localhost:3005/",
    //     method: "POST",
    //     headers: {
    //     },
    //     data: upload
    axios.post(url,(req,res)=>{
    console.log(res)
      
      
    })
    // })
    .then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log(err);
    })
     
}
return (
    <div id='main-container'>
      <div ><LeftBar/></div>
      <div id='rightBar'>
        <header>
          <div className='userName'>
            <p>User ID : 06PPD125</p>
            <p style={{marginLeft:"750px"}}><i class="bi bi-person"></i> User Name</p>
          
           <div class="dropdown">
  <span>  <i class="bi bi-chevron-down"></i> </span>
  <div class="dropdown-content">
  <p>LogOut</p>
  </div>
</div>


            <br /></div><br /><hr />
          <div><br />
            <p style={{marginLeft:"40px"}}><b>ADD NEW PROPERTY</b></p></div>
        </header>
<nav>
<Link to="/basicInfo"><button id="basicInfoBtn"><i style={mystyle}class="bi bi-1-circle"></i> Basic Info</button></Link>
<Link to="/propertyDetail"><button className='sub-btn'><i class="bi bi-2-circle"></i> Property Detail</button></Link>
<Link to="/generalInfo"><button className='sub-btn'><i class="bi bi-3-circle"></i> General Info</button></Link>
<Link to="/locationInfo"><button className='sub-btn'><i class="bi bi-4-circle"></i> Locatoin Info </button></Link></nav> 
 <br/> 
 <section>
  <div id="form-container">
<div className='sub-formContainer'>
<form method='POST'>
  <label>Property Type</label><br/>
  <div className='inputField' >
  <input placeholder='select property type' type="text" value={upload.propetyType} onChange={(e)=>{setPosts({...upload, propetyType: e.target.value})}} id="propertType" name="propertyType"/><i class="bi bi-chevron-down"></i></div><br/>
  <label>Price</label><br/>
  <div className='inputField'>
  <input placeholder='select price' type="text" value={upload.price} onChange={(e)=>{setPosts({...upload, price: e.target.value})}} id="price" name="price"/></div><br/>
  <label>Property Age</label><br/>
  <div className='inputField'>
  <input placeholder="select property age" type="text" value={upload.propertyAge} onChange={(e)=>{setPosts({...upload, propertyAge: e.target.value})}} id="propertyAge" name="propertyAge"/><i class="bi bi-chevron-down"></i></div><br/>
  <label>Property Description</label><br/>
  <div className='inputField'>
  <input placeholder='select property description' /></div><br/>
</form>
</div>
<div className='sub-formContainer'>
<form method='POST'>
  <label>Negotable</label><br/>
  <div className='inputField'>
  <input placeholder='select negotable'/><i class="bi bi-chevron-down"></i></div><br/>
  <label>Ownership</label><br/>
  <div className='inputField'>
  <input placeholder='select ownership'/> <i class="bi bi-chevron-down"></i></div><br/>
  <label>Property Approved </label><br/>
  <div className='inputField'>
  <input placeholder='select property approved'/><i class="bi bi-chevron-down"></i></div><br/>
  <label>Bank Loan</label><br/>
  <div className='inputField'>
  <input placeholder="bank loan"/><i class="bi bi-chevron-down"></i></div>
</form>
</div>
</div>
<div id="lowerBtn">
<button className='cancelBtn'><b>Cancel</b></button>
<Link to="/propertyDetail"><button onClick={handleClick} className='saveBtn'><b>Save & Continue</b></button></Link>
 

</div>
</section>
   
   
   
    
    
    
    
    
    
    </div>
   </div>
    )}
