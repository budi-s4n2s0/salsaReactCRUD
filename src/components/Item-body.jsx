import React from "react";

function ItemBody ({name, desc}){
    return(
        <div class="item-body">
            <h3>{name}</h3>
            <p>{desc}</p>
        </div>
    );
}

export default ItemBody;