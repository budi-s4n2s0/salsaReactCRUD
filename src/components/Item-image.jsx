import React from "react";


function ItemImage({name, image}) {
    return (
            <div class="item-image">
                <img src={image} alt={name}/>
            </div>
    );  
}
export default ItemImage;