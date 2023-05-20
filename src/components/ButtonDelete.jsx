import React from "react";

export const ButtonDelete = ({ handleDelete, id }) => {
  return (
    /*
    <button onClick={() => handleDelete(id)} className="btn">
      Del
    </button>*/
    <img
      className="btn-action"
      onClick={() => handleDelete(id)}
      src="./images/delete.png"
      alt="edit"
    />
  );
};

export default ButtonDelete;
