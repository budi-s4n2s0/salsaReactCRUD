import React from "react";

export const ButtonEdit = ({ handleEdit, id }) => {
  return (
    /*
    <button onClick={() => handleEdit(id)} className="btn">
      Edit
    </button>*/
    <img
      className="btn-action"
      onClick={() => handleEdit(id)}
      src="./images/edit.png"
      alt="edit"
    />
  );
};

export default ButtonEdit;
