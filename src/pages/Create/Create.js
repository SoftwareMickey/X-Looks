import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { AuthActions } from "../../store";
import { useNavigate } from "react-router-dom";
import { auth } from "../Firebase/Firebase";

const Create = props => {


    const navigate = useNavigate();
    const dispatch = useDispatch();

    const UserLogInHandler = () => {
        dispatch(AuthActions.LogInHandler())
        navigate('../commerce')
    }

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [confirmEmail, setConfirmEmail] = useState('')

    const signUpHandler = (event) => {
        event.preventDefault()
        console.log("Clicked")

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential)
            UserLogInHandler()
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return <div className="bg-[#fff]">
        <div>
            <h1 className="font-[Cambo] text-center my-4 text-[20px] font-bold">X-Looks</h1>
            <p className="text-center my-2">Get Started</p>
        </div>

        <form className="text-center" onSubmit={signUpHandler}>
            <input
                className="border border-black w-3/4 py-2 px-2 rounded bg-[#f2f2f2] my-4"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                className="border border-black w-3/4 py-2 px-2 rounded bg-[#f2f2f2] my-4"
                type="text"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                className="border border-black w-3/4 py-2 px-2 rounded bg-[#f2f2f2] my-4"
                type="text"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <input
                className="border border-black w-3/4 py-2 px-2 rounded bg-[#f2f2f2] my-4"
                type="text"
                placeholder="Confirm your password"
                value={confirmEmail}
                onChange={(e) => setConfirmEmail(e.target.value)}
            />
            <div className="flex justify-center my-4">
                <button className="bg-[#4D46C7] text-[#fff] text-[Cambo] rounded-2xl px-2 py-1" type="submit">Create Account</button>
            </div>
        </form>
        <div>
            <p className="text-center my-4">Already have an account? <Link to='../login' className="text-[#4D46C7]">Sign In</Link></p>
        </div>
    </div>
}

export default Create