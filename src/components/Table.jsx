import './styling.css';
import React from "react";

const Table = ({ sat }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {sat.map((sat, id) => (
          <tr key={id} >
            <td>{sat.name}</td>
            <td>{sat.type}</td>
            <td>{sat.launchDate}</td>
            <td>{sat.operational ? <p> Active </p> : <p> Inactive </p>}</td>
          </tr>
        ))};
      </tbody>
    </table>
  );
};

export default Table;