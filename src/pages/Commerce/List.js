import React from "react";
import { data } from "../Database/Data";
import ItemList from "./ItemList";

const List = props => {

    const lisItems = data.map((item) => <ItemList
        key = {item.id}
        id = {item.id}
        title = {item.title}
        pic = {item.pic}
        price = {item.price}
    />)

    return <div>
        <div className='flex flex-wrap justify-between mx-2'>
            <div className='mt-16 flex flex-wrap justify-between mx-2'>
                {lisItems}
            </div>
        </div>
    </div>
}

export default List