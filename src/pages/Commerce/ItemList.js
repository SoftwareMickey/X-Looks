import React from "react";
import {useDispatch} from 'react-redux'
import { CartActions } from "../../store";

const ItemList = props => {
    const {id, title, pic, price} = props;
    const dispatch = useDispatch();

    const UserAddToCartHandler = () => {

        const data = {
            id:id,
            title: title,
            pic:pic,
            price:price
        }

        console.log(data)
        
        dispatch(CartActions.addToCartHandler(data))
    }

    return <div className="w-[45%] shadow-3xl m-2 rounded-sm p-2 text-center">
        <div className="flex flex-col justify-between">
            <h1 className="font-[Cambo] my-2">{title}</h1>
            <p className='h-[50%]'>{pic}</p>
            <p className="font-bold my-2">Ksh.{price}</p>
        </div>
        <button className='bg-[darkOrange] text-[#fff] mx-2 rounded px-4 my-2' onClick={UserAddToCartHandler}>Add to Cart</button>
    </div>
}

export default ItemList