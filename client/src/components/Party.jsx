import { useState, useEffect } from "react";
import axios from "axios";

const Party = (props) => {
const [showInput, setShowInput] = useState(false)
const [inputValue, setInputValue] = useState({})
const [change ,setChange] = useState("")

  console.log(props);
  useEffect(() => {
    props.getParty();
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/party/${id}`);
    props.getParty()
  };

  const handleEdit = () => {
    setShowInput(!showInput)
  }

  const handleChange = (id) => {
    axios.put(`http://localhost:3001/party/${id}`)
    setChange(id.target.value)
    props.getParty()
  }

  const handleSubmit = () => {

  }
  
  return (
    <div className="partyCard">
      {props.partySelect.partys?.map((party) => (
        <div className="party-Card">
          <form /*onSubmit={handleSubmit}*/>
         { showInput ? <input placeholder="insert name here"/> : <h3>Name:{party.name}</h3> }
         { showInput ? <input placeholder="insert email here"/> : <h3>Email:{party.email}</h3> }
         { showInput ? <input placeholder="insert childs name here"/> : <h3>Childs Name:{party.cname}</h3> }
         { showInput ? <input placeholder="insert package number here"/> : <h3>Package:{party.package}</h3> }
         { showInput ? <input placeholder="insert date here"/> : <h3>Date:{party.date}</h3> }
         { showInput ? <input placeholder="insert time here"/> : <h3>Time:{party.time}</h3> }
         </form> 
          { !showInput ? <button className="edit" onClick={handleEdit}>Edit</button> : <button className="save" type="submit" onClick={handleChange}>Save</button> }
          <button className="delete" onClick={() => handleDelete(party._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Party;
