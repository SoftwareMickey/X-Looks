import React from 'react'
import { Link } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { AuthActions } from '../../store';
import { useNavigate } from 'react-router-dom';

const Login = props => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const UserLogInHandler = () => {
        dispatch(AuthActions.LogInHandler())

        console.log("clicked")
        navigate('../commerce')
    }

    return <div>
        <div>
            <h1 className='font-[Cambo] font-normal text-[20px] text-center my-2'>Get Started Now</h1>
            <p className='text-center my-4'>Enter your credetials to login</p>
        </div>
        <div className='text-center'>
            <input
                className="border border-black w-3/4 py-2 px-2 rounded bg-[#f2f2f2] my-4"
                type='text'
                placeholder='Enter your name'
            />
            <input
                className="border border-black w-3/4 py-2 px-2 rounded bg-[#f2f2f2] my-4"
                type='password'
                placeholder='Enter your password'
            />
            <input
                className="border border-black w-3/4 py-2 px-2 rounded bg-[#f2f2f2] my-4"
                type='text'
                placeholder='Enter your email'
            />
        </div>
        <div className='flex justify-center my-6'>
            <button className='bg-[#4D46C7] text-[#fff] text-center py-1 px-4 rounded-lg' onClick={UserLogInHandler}>Sign In</button>
        </div>
        <div>
            <p className='text-center'>You do not have an account? <Link to='../create' className='text-[blue]'>Create Account</Link></p>
        </div>
    </div>
}

export default Login