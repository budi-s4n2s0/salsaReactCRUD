import React from "react";
import Item from "./Item-data";

function ListData({ datas, handleEdit, handleDelete }) {
  return (
    <div class="list-data">
      {datas.map((data) => (
        <Item item={data} handleEdit={handleEdit} handleDelete={handleDelete} />
      ))}
    </div>
  );
}
export default ListData;
