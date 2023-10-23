import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { AuthActions } from "../../store";
import { useNavigate } from "react-router-dom";

const Create = props => {


    const navigate = useNavigate();
    const dispatch = useDispatch();

    const UserLogInHandler = () => {
        dispatch(AuthActions.LogInHandler())

        console.log("clicked")
        navigate('../commerce')
    }
    return <div className="bg-[#fff]">
        <div>
            <h1 className="font-[Cambo] text-center my-4 text-[20px] font-bold">X-Looks</h1>
            <p className="text-center my-2">Get Started</p>
        </div>

        <div className="text-center">
            <input
                className="border border-black w-3/4 py-2 px-2 rounded bg-[#f2f2f2] my-4"
                type="text"
                placeholder="Enter your name"
            />
            <input
                className="border border-black w-3/4 py-2 px-2 rounded bg-[#f2f2f2] my-4"
                type="text"
                placeholder="Enter your email"
            />
            <input
                className="border border-black w-3/4 py-2 px-2 rounded bg-[#f2f2f2] my-4"
                type="text"
                placeholder="Enter your password"
            />
            <input
                className="border border-black w-3/4 py-2 px-2 rounded bg-[#f2f2f2] my-4"
                type="text"
                placeholder="Confirm your password"
            />
        </div>
        <div className="flex justify-center my-4">
            <button className="bg-[#4D46C7] text-[#fff] text-[Cambo] rounded-2xl px-2 py-1" onClick={UserLogInHandler}>Create Account</button>
        </div>
        <div>
            <p className="text-center my-4">Already have an account? <Link to='../login' className="text-[#4D46C7]">Sign In</Link></p>
        </div>
    </div>
}

export default Create