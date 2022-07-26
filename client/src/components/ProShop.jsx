import { useEffect } from "react";


const ProShop = (props) => {
  console.log(props)
 useEffect(() => {
  props.getShop()
 }, []
 )
  return (
    <div className="shopCard">
      {
        props.shopSelect.shops?.map((proShop) => (
        <div className="shop-Card">
          <h3>Name:{proShop.name}</h3>
          <h3>Email:{proShop.email}</h3>
          <h3>Ball:{proShop.bname}</h3>
          <h3>Company:{proShop.bcompany}</h3>
        </div>
        ))
      } 
    </div>
  )
};

export default ProShop;
