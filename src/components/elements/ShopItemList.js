import ItemCard from "./ItemCard";
import {fetchItems, handleAddToCart} from "../functions/BackEndFunctions";
import React, {useEffect, useState} from "react";

export default function ShopItemList() {
    let token = localStorage.getItem("token")
    const [items, setItems] = useState([])

    useEffect(() => {
        fetchItems().then(r => setItems(r))
    },[])
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>
                    <ItemCard item={item}
                              func={() => handleAddToCart(item)}
                              isLogged={token !== null}
                    />
                </li>
            ))}
        </ul>
    )
}