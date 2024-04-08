import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SocialLogin from '../Home/Auth/SocialLogin'
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth'
import { auth } from './firebase.init'
import {toast} from 'react-toastify'
import { useAuthState } from 'react-firebase-hooks/auth'

const SignUp = () => {
    const navigate = useNavigate()
    const [user] = useAuthState(auth);
    const formHandler = (e) => {
        e.preventDefault()

        const email = e.target.email.value
        const password = e.target.password.value
        const name = e.target.name.value
        if (email && password) {

            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(auth.currentUser, {
                        displayName: name
                    })
                    toast.success(`Registration Successful as ${user.email}`)
                    // console.log(user)
                    navigate('/feedback')
                    sendEmailVerification(auth.currentUser)
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    console.log(errorCode)
                    toast.error(errorCode)
                    // ..
                });
        }
        else {
            toast.error("Please fill all the fields")
        }
    }
    const [show, setShow] = useState(false)
    useEffect(() => {
        if (user) {
            navigate('/')
        }
    }, [user])
    return (
        <div className='min-h-screen'>
            <>
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h1 className='mx-auto  text-center text-indigo-500 font-bold text-4xl logo-font'>Hazrat Ali</h1>
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
                            Sign up to your account
                        </h2>
                    </div>
                    <button onClick={() => show ? setShow(false) : setShow(true)} id='button-primary' className='sm:w-full sm:max-w-sm md:max-w-lg w-full mx-auto py-2 text-white text-xl mt-5'>Continue With Social</button>


                    <div className={`${show ? "flex" : "hidden"}  backdrop-blur-sm flex-col justify-center items-center absolute top-0 w-full h-screen animate_animated animate__bounceIn`}>
                        <button onClick={() => setShow(false)} className=' top-10 rounded-xl  text-black px-3 py-1 left-10 bg-white'>Close</button>
                        <SocialLogin />
                    </div>
                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm md:max-w-lg rounded-md  px-4 py-7 shadow shadow-indigo-500">
                        <form className="space-y-6" action="#" onSubmit={formHandler}>
                            <div>
                                <label htmlFor="name" className="block text-base font-medium leading-6 text-gray-900">
                                    Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        placeholder='Your full name'
                                        className="bg-[#26344D] text-white input input-md shadow shadow-indigo-500 w-full"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-base font-medium leading-6 text-gray-900">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        placeholder='Enter your email'
                                        className="bg-[#26344D] text-white input input-md shadow shadow-indigo-500 w-full"
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-base font-medium leading-6 text-gray-900">
                                        Password
                                    </label>
                                    <div className="text-sm">
                                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                            Forgot password?
                                        </a>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        placeholder='Enter your password'
                                        required
                                        className="bg-[#26344D] text-white input input-md shadow shadow-indigo-500 w-full"
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white hover:bg-green-500"
                                >
                                    Sign Up
                                </button>
                            </div>
                        </form>

                        <p className="mt-10 text-center text-base text-gray-500">
                            Not a member?{' '}
                            <Link
                                to="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                Sign in
                            </Link>
                        </p>
                    </div>
                </div>
            </>
        </div>
    )
}

export default SignUp