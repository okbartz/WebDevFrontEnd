import React from "react";
import{staff} from './data/staff';

const People = () => {
  return (
    <div className="container-fluid">
      <h2>Meet our Staff</h2>
      <p>We are proud of our incredibly talented and dedicated team</p>
      <ul className="list-group">
        {staff.map((person) => (
          <li className="list-group-item" key={person.id}>
            {person.fullName}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default People;
