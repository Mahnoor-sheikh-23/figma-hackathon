import React from 'react';
import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import Image from 'next/image';
import Nike from "../../public/image/nikeSign.png";
import Link from 'next/link';
import Footer from '@/components/Footer';

const page = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <div className='flex justify-center mb-24 items-center flex-col py-8 px-4'>
                {/* Nike logo and heading */}
                <div className='flex flex-col items-center mb-6'>
                    <Image src={Nike} alt="Nike Logo"  />
                    <p className='font-bold text-[19px] h-[57px] w-[186px] text-center mb-9 mt-4'>YOUR ACCOUNT FOR EVERYTHING NIKE</p>
                </div>

                {/* Sign in form */}
                <div className='w-full max-w-md'>
                    <form className='space-y-4'>
                        <div>
                            <input
                                type='email'
                                placeholder='Email Address'
                                className='w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black'
                            />
                        </div>
                        <div>
                            <input
                                type='password'
                                placeholder='Password'
                                className='w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black'
                            />
                        </div>
                        <div className='flex flex-col md:flex-row justify-between items-center text-[#757575]'>
                            <label className='flex items-center text-sm'>
                                <input type='checkbox' className='mr-2' />
                                Keep me signed in
                            </label>
                            <Link href="/" className='text-sm  hover:underline'>
                                Forgotten Your Password?
                            </Link>
                        </div>
                    </form>

                    {/* Terms and Sign-in button */}
                    <div className='mt-6'>
                        <p className='text-sm  mb-4 text-[#757575] text-center'>
                            By logging in, you agree to Nike&apos;s{' '}
                            <Link href="/" className='underline'>
                                Privacy Policy
                                <br className='hidden md:flex'/>
                            </Link> and{' '}
                            <Link href="/" className=' underline'>
                                Terms of Use
                            </Link>.
                        </p>
                        <button
                            className='w-full bg-black text-white  py-3 text-base font-bold hover:bg-gray-800 transition duration-300'
                        >
                            SIGN IN
                        </button>
                    </div>

                    {/* Sign up prompt */}
                    <div className='mt-4 text-center text-[#757575]'>
                        <p className='text-sm'>
                            Not a member?{' '}
                            <Link href="/join-us" className='text-black underline'>
                                Join us
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default page
