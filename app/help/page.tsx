import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import React from 'react';
import search from "../../public/image/search.png";
import phone from "../../public/shoe-images/phone.png";
import message from "../../public/shoe-images/message.png";
import gmial from "../../public/shoe-images/g-mail.png";
import locator from "../../public/shoe-images/locator.png";
import good from "../../public/shoe-images/good.png";
import bad from "../../public/shoe-images/bad.png";
import Image from 'next/image';
import Footer from '@/components/Footer';

const page = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <div className='flex flex-col items-center text-center'>
                <div className='flex flex-col items-center'>
                    <p className='font-medium text-2xl lg:text-[32px] mt-6 lg:mt-12'>
                        GET HELP
                    </p>
                </div>
                <div className='w-[250px] lg:w-[457px] mt-4 lg:mt-6 h-[56px] border border-black rounded-lg flex items-center justify-between'>
                    <div className='flex-grow'>
                        <input
                            type='text'
                            placeholder='What can we help you with?'
                            className='md:w-full w-auto md:px-4  focus:outline-none text-xs lg:text-base'
                        />
                    </div>
                    <div className='flex-shrink-0'>
                        <Image src={search} alt='' className='h-5 lg:h-auto mx-3' />
                    </div>
                </div>
            </div>

            <div>

                <div className='flex flex-col lg:flex-row w-full'>
                    {/* Left Column */}
                    <div className='w-full lg:w-[923px] p-4 lg:ml-14'>
                        <h1 className='font-medium text-lg lg:text-3xl'>
                            WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
                        </h1>
                        <div className='mt-6'>
                            <h2 className='font-normal text-sm lg:text-[15px]'>
                                We want to make buying your favourite Nike shoes and gear online fast
                                and easy, and we accept the following payment options:
                            </h2>
                            <div className='space-y-3 mt-5 text-sm lg:text-base'>
                                <p>Visa, Mastercard, Diners Club, Discover, American Express...</p>
                                <p>
                                    If you enter your PAN information at checkout, you&apos;ll be able to pay
                                    for your order with PayTM or a local credit or debit card.
                                </p>
                                <p>Apple Pay</p>
                            </div>

                            <div className='mt-6 space-y-4'>
                                <p>
                                    Nike Members can store multiple debit or credit cards in their
                                    profile for faster checkout. If you&apos;re not already a Member, join us
                                    today.
                                </p>
                                <div className='flex gap-4'>
                                    <button className='bg-black text-white rounded-full px-4 py-2 text-sm'>
                                        Join Us
                                    </button>
                                    <button className='bg-black text-white rounded-full px-4 py-2 text-sm'>
                                        Shop Nike
                                    </button>
                                </div>
                            </div>

                            <div className='mt-6'>
                                <h2 className='font-medium text-base'>FAQs</h2>
                                <div className='mt-4 space-y-3'>
                                    <div>
                                        <p className='font-bold text-sm lg:text-base'>
                                            Does my card need international purchases enabled?
                                        </p>
                                        <p className='text-sm lg:text-base'>
                                            Yes, we recommend asking your bank to enable international
                                            purchases on your card...
                                        </p>
                                    </div>
                                    <p className='text-sm'>
                                        Please note, some banks may charge a small transaction fee for
                                        international orders.
                                    </p>
                                </div>

                                {/* More FAQs */}
                                <div className='mt-6 space-y-3'>
                                    <p className='font-medium text-sm'>Can I pay for my order with multiple methods?</p>
                                    <p className='text-sm'>
                                        No, payment for Nike orders can&apos;t be split between multiple payment
                                        methods.
                                    </p>

                                    <p className='font-medium text-sm'>What payment method is accepted for SNKRS orders?</p>
                                    <p className='text-sm'>You can use any accepted credit card...</p>
                                </div>

                                <div className='mt-6'>
                                    <h2 className='font-semibold text-sm'>Why don&apos;t I see Apple Pay as an option?</h2>
                                    <p className='text-sm'>
                                        To see Apple Pay as an option in the Nike App or on Nike.com, you&apos;ll
                                        need to use a compatible Apple device...
                                    </p>
                                </div>

                                <div className='mt-8 space-y-4'>
                                    <p className='text-sm'>Was this answer helpful?</p>
                                    <div className='flex gap-2'>
                                        <Image src={good} alt='' className='h-5 w-5' />
                                        <Image src={bad} alt='' className='h-5 w-5' />
                                    </div>
                                    <div className=' hidden lg:flex h-[108px] w-[923px]'>
                                        <h1 className='mt-2 text-[#757575]'>RELATED</h1>
                                        <div className='ml-9 underline font-normal mt-3'>
                                            <p>WHAT ARE NIKE&apos;S DELIVERY OPTIONS?</p>
                                            <p>HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className='w-full lg:w-[313px] border-t lg:border-t-0 lg:border-l-2 border-gray-200 p-4'>
                        <h1 className='font-medium text-lg lg:text-3xl text-center whitespace-nowrap'>CONTACT US</h1>
                        <div className='mt-6 space-y-6'>
                            {/* Contact Options */}
                            <div className='text-center'>
                                <Image src={phone} alt='' className='mx-auto' />
                                <p className='text-lg font-medium'>000 800 919 0566</p>
                                <p className='text-sm'>
                                    Products & Orders: 24/7 <br />
                                    Company Info: 7:30 - 16:30, Mon - Fri
                                </p>
                            </div>
                            <div className='text-center'>
                                <Image src={message} alt='' className='mx-auto' />
                                <p className='text-lg font-semibold'>24 hours a day</p>
                                <p className='text-lg font-medium'>7 days a week</p>
                            </div>
                            <div className='text-center'>
                                <Image src={gmial} alt='' className='mx-auto' />
                                <p className='text-lg font-semibold'>We&apos;ll reply within</p>
                                <p className='text-lg font-medium'>Five business days</p>
                            </div>
                            <div className='text-center'>
                                <Image src={locator} alt='' className='mx-auto' />
                                <p className='text-lg font-bold'>STORE LOCATOR</p>
                                <p className='text-sm'>Find Nike retail stores near you</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default page
