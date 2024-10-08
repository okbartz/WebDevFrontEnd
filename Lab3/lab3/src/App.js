import React from 'react'; 
//import FoodItem from "./components/FoodItem"
import DisplayFoodItems from "./components/DisplayFoodItems"
import { items } from "./components/data/data.js";
import Homelayout from "./components/home.js";

console.log({items})
function App() {       return ( 
       <div>
        {/* <h1>Explore our menu</h1> */}

        {/* {items.map((food, index) => {
        return <FoodItem food={food} key={index} />;
      })} */}

      {/* <DisplayFoodItems foodList={items} /> */}

      <Homelayout/>


       </div>
      );    
 } 
export default App; 
