import React from "react";
import MyButton from "./MyButton";

export default function ItemCard({item, func, isLogged}) {
    return (
        <div>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>Price: ${item.price}</p>
            {ButtonVisible(isLogged, func)}
        </div>
    );
}

function ButtonVisible(isLogged, func) {
    if(!isLogged) {
        return null
    }
    return (<MyButton text='Buy' func={func}/>)
}

