import React from 'react'
import heroImage from '../../assets/heroImage.png'
import { NavLink } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Home = props => {
    const navigate = useNavigate();

    const SignInPageHandler = () => {
        navigate('../login')
    }

    return <div>
        <div>
            <h1 className='font-bold font-[Poppins] text-[22px] mt-10 text-center'>Express your unique style with our wide range of modest wear.</h1>
            <p className='font-[Cambo] my-4 text-center'>Elevate your Style with X-Looks and discover fashion that 
                empowers and inspires</p>
        </div>
        <div>
            <img src={heroImage} alt='pic' className='text-center'/>
        </div>
        <div className='flex justify-center my-4'>
            <button className='bg-[#4D46C7] rounded-3xl py-2 px-4 text-[#fff] ' onClick={SignInPageHandler}>Get Started</button>
        </div>

        <div className='flex justify-center my-10'>
            <NavLink to='' end className='mx-4'>
                <FaTwitter/>
            </NavLink>
            <NavLink to='' end className='mx-4'>
                <FaInstagram/>
            </NavLink>
            <NavLink to='' end className='mx-4'>
                <FaFacebook/>
            </NavLink>
            <NavLink to='' end className='mx-4'>
                <FaLinkedin/>
            </NavLink>
        </div>
    </div>
}

export default Home