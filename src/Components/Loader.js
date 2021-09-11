import React from "react";

function Loader({ message, display, color }) {
  return (
    <div
      className="loader"
      style={{ display: display, backgroundColor: color }}
    >
      {message}
    </div>
  );
}

export default Loader;
