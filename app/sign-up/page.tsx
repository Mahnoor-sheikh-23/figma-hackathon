"use client";
import React from 'react';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import Image from 'next/image';
import Nike from "../../public/image/nikeSign.png";
import Link from 'next/link';
import Footer from '@/components/Footer';
import { z } from 'zod';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const checkOutSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z
        .string()
        .min(8, "Password must be at least 8 characters long")
        .max(20, "Password cannot exceed 20 characters")
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
        .regex(/[a-z]/, "Password must contain at least one lowercase letter")
        .regex(/[0-9]/, "Password must contain at least one digit")
        .regex(/[@$!%*?&#]/, "Password must contain at least one special character"),
});
type CheckoutFormData = z.infer<typeof checkOutSchema>;




const page = () => {
    const [submittedData, setSubmittedData] = useState<CheckoutFormData | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CheckoutFormData>({
        resolver: zodResolver(checkOutSchema),
    });

    const onSubmit = (data: CheckoutFormData) => {
        console.log("Form submitted:", data);
        setSubmittedData(data); // Save submitted data
    };
    return (
        <div>
            <Navbar />
            <Header />
            <div className='flex justify-center mb-24 items-center flex-col py-8 px-4'>
                {/* Nike logo and heading */}
                <div className='flex flex-col items-center mb-6'>
                    <Image src={Nike} alt="Nike Logo" />
                    <p className='font-bold text-[19px] h-[57px] w-[186px] text-center mb-9 mt-4'>YOUR ACCOUNT FOR EVERYTHING NIKE</p>
                </div>

                {/* Sign in form */}
                <div className='w-full max-w-md'>
                    <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
                        <div>
                            <input
                                {...register("email")}
                                type='email'
                                name="email"
                                required
                                placeholder='Email Address'
                                className='w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black'
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                            )}
                        </div>
                        <div>
                            <input

                                {...register("password")}
                                type='password'
                                placeholder='Password'
                                className='w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black'
                            />
                            {errors.password && (
                                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                            )}
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

                        {/* Terms and Sign-in button */}
                        <div className='mt-6'>
                            <p className='text-sm  mb-4 text-[#757575] text-center'>
                                By logging in, you agree to Nike&apos;s{' '}
                                <Link href="/" className='underline'>
                                    Privacy Policy
                                    <br className='hidden md:flex' />
                                </Link> and{' '}
                                <Link href="/" className=' underline'>
                                    Terms of Use
                                </Link>.
                            </p>
                            <button
                                type="submit"
                                className='w-full bg-black text-white  py-3 text-base font-bold hover:bg-gray-800 transition duration-300'
                            >
                                SIGN IN
                            </button>
                        </div>
                    </form>

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
