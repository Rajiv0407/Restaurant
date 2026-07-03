import { useEffect, useState } from "react";
import "../css/style.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function UserEditPopup({ closePopup ,user_id}) {
    const navigate=useNavigate();
    const [user,setUser]=useState({
    name: "",
    email: "",
    number:"",
    gender:""
  });
  
  useEffect(()=>{
    userEditDetails(user_id);           
  },[])
 
 const userEditDetails=async(req,res)=>{
    let data= await fetch('http://localhost:3200/user_details/'+user_id);
    data=await data.json();
    //console.log(data);        
    if(data){
        //console.log(id);
      setUser(data.result);     
    }
  }
  const updateCustomer= async(req,res)=>{
    let data= await fetch('http://localhost:3200/update_customer/'+user_id,{
        method:'put',  
        body:JSON.stringify(user),
        headers:{
            'Content-Type':'Application/json'
        }
    });
    if(data){
       toast.success("User Updated successfully!");
      closePopup();     
    }
  }
  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <h2>Update Customer</h2>
        <label htmlFor="name">Name</label>    
        <input type="text" id="name" value={user.name} onChange={(event)=>setUser({...user,name:event.target.value})}  name="name" placeholder="Enter Name" />
        <span className="error" style={{ color: "red" }}>{ user.name  ? " ":'Name is required'}</span>     
        <br /><br />
        <label htmlFor="email">Email</label>
        <input type="email" value={user.email} id="email"  onChange={(event)=>setUser({...user,email:event.target.value})}  name="email" placeholder="Enter Email " />
         <span className="error" style={{ color: "red" }}>{ user.email  ? " ":'Email is required'}</span>
        <br /><br />
        <label htmlFor="gender">Gender</label>
        <select className="gender" value={user.gender} id="gender" onChange={(event)=>setUser({...user,gender:event.target.value})}>
          <option>Select Gender</option>
          <option value="1">Male</option>
          <option value="2">Female</option>
          <option value="3">Other</option>  
        </select>
         <span className="error" style={{ color: "red" }}>{ user.gender  ? " ":'Gender is required'}</span>
         <br /><br />
        <label htmlFor="number">Phone Number</label>
         <input type="number" value={user.number} id="number" onChange={(event)=>setUser({...user,number:event.target.value})}  name="number" placeholder="Enter Number " />
         <span className="error" style={{ color: "red" }}>{ user.number  ? " ":'Phone number is required'}</span>
        <br /><br />

        <button  className="save-btn" onClick={updateCustomer}>Update</button>                 
        <button className="close-btn" onClick={closePopup}>      
          Close    
        </button>
      </div>
    </div>
  );     
}       
export default UserEditPopup;