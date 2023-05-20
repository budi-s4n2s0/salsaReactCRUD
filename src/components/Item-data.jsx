import React from "react";
import Image from "./Item-image";
import Body from "./Item-body";
import ButtonDelete from "./ButtonDelete";
import ButtonEdit from "./ButtonEdit";

function ItemData({ item, handleEdit, handleDelete }) {
  return (
    <div class="item-data">
      <Image name={item.name} image={item.image} />
      <Body name={item.name} desc={item.desc} />
      <div className="action">
        <ButtonEdit handleEdit={handleEdit} id={item.id} />
        <ButtonDelete handleDelete={handleDelete} id={item.id} />
      </div>
    </div>
  );
}
export default ItemData;
