import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import franklien from '../../public/shoe-images/franklien.png';
import length from '../../public/shoe-images/length.png';
import dustbin from '../../public/shoe-images/dustbin.png';
import love from '../../public/shoe-images/love.png';
import Footer from '@/components/Footer';

const page = () => {
    return (
        <div>
            <Navbar />
            <Header />

            {/* Main Container */}
            <div className="flex flex-col mb-9 lg:flex-row mt-16 px-4 lg:px-8 gap-8 max-w-6xl mx-auto">
                {/* Bag Section */}
                <div className="flex-1">
                    {/* Free Delivery Banner */}
                    <div className="bg-[#F7F7F7] p-4 rounded-lg shadow-sm">
                        <h1 className="text-lg font-medium">Free Delivery</h1>
                        <p className="text-sm mt-1">
                            Applies to orders of ₹ 14,000.00 or more.{" "}
                            <Link href="/" className="font-medium underline">
                                View details
                            </Link>
                        </p>
                    </div>

                    {/* Bag Heading */}
                    <h2 className="text-2xl font-bold mt-6">Bag</h2>

                    {/* Bag Items */}
                    <div className="space-y-6 mt-4">
                        {/* Item 1 */}
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 border-b pb-4">
                            <Image
                                src={franklien}
                                alt="Product Image"
                                className="w-32 h-32 object-cover rounded-md"
                            />
                            <div className="flex flex-col md:flex-row justify-between flex-1 gap-6">
                                <div>
                                    <p className="font-medium">Nike Dri-FIT ADV TechKnit Ultra</p>
                                    <p className="text-sm text-gray-600">
                                        Men&apos;s Short-Sleeve Running Top
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        Ashen Slate/Cobalt Bliss
                                    </p>
                                    <Image
                                        src={length}
                                        alt="Size Selector"
                                        className="mt-2"
                                    />
                                </div>
                                <div className="flex items-center gap-4">
                                    <Image
                                        src={love}
                                        alt="Save to Wishlist"
                                        className="cursor-pointer w-6 h-6"
                                    />
                                    <Image
                                        src={dustbin}
                                        alt="Remove Item"
                                        className="cursor-pointer w-6 h-6"
                                    />
                                </div>
                            </div>
                            <p className="text-right font-medium">MRP: ₹ 3,895.00</p>
                        </div>

                        {/* Item 2 */}
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 border-b pb-4">
                            <div className="w-32 h-32 bg-gray-200 flex items-center justify-center rounded-md">
                                <span className="text-gray-400 text-sm">No Image</span>
                            </div>
                            <div className="flex flex-col md:flex-row justify-between flex-1 gap-6">
                                <div>
                                    <p className="font-medium">Nike Air Max 97 SE</p>
                                    <p className="text-sm text-gray-600">Men&apos;s Shoes</p>
                                    <p className="text-sm text-gray-500">
                                        Flat Pewter/Light Bone/Black/White
                                    </p>
                                    <Image
                                        src={length}
                                        alt="Size Selector"
                                        className="mt-2"
                                    />
                                </div>
                                <div className="flex items-center gap-4">
                                    <Image
                                        src={love}
                                        alt="Save to Wishlist"
                                        className="cursor-pointer w-6 h-6"
                                    />
                                    <Image
                                        src={dustbin}
                                        alt="Remove Item"
                                        className="cursor-pointer w-6 h-6"
                                    />
                                </div>
                            </div>
                            <p className="text-right font-medium">MRP: ₹ 16,995.00</p>
                        </div>
                    </div>
                </div>

                {/* Summary Section */}
                <div className="w-full lg:w-[350px] p-6  shadow-md">
                    <h2 className="text-2xl font-bold">Summary</h2>

                    {/* Subtotal and Delivery */}
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

                    {/* Checkout Button */}
                    <button className="w-full bg-black text-white py-3 mt-6 text-base font-bold rounded-full transition duration-300 hover:bg-gray-800">
                        <Link href={"/checkout"}>
                            Member Checkout</Link>
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default page;

