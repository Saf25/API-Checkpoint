import React, { useState, useEffect } from "react";
import axios from "axios";
const DataFetching = () => {
  const [listOfUsers, setlistOfUsers] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setlistOfUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="mainlist">
      <h2>Below is the list of Users</h2>
      <ul>
        {listOfUsers.map((users) => (
          <li style={{ listStyleType: "none" }} key={users.id}>
            <span> Name: </span>
            {users.name}
            <ul className="list">
              <span style={{ color: "green", fontStyle: "italic" }}>
                Username:{"  "}
              </span>{" "}
              {users.username}
              <br></br>
              <span style={{ color: "blue" }}>E-mail:{"  "} </span>
              <u>{users.email}</u>
            </ul>
          </li>
        ))}
      </ul>
      <br></br>
    </div>
  );
};

export default DataFetching;
