import React from "react";

function Table({ Data }) {
  return (
    <div>
      <h2>Users</h2>
      <table>
        <thead>
          <tr className="table-header">
            <th>First Name</th>
            <th>Last Name</th>
            <th>DOB</th>
            <th>Age</th>
            <th>Hobby</th>
          </tr>
        </thead>
        <tbody>
          {Data.map(data => {
            const {
              "first name": firstname,
              "last name": lastname,
              age,
              "date of birth": DOB,
              hobby
            } = data;
            return (
              <tr>
                <td>{firstname}</td>
                <td>{lastname}</td>
                <td>{DOB}</td>
                <td>{age}</td>
                <td>{hobby}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default Table;
