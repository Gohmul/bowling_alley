import { useState, useEffect } from "react";
import axios from "axios";

const Party = (props) => {
  const [formBody, setFormBody] = useState({});
  const [goodToGo, toggleGood] = useState(false);
  console.log(props);
  useEffect(() => {
    props.getParty();
  }, []);

  return (
    <div className="partyCard">
      {props.partySelect.partys?.map((party) => (
        <div className="party-Card">
          <h3>Name:{party.name}</h3>
          <h3>Email:{party.email}</h3>
          <h3>Childs Name:{party.cname}</h3>
          <h3>Package:{party.package}</h3>
          <h3>Date:{party.date}</h3>
          <h3>Time:{party.time}</h3>
          <button className="edit">Edit</button>
          <button className="delete"> Delete </button>
        </div>
      ))}
    </div>
  );
};

export default Party;
