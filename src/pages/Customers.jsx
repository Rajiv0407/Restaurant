import { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/style.css";
import "../css/Popup.css";
import "../css/Delete.css";
import AddPopup from "./AddPopup";
import { Navigate } from "react-router-dom";
import DeleteConfirm from "./DeleteConfirm";
import { toast } from "react-toastify";
import CustomerPopup from "./CustomerPopup";  
import UserEditPopup from "./UserEditPopup";

function Customers() {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [delPopup, setDelPopup] = useState(false);
  const [editPopup, setEditPopup] = useState(false);
  const [userlist, setUserList] = useState();     
  const [id, setId] = useState();
  const [editId, setEditId] = useState();  

  useEffect(() => {
    userList();
  },[editPopup,showPopup])  
 
  const openDeletePopup = (id) => {
    setId(id);
    setDelPopup(true);
  }
  const openEditPopup = (id)=>{                          
        setEditId(id);    
        setEditPopup(true)
  }
  const userList = async () => {
    let data = await fetch('http://localhost:3200/user_list');
    data = await data.json();
    if (data) {
      setUserList(data.result);
    }
  }
  const userDeleteHandle = async () => {
    let data = await fetch('http://localhost:3200/user_delete/' + id, {
      method: 'delete',
      headers: {
        'Content-Type': 'Application/json'
      }
    })
    const res = await data.json();
    if (res) {
      toast.success("User added successfully!");
      setDelPopup(false);  
      userList();
    } else {
      toast.error("Failed to Delete User!");
    }
  }
  
  return (
    <>
      <div className="header">
        <h2>Customer</h2>
        <button className="add_item" onClick={() => setShowPopup(true)}>Add Customer</button>
        {showPopup && (
          <CustomerPopup closePopup={() => setShowPopup(false)} />
        )}
        {delPopup && (
          <DeleteConfirm 
            onConfirm={userDeleteHandle}
            onCancel={() => setDelPopup(false)} />   
        )}
        {editPopup && (
          <UserEditPopup  user_id={editId} closePopup={() => setEditPopup(false)} />
        )}
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Number</th>
            <th>Gender</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userlist && userlist.map((user,index)=>
            <Fragment key={index}>
              <tr>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.number}</td>
                <td>{user.email}</td>  
                {user.gender == 1 ? <td style={{color:"green" }}>Male</td>:<td style={{color:"orange"}}>Female</td>}
               {user.status == 1 ? <td style={{color:"green" }}>Active</td>:<td style={{color:"red"}}>Inactive</td>}
                <td><button className="btn" onClick={()=>openDeletePopup(user._id)}>Delete</button> <button className="edit" onClick={()=>openEditPopup(user._id)}>Edit</button></td>
              </tr>
            </Fragment>
          )}
        </tbody>
      </table>
    </>
  );
}
export default Customers;