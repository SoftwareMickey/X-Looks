import React from "react";
import {useSelector} from 'react-redux'
import ItemList from "./ItemList";

const List = props => {
    const items = useSelector(state => state.cart.cartItems);

    const ListItems = items.map((item) => <ItemList
        id = {item.id}
        key = {item.id}
        title = {item.title}
        pic = {item.pic}
        price = {item.totalPrice}
        quantity = {item.quantity}
    />)

    return <div className='flex flex-wrap justify-between mx-2'>
        <div className="mt-16 flex flex-wrap justify-between mx-2">{ListItems}</div>
    </div>
}

export default List