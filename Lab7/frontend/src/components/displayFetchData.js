import React from "react";
import useFetchData from "./useFetchData";
import DisplayFoodItems from "./DisplayFoodItems"


// const DisplayFoodMenu = () => {
//   const {status, foods} = useFetchData();
//   if (status==='fetched')
//   return (
//     <div>
//        <DisplayFoodItems items={foods} />
//     </div>
//   );
//   return<p>There is currently an issue displaying the food menu</p>
// };

const DisplayFoodMenu = () => {
  const {status, foods} = useFetchData();
  if (status==='fetched')
  return (
    <>
    {foods}
    </>
  );
  return {foods}
};

export default DisplayFoodMenu;
