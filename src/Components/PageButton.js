import React from "react";

const PageButton = ({ onClick, name }) => {
  return (
    <button className="prev-next-buttons" onClick={onClick}>
      {name}
    </button>
  );
};

export default PageButton;
