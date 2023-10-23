import React from "react";
import { CartActions } from "../../store";
import { useDispatch } from 'react-redux'

const ItemList = props => {

    const {id, title, pic, price, quantity} = props

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
        <div>
            <h1>{title}</h1>
            <p>{pic}</p>
            <p className="font-bold my-2">Ksh.{price}</p>
            <p>Quantity: {quantity}</p>
        </div>
        <div>
            <button className='bg-[#8684b6] text-[#fff] text-center py-1 px-4 rounded-md' onClick={UserAddToCartHandler}>Add</button>
            <button className="bg-[#4D46C7] text-[#fff] text-center py-1 px-4 rounded-md my-2">Remove</button>
        </div>
    </div>
}

export default ItemList