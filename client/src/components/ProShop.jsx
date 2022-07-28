import { useState,useEffect } from "react";
import axios from "axios";


const ProShop = (props) => {
const [showInput, setShowInput] = useState(false)
const [inputValue, setInputValue] = useState({})
  console.log(props)
 useEffect(() => {
  props.getShop()
 }, []);

 const handleDelete = (id) => {
  axios.delete(`http://localhost:3001/proshop/${id}`);
  props.getShop()
};

const handleEdit = () => {
  setShowInput(!showInput)
}
  return (
    <div className="shopCard">
      {
        props.shopSelect.shops?.map((proShop) => (
        <div className="shop-Card"><form>
          { showInput ? <input placeholder="insert Name here"/> : <h3>Name:{proShop.name}</h3>}
          { showInput ? <input placeholder="insert Email here"/> : <h3>Email:{proShop.email}</h3>}
          { showInput ? <input placeholder="insert Ball here"/> : <h3>Ball:{proShop.bname}</h3>}
          { showInput ? <input placeholder="insert Company here"/> : <h3>Company:{proShop.bcompany}</h3>}
          </form>
          { !showInput ? <button className="edit" onClick={handleEdit}>Edit</button> : <button className="save" type="submit">Save</button> }
          <button className="delete" onClick={() => handleDelete(proShop._id)}>Delete</button>
        </div>
        ))
      } 
    </div>
  )
};

export default ProShop;
