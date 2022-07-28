import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";

const Party = (props) => {
let {id} = useParams()
const [showInput, setShowInput] = useState(false)
const [inputValue, setInputValue] = useState({})
// const [submit, setSubmit] = useState("")
const initialState = {
  name:"",
  email:"",
  cname:"",
  package:"",
  date:"",
  time:""};
const [formState, setFormState] = useState(initialState);

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

  const handleChange = event => {
    setFormState({...formState, [event.target.id] : event.target.value});
  }

  const handleSubmit = async event => {
    event.preventDefault()
    let res = await axios.put(`http://localhost:3001/party/${id}`)
    setFormState(initialState)
  }


  // const handleChange = (id) => {
  //   setChange(id.target.value)
  //   props.getParty()
  // }

  // const handleSubmit = (e,id) => {
  //   e.preventDefault()
  //   axios.post(`http://localhost:3001/party/${id}`)
  //   setSubmit(id.target.value)
  //   props.getParty()

  // }
  
  return (
    <div className="partyCard">
      {props.partySelect.partys?.map((party) => (
        <div className="party-Card">
          <form onSubmit={handleSubmit}>
         { showInput ? <input placeholder={party.name}/> : <h3>Name:{party.name}</h3> }
         { showInput ? <input placeholder={party.email}/> : <h3>Email:{party.email}</h3> }
         { showInput ? <input placeholder={party.cname}/> : <h3>Childs Name:{party.cname}</h3> }
         { showInput ? <input placeholder={party.package}/> : <h3>Package:{party.package}</h3> }
         { showInput ? <input placeholder={party.date}/> : <h3>Date:{party.date}</h3> }
         { showInput ? <input placeholder={party.time}/> : <h3>Time:{party.time}</h3> }
         </form> 
         { !showInput ?
          <button className="edit" onClick={handleEdit}>Edit</button> 
          :
          (
            <>
          <button className="save" type="submit" onChange={handleChange} >Save</button> 
          <button className="delete" onClick={() => handleDelete(party._id)}>Delete</button>
          </>
          )
          
          }
        </div>
      ))}
    </div>
  );
};

export default Party;
