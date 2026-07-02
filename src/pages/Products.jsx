import { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import "../css/style.css"; 
import "../css/Popup.css"; 
import "../css/Delete.css"; 
import AddPopup from "./AddPopup"; 
import { Navigate } from "react-router-dom"; 
import DeleteConfirm from "./DeleteConfirm";  
import { toast } from "react-toastify"; 


function Products() {
  const navigate=useNavigate();
  const [list, setList] = useState();
  const [showPopup, setShowPopup] = useState(false);
  const [delPopup, setDelPopup] = useState(false);
  const [id, setId] = useState(false);
  useEffect(() => {
    item_list();
  }, [id])  

  async function item_list() {
    const item = await fetch('http://localhost:3200/item_list');
    const data = await item.json();
    //console.log(data.status);
     if (data.status)
       setList(data.result);  
   }

    const openPopup = (id) => {
    setDelPopup(true);
    setId(id);
  };

   const handleDelete=async()=>{
    let result=await fetch('http://localhost:3200/delete_item/'+id,{
          method:'delete',         
          headers:{
            "Content-type":"Application/json"
          }
        });
         result =await result.json();  
        if(result.status){ 
          toast.success("Item Deleted successfully!");
          setDelPopup(false); 
          item_list();   
                  
        }else{
           toast.error("Something went wrong!");      
        }
   }  
  return (
    <>
    <div className="header">
      <h2>Products</h2>
      <button className="add_item" onClick={() => setShowPopup(true)}>Add Item</button>
      {showPopup && (
        <AddPopup closePopup={() => setShowPopup(false)} />
      )}
      {delPopup && (
        <DeleteConfirm
          onConfirm={handleDelete}
          onCancel={() => setDelPopup(false)}
        />
      )}
      
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Food</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>

          { list && list.map((item,index)=>
  
            <Fragment key={index}>
                <tr>
                <td>{index+1}</td>
                <td>{item.name}</td>
                <td>{item.Price}</td> 
                <td><button onClick={()=>openPopup(item._id)}  className="btn">Delete</button> <button className="edit">Edit</button></td>      
              </tr>     
              </Fragment>
        ) 
         }
        </tbody>

      </table>
    </>
  );
}

export default Products;