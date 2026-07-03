import { useState } from "react";
import "../css/style.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function CustomerPopup({ closePopup }) {

    const navigate=useNavigate();
    const [user,setUser]=useState({
    name: "a",
    email: "a",
    number:"a",
    gender:"a"
  }); 

  const handleUser= async()=>{

    console.log(user);
    try{
    let result= await fetch('http://localhost:3200/add_customer',{
      method:'post',
      body:JSON.stringify(user),
      headers:{
        'Content-Type':'Application/json'
      }
    })
    result= await result.json();
    if(result.status == 201){
      closePopup();
      toast.success("User added successfully!");   
    }else{
        toast.error("Failed to add User!");   
    }
    //console.log(result);
  }catch(error){
      toast.error(error.message);     
  }
    

  }
  
  
  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <h2>Add Customer</h2>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" onChange={(event)=>setUser({...user,name:event.target.value})}  name="name" placeholder="Enter Name" />
        <span className="error" style={{ color: "red" }}>{ user.name  ? " ":'Name is required'}</span>     
        <br /><br />
        <label htmlFor="email">Email</label>
        <input type="email" id="email"  onChange={(event)=>setUser({...user,email:event.target.value})}  name="email" placeholder="Enter Email " />
         <span className="error" style={{ color: "red" }}>{ user.email  ? " ":'Email is required'}</span>
        <br /><br />
        <label htmlFor="gender">Gender</label>
        <select className="gender" id="gender" onChange={(event)=>setUser({...user,gender:event.target.value})}>
          <option>Select Gender</option>
          <option value="1">Male</option>
          <option value="2">Female</option>
          <option value="3">Other</option>  
        </select>
         <span className="error" style={{ color: "red" }}>{ user.gender  ? " ":'Gender is required'}</span>
         <br /><br />
        <label htmlFor="number">Phone Number</label>
         <input type="number" id="number" onChange={(event)=>setUser({...user,number:event.target.value})}  name="number" placeholder="Enter Number " />
         <span className="error" style={{ color: "red" }}>{ user.number  ? " ":'Phone number is required'}</span>
        <br /><br />

        <button  className="save-btn" onClick={handleUser}>Save</button>                 
        <button className="close-btn" onClick={closePopup}>      
          Close    
        </button>
      </div>
    </div>
  );
}
export default CustomerPopup;