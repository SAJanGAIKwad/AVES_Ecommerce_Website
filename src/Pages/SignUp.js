import React, { useState } from 'react'
import { Link } from "react-router-dom";
import loginbg from '../Images/loginbg.png'
import { BiShow, BiHide} from 'react-icons/bi'

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const handleShowPassword = () =>{
        setShowPassword((preve) => !preve)
    }
    const handleShowConfirmPassword = () =>{
        setShowConfirmPassword((preve) => !preve)
    }

    return (
        <div className='p-3 md:p-4'>
            <div className='w-full max-w-sm bg-white m-auto flex-col p-4 rounded-2xl'>
                {/* <h1 className='text-center text-2xl font-bold'>SignUp</h1> */}
                <div className='w-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto'>
                    <img src={loginbg} className='w-full'/>
                </div>
                <form className='w-full py-3 flex flex-col'>
                    <label htmlFor='firstName'>First Name</label>
                    <input type={'text'} id='firstName' name='firstName' className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 focus-within:outline-blue-300 rounded-md'></input>

                    <label htmlFor='lastName'>Last Name</label>
                    <input type={'text'} id='lastName' name='lastName' className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 focus-within:outline-blue-300 rounded-md'></input>

                    <label htmlFor='email'>Email</label>
                    <input type={'email'} id='email' name='email' className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 focus-within:outline-blue-300 rounded-md'></input>

                    <label htmlFor='password'>Password</label>
                    <div className='flex px-2 py-1 bg-slate-200 rounded-md mt-1 mb-2 focus-within:outline focus-within:outline-blue-300'>
                        <input type={showPassword ? 'text':'password'} id='password' name='password' className='w-full bg-slate-200 border-none outline-none'></input>
                        <span className='flex text-xl cursor-pointer' onClick={handleShowPassword}>{showPassword ? <BiShow/> : <BiHide/>}</span>
                    </div>

                    <label htmlFor='confirmpassword'>Confirm Password</label>
                    <div className='flex px-2 py-1 bg-slate-200 rounded-md mt-1 mb-2 focus-within:outline focus-within:outline-blue-300'>
                        <input type={showConfirmPassword ? 'text':'password'} id='confirmpassword' name='confirmpassword' className='w-full bg-slate-200 border-none outline-none'></input>
                        <span className='flex text-xl cursor-pointer' onClick={handleShowConfirmPassword}>{showConfirmPassword ? <BiShow/> : <BiHide/>}</span>
                    </div>

                    <button className='w-full max-w-[150px] m-auto bg-red-500 hover:bg-red-600 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4'>Sign Up</button>
                </form>

                <p className='text-left text-sm mt-2'>Already Have Account ? <Link to={'login'} className='text-red-600'>Login</Link></p>
            </div>
        </div>
    )
}

export default SignUp