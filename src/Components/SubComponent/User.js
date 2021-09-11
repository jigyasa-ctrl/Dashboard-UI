import React from "react";

function User({ value }) {
  return (
    <div className="user">
      <img src={value.image} height="50px" width="50px" />
      <p>{value.name}</p>
      <p>{value.email}</p>
      <p>{value.gender}</p>
      <p>{value.userRole}</p>
    </div>
  );
}

export default User;
