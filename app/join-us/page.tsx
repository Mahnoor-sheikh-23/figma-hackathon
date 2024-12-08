import React from 'react';
import Image from 'next/image';
import Nike from "../../public/image/nikeSign.png";
import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import Link from 'next/link';
import Footer from '@/components/Footer';

const page = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <div className='flex justify-center mb-24 items-center flex-col py-8 px-4'>
                <div>
                    <div className='flex flex-col items-center mb-6'>
                        <Image src={Nike} alt="Nike Logo" />
                        <p className='font-bold text-[19px] text-center  mt-1'>BECOME A NIKE MEMBER</p>
                        <p className='w-[282px] h-[60px] mb-9 mt-3'>Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.</p>
                    </div>
                </div>
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
                        <div>
                            <input
                                type='text'
                                placeholder='First Name'
                                className='w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black'
                            />
                        </div>
                        <div>
                            <input
                                type='text'
                                placeholder='Last Name'
                                className='w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black'
                            />
                        </div>
                        <div>
                            <input
                                type='number'
                                placeholder='Date Of Birth'
                                className='w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black'
                            />
                        </div>
                        <p className='text-center text-[#757575]'>Get a Nike Member Reward every year on your Birthday.</p>
                        <div>
                            {/* Country Selection Dropdown */}
                            <select
                                className='w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black'
                                defaultValue=""
                            >

                                <option value="usa">India</option>
                                <option value="uk">United Kingdom</option>
                                <option value="canada">Canada</option>
                                <option value="australia">Australia</option>
                            </select>
                        </div>

                        <div className="flex space-x-4">
                            {/* Male Option */}
                            <label className="flex items-center justify-center w-full p-3 border rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-black">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    className="hidden"
                                />
                                <span className="text-sm">Male</span>
                            </label>

                            {/* Female Option */}
                            <label className="flex items-center justify-center w-full p-3 border rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-black">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    className="hidden"
                                />
                                <span className="text-sm">Female</span>
                            </label>
                        </div>


                        <div className='flex flex-col md:flex-row justify-between items-center text-[#757575]'>
                            <label className='flex items-center text-sm'>
                                <input
                                    type='checkbox'
                                    className='hidden peer' // Hide the default checkbox
                                />
                                <div className='w-8 h-6 border-2 border-gray-400 rounded-sm flex justify-center items-center peer-checked:bg-black'>
                                    {/* Add a checkmark or content here if needed */}
                                </div>
                                <span className='ml-3'>Sign up for emails to get updates from Nike on products, offers, and your Member benefits</span>
                            </label>
                        </div>



                        {/* Terms and Sign-in button */}
                        <div className='mt-6'>
                            <p className='text-sm  mb-4 text-[#757575] text-center'>
                                By creating an account, you agree to Nike&apos;s{' '}
                                <Link href="/" className='underline'>
                                    Privacy Policy
                                    <br className='hidden md:flex' />
                                </Link> and{' '}
                                <Link href="/" className=' underline'>
                                    Terms of Use
                                </Link>.
                            </p>
                            <button
                                className='w-full  bg-black text-white  py-3 text-base font-bold hover:bg-gray-800 transition duration-300'
                            >
                                JOIN US
                            </button>
                        </div>

                        {/* Sign up prompt */}
                        <div className='mt-4 text-center text-[#757575]'>
                            <p className='text-sm'>
                                Already a member?{' '}
                                <Link href="/sign-up" className='text-black underline'>
                                    Sign In
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default page
