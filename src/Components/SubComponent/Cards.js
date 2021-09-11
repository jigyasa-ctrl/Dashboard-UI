import React from "react";
/* Card Template */

function Cards({ link, title, value, color }) {
  return (
    <div className="card" style={{ backgroundColor: color }}>
      <img src={link} height="20px" width="20px" />
      <p>{title}</p>
      <h3>{value}</h3>
    </div>
  );
}

export default Cards;
