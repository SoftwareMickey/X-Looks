import React from 'react'
import {NavLink} from 'react-router-dom';
import {FaBars, FaCog, FaHome, FaLock,FaShoppingCart, FaUser} from 'react-icons/fa';
import { AuthActions, HiderActions } from '../../store';
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom';

const Links = props => {

    const dispatch = useDispatch();
    const hidden = useSelector(state => state.hide.hider);
    const navigate = useNavigate();

    //cart Total Price
    const  cartTotalQuantity = useSelector(state => state.cart.cartTotalQuantity);
    //loggedIn state
    const isLoggedIn = JSON.parse(window.localStorage.getItem('authstate'))
    console.log(isLoggedIn)

    const removeHide = () => {
        dispatch(HiderActions.removeHiderHandler())
    }

    const userLogOutHandler = () => {
        dispatch(AuthActions.LogOutHandler())
        navigate('')
    }

    //navigation to Cart Handler
    const cartHandler = () => {
        navigate('../cart')
    }

    return <aside className={`shadow-sm border-r`}>
        {isLoggedIn && <div className=' bg-[#fff] w-full px-6 top-0 fixed flex justify-end mx-2 z-30'>
            <p className='flex justify-between py-1 px-4 my-2 bg-[#4D46C7] mx-2 rounded' onClick={cartHandler}>
                <FaShoppingCart className='my-1 mr-4' onClick={cartHandler}/>
                <span className='text-[#fff]'>{cartTotalQuantity}</span>
            </p>
            <button className='bg-[#4D46C7] text-[#fff] rounded py-1 px-4 my-2' onClick={userLogOutHandler}>Log Out</button>
        </div>}
        <div  className={`${hidden} left-0`}>
           {!isLoggedIn && <div>
                <h1 className='px-2 py-4 bg-[darkOrange] text-center'>X-Looks</h1>
            </div>}
            {!isLoggedIn && <div>
                <li className='flex justify-center list-none px-2 py-4 text-center hover:bg-[#4D46C7] hover:rounded hover:mx-4 hover:my-4 hover:text-[#fff]'>
                    <FaHome className='my-1 mr-3'/>
                    <NavLink to='' end>Home</NavLink>
                </li>
                <li className='flex justify-center list-none px-2 py-4 text-center hover:bg-[#4D46C7] hover:rounded hover:mx-4 hover:my-4 hover:text-[#fff]'>
                    <FaShoppingCart className='my-1 mr-3'/>
                    <NavLink to='products' end>Products</NavLink>
                </li>
                <li className='flex justify-center list-none px-2 py-4 text-center hover:bg-[#4D46C7] hover:rounded hover:mx-4 hover:my-4 hover:text-[#fff]'>
                    <FaCog className='my-1 mr-3'/>
                    <NavLink to='services' end>Services</NavLink>
                </li>
                <li className='flex justify-center list-none px-2 py-4 text-center hover:bg-[#4D46C7] hover:rounded hover:mx-4 hover:my-4 hover:text-[#fff]'>
                    <FaUser className='my-1 mr-3'/>
                    <NavLink to='contacts' end>Contacts</NavLink>
                </li>
                <li className='flex justify-center list-none px-2 py-4 text-center hover:bg-[#4D46C7] hover:rounded hover:mx-4 hover:my-4 hover:text-[#fff]'>
                    <FaLock className='my-1 mr-3'/>
                    <button >Sign In</button>
                </li>
            </div>}
            <div>
                
            </div>
        </div>
        {!isLoggedIn && <div className='py-1 px-2'>
            <FaBars onClick={removeHide}/>
        </div>}
    </aside>
}

export default Links