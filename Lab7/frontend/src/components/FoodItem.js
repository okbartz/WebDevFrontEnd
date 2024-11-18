import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import Stars from "./stars";


const FoodItem = ({ food }) => {
    return (
      <div>
        <Accordion.Header>{food.name}</Accordion.Header>
        <Accordion.Body>
          <p>{food.description}</p>
          <p>£{food.price}</p>
          <Stars position={index} />
        </Accordion.Body>
      </div>
    );
  };
  export default FoodItem;
  