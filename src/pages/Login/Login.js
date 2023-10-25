import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useEffect, useReducer } from 'react'
import { Link } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { AuthActions } from '../../store';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { auth } from '../Firebase/Firebase';
import { onAuthStateChanged } from 'firebase/auth';


//reducers
const emailReducer = (state, action) => {
    if(action.type === 'USER_INPUT'){
        return {value: action.val, isValid: action.val.includes('@gmail.com')}
    }

    if(action.type === 'INPUT_BLUR'){
        return {value: state.value, isValid: state.value.includes('@gmail.com')}
    }
    return {value: '', isValid: false}
}
const passwordReducer = (state, action) => {
    if(action.type === 'USER_INPUT'){
        return {value: action.val, isValid: action.val.trim().length >= 6}
    }

    if(action.type === 'INPUT_BLUR'){
        return {value: state.value, isValid: state.value.trim().length >= 6}
    }
    return {value: '', isValid: false}
}
const Login = props => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [name, setName] = useState('')
    //reducers
    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: '',
        isValid: null
    })

    const emailOnChangeHandler = (event) => {
        dispatchEmail({
            type: 'USER_INPUT',
            val: event.target.value
        })
    }

    const emailOnBlurHandler = () => {
        dispatchEmail({type:'INPUT_BLUR'})
    }

    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
        value: '',
        isValid: null
    })

    const passwordOnChangeHandler = (event) => {
        dispatchPassword({
            type: 'USER_INPUT',
            val: event.target.value
        })
    }

    const passwordOnBlurHandler = () => {
        dispatchPassword({type:'INPUT_BLUR'})
    }


    const UserLogInHandler = () => {

            onAuthStateChanged(auth, (user) => {
                if(user){
                    dispatch(AuthActions.LogInHandler())
                   navigate('../commerce') 
                }else{
                    console.log("user credential do not exist in our database")
                }
            });
    }



    const [error, setError] = useState(false);
    const [erroMessage, setErrorMessage] = useState('')
    const [formIsValid, setFormIsValid] = useState(false);

    const {isValid: emailIsValid} = emailState
    const {isValid: passwordIsValid} = passwordState

    useEffect(() => {
        if(emailIsValid && passwordIsValid){
            setFormIsValid(true)
        }
    }, [emailIsValid, passwordIsValid])

    const signInHandler = (event) => {
        event.preventDefault()
        console.log("Clicked")

        if(formIsValid){
            console.log("Form is Valid")

            signInWithEmailAndPassword(auth, emailState.value, passwordState.value)
            .then((userCredential) => {
                setTimeout(() => {
                    console.log(userCredential)
                }, 20000)
                UserLogInHandler()
                emailState.value = ''
                passwordState.value = ''
                setName('')
            })
            .catch((error) => {
                console.log(error)
                setError(true)
                setErrorMessage("Invalid credentials.Kindly Create account")

                setTimeout(() => {
                    setErrorMessage('')
                },3000)

                emailState.value = ''
                passwordState.value = ''
                setName('')
            })
        }else{
            console.log("form is not valid")
        }


    }

    //
    return <div>
        <div>
            <h1 className='font-[Cambo] font-normal text-[20px] text-center my-2'>Get Started Now</h1>
            <p className='text-center my-4'>Enter your credetials to login</p>
        </div>
        <form onClick={signInHandler} className='text-center'>
            <input
                className="border border-black w-3/4 py-2 px-2 rounded bg-[#f2f2f2] my-4"
                type='text'
                placeholder='Enter your name'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                className="border border-black w-3/4 py-2 px-2 rounded bg-[#f2f2f2] my-4"
                type='password'
                placeholder='Enter your password'
                value={passwordState.value}
                onChange={passwordOnChangeHandler}
                onBlur={passwordOnBlurHandler}
            />
            <input
                className="border border-black w-3/4 py-2 px-2 rounded bg-[#f2f2f2] my-4"
                type='email'
                placeholder='Enter your email'
                value={emailState.value}
                onChange={emailOnChangeHandler}
                onBlur={emailOnBlurHandler}
            />
            {error && formIsValid && <p className='text-[red] font-[Cambo]'>{erroMessage}</p>}
            <div className='flex justify-center my-6'>
                <button className='bg-[#4D46C7] text-[#fff] text-center py-1 px-4 rounded-lg'type='submit'>Sign In</button>
            </div>
        </form>
        <div>
            <p className='text-center'>You do not have an account? <Link to='../create' className='text-[blue]'>Create Account</Link></p>
        </div>
    </div>
}

export default Login