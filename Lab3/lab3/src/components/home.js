import DisplayFoodItems from "./DisplayFoodItems"
import Info from "./Info.js"
import Map from "./Map.js"
import { items } from "./data/data.js";
import Search from "./Search"
import React from "react";


const Homelayout = () => {
    return (
      
      <div>
        
        <div className="container-fluid">
        <div className="row">
        
            <div className="col">
            <h3>Who we are...</h3>
            
            <Info/>
            
            
            </div>
            <div className="col">
            <h3>Where we are...</h3>
            
            <Map/>
            
            </div>
            <div className="col">
            
            <h3>Explore our menu</h3>
            <Search details={items}/>
            {/* <DisplayFoodItems foodList={items} /> */}
            
            </div>
        </div> 
        </div>
       

      </div>
    );
  };
  export default Homelayout;
  