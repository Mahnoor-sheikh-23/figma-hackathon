import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import nike from "../../public/image/nikeSign.png";
import bag from "../../public/image/bag.png";
import msg from "../../public/shoe-images/msgs.png";
import franklien from '../../public/shoe-images/franklien.png';
import length from '../../public/shoe-images/length.png';
import sneakers from '../../public/shoe-images/sneakers.png';
import divi from '../../public/shoe-images/divi.png';
import Footer from '@/components/Footer';
const Checkout = () => {
    return (
        <div className="min-h-screen flex flex-col ">
            {/* Header */}
            <header className="flex items-center justify-between p-3 bg-white shadow-md sticky top-0 z-50">
                <div className='flex md:flex-row flex-col w-full justify-between md:gap-96 items-center'>
                    <div>
                        <div className='flex justify-start items-start'>
                            <Link href={"/"}>
                                <Image src={nike} alt="Nike Logo" className='h-10 w-auto md:h-[78px]' />
                            </Link>
                        </div>
                    </div>
                    <div className='flex gap-10 md:gap-9 mr-14'>
                        <p>00 800 100 9538</p>
                        <Image src={msg} alt="Bag Icon" className=" object-cover" />
                        <Image src={bag} alt="Bag Icon" className="object-cover" />
                    </div>
                </div>
            </header>
            <main className="flex flex-col md:flex-row  gap-6 p-4 md:p-8">

                <section className="flex-1 bg-gray-50 p-4 md:p-6 rounded-lg shadow">
                    <div className=' '>
                        <div>
                            <h1 className='font-medium text-[21px]'>How would you like to get your order?</h1>
                            <p className='text-[#757575]'>Customs regulation for India require a copy of the recipient&apos;s KYC. The address on the KYC needs to match the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC will be stored securely and used solely for the purpose of clearing customs (including sharing it with customs officials) for all orders and returns. If your KYC does not match your shipping address, please click the link for more information. Learn More</p>

                        </div>
                        <div className='md:h-[82px] md:w-[440px] w-auto h-auto pb-3 border-black border rounded-lg mt-9 text-center '>
                            <button className='mt-6'>Deliver it</button>
                        </div>
                        <h1 className='py-6 text-[20px] font-medium'>Enter Your Name and Address:</h1>
                        <div className='space-y-6'>
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
                                    type='text'
                                    placeholder='Address Line 2'
                                    className='w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black'
                                />
                            </div>
                            <div>
                                <input
                                    type='text'
                                    placeholder='Address Line 2'
                                    className='w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black'
                                />
                            </div>
                            <div>
                                <input
                                    type='text'
                                    placeholder='Address Line 3'
                                    className='w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black'
                                />
                            </div>

                            <div className="flex space-x-4">
                                <label className="flex items-center justify-center w-full p-3 border rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-black">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="male"
                                        className="hidden"
                                    />
                                    <span className="text-sm">Postal Code</span>
                                </label>
                                <label className="flex items-center justify-center w-full p-3 border rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-black">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="female"
                                        className="hidden"
                                    />
                                    <span className="text-sm">Locality</span>
                                </label>
                            </div>
                            <div className='flex justify-between'>
                                <div>
                                    <select
                                        className='w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black'
                                        defaultValue=""
                                    >

                                        <option value="usa">state/teritory</option>
                                        <option value="uk">United Kingdom</option>
                                        <option value="canada">Canada</option>
                                        <option value="australia">Australia</option>
                                    </select>
                                </div>
                                <div className="flex w-[50%]">
                                    <label className="flex items-center justify-center w-full p-3 border rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-black">
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="female"
                                            className="hidden"
                                        />
                                        <span className="text-sm">India</span>
                                    </label>
                                </div>
                            </div>
                            <label className='flex items-center text-sm'>
                                <input
                                    type='checkbox'
                                    className='hidden peer'
                                />
                                <div className='w-8 h-6 border-2 border-gray-400 rounded-sm flex justify-center items-center peer-checked:bg-black'>
                                </div>
                                <span className='ml-3'>Safe this address to my profile</span>
                            </label>
                            <label className='flex items-center text-sm'>
                                <input
                                    type='checkbox'
                                    className='hidden peer'
                                />
                                <div className='w-8 h-6 border-2 border-gray-400 rounded-sm flex justify-center items-center peer-checked:bg-black'>
                                </div>
                                <span className='ml-3'>Make this my preferred address</span>
                            </label>
                            <div>
                                <h2 className='py-6 text-[20px] font-medium'>what&apos;s your contact information?</h2>
                                <div className='space-y-6'>

                                    <div>
                                        <input
                                            type='email '
                                            placeholder='Email'
                                            className='w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black'
                                        />
                                    </div>
                                    <p>A conformation email will be sent after checkout</p>
                                    <div>
                                        <input
                                            type='number '
                                            placeholder='Phone Number '
                                            className='w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black'
                                        />
                                    </div>
                                    <p>A carier might contact to you confrom delivery</p>
                                </div>

                            </div>
                            <div>
                                <h2 className='py-6 text-[20px] font-medium'>What&apos;s your PAN</h2>
                                <div className='space-y-6'>
                                    <div>
                                        <input
                                            type='email '
                                            placeholder='PAN'
                                            className='w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black'
                                        />
                                    </div>
                                    <p>Enter your PAN to enable payment with UPI, Net Banking or local card methods</p>
                                    <label className='flex items-center text-sm'>
                                        <input
                                            type='checkbox'
                                            className='hidden peer'
                                        />
                                        <div className='w-8 h-6 border-2 border-gray-400 rounded-sm flex justify-center items-center peer-checked:bg-black'>

                                        </div>
                                        <span className='ml-3'>Save PAN details to Nike Profile</span>
                                    </label>
                                    <label className='flex items-center text-sm'>
                                        <input
                                            type='checkbox'
                                            className='hidden peer'
                                        />
                                        <div className='w-16 h-8 border-2 border-gray-400 rounded-sm flex justify-center items-center peer-checked:bg-black'>

                                        </div>
                                        <span className='ml-3'>I have read and consent to eShopWorld processing my information in accordance with the Privacy Statement and Cookie Policy. eShopWorld is a trusted Nike partner.</span>
                                    </label>
                                    <button className='md:w-full w-auto bg-gray-200 text-black  md:py-3 text-base font-bold p-3 rounded-3xl md:rounded-3xl transition duration-300'>Continue</button>
                                </div>

                            </div>
                            <div>
                                <Image src={divi} alt='' className='object-cover' />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Order Summary */}
                <section className="w-full md:w-[470px] hidden md:flex bg-gray-50 p-4 md:p-6 rounded-lg shadow">
                    <div className=' w-[320px]  ml-10 hidden md:flex flex-col'>
                        <p className='text-[21px] font-medium'>Order Summary</p>
                        <div>
                            <div className="flex justify-between mt-6 text-sm">
                                <p>Subtotal</p>
                                <p>₹ 20,890.00</p>
                            </div>
                            <div className="flex justify-between text-sm mt-2">
                                <p>Estimated Delivery & Handling</p>
                                <p>Free</p>
                            </div>

                            {/* Total */}
                            <div className="flex justify-between mt-6 text-lg border-t-2 border-b-2 border-gray-300 py-3 font-medium">
                                <p>Total</p>
                                <p>₹ 20,890.00</p>
                            </div>
                            <p className='text-[10px] mt-5'>(The total reflects the price of your order, including all duties and taxes)</p>
                        </div>
                        <div>
                            <h2 className='text-[15px] font-bold p-9 mt-10'>Arrives Mon, 27 Mar - Wed, 12 Apr</h2>
                            <div className='space-y-4'>
                                <div className='flex '>
                                    <Image src={franklien} alt='' />
                                    <div className='flex flex-col p-2'>
                                        <p>Nike Dri-FIT ADV TechKnit Ultra Men&apos;s Short-Sleeve Running Top</p>
                                        <div>

                                            <Image src={length} alt='' />
                                        </div>
                                        <p>₹ 3 895.00</p>
                                    </div>
                                </div>
                                <div className='flex '>
                                    <Image src={sneakers} alt='' height={150} width={150} />
                                    <div className='flex flex-col '>
                                        <p>Nike Dri-FIT ADV TechKnit Ultra Men&apos;s Short-Sleeve Running Top</p>
                                        <div>
                                            <Image src={length} alt='' />
                                        </div>
                                        <p>₹ 3 895.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </main>
            <Footer />

        </div>
    );
};

export default Checkout;
