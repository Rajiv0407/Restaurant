import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import Categories from "./pages/Categories";
import Settings from "./pages/Settings";
import AddItem from "./pages/AddItem";
import EditItem from "./pages/EditItem";
import AddPopup from "./pages/AddPopup";

function App() {
  return (
   
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="add_item" element={<AddPopup />} /> 
          <Route path="edit_item/:id" element={<EditItem />} />  
          <Route path="orders" element={<Orders />} />
          <Route path="customers" element={<Customers />} />
          <Route path="categories" element={<Categories />} />
          <Route path="settings" element={<Settings />} />      
        </Route>
      </Routes>
    
  );
}

export default App;