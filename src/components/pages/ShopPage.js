import React from 'react'
import ProfileGroup from "../elements/ProfileGroup";
import ShopItemList from "../elements/ShopItemList";

export default function ShopPage () {
    return (
        <div>
            <h1>Shop</h1>
            <ProfileGroup/>
            <ShopItemList/>
        </div>
    )
}