import { useState } from "react";
import "../css/style.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function AddPopup({ closePopup }) {

    const navigate=useNavigate();
    const [item,setItem]=useState({
    name: "",
    Price: "",
  });      
    async function handleAddItem(){
         let result = await fetch('http://localhost:3200/add_item',{
            method:'post',
            body:JSON.stringify(item),
            headers:{
                "Content-type":"Application/json"
            }
         })   
        result=await result.json();
        if(result.status==201){
            toast.success("Item added successfully!");
            closePopup(); 
            item_list();                     
        }else{
            toast.error("Failed to add product!");          
        }
                  
    }

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <h2>Add Product</h2>
        <form>
        <input type="text" onChange={(event)=>setItem({...item,name:event.target.value})}  name="name" placeholder="Product Name" />
        <br /><br />
        <input type="number" onChange={(event)=>setItem({...item,Price:event.target.value})}  name="Price" placeholder="Price" />
        <br /><br />
        <button onClick={handleAddItem} className="save-btn">Save</button>                 
        <button className="close-btn" onClick={closePopup}>      
          Close    
        </button>
        </form>
      </div>
    </div>
  );
}

export default AddPopup;