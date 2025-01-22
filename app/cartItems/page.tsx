"use client";
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dustbin from '../../public/shoe-images/dustbin.png';
import love from '../../public/shoe-images/love.png';
import Footer from '@/components/Footer';
import { useCart } from '@/components/CartContext';
import { urlFor } from '@/sanity/lib/image';
import { useWishlist } from "@/components/wishlistContext";

type Item = {
    _id: string;
    image: string;
    productName: string;
    category: string;
    color: number;
    price: number;
    description: string;
    inventory: number;
    quantity: number
};

const Page = () => {
    const { addToWishlist } = useWishlist();
    const { cartItems, cartCount, removeFromCart, getTotalPrice } = useCart();
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
                    <h2 className="text-2xl font-bold mt-6"> {cartCount > 0 ? "Items in your cart" : "Your Cart Is Currently Empty"}</h2>

                    {/* Bag Items */}
                    <div className="space-y-6 mt-4">
                        {/* Item 1 */}
                        {cartItems.map((items: Item, index: number) => {
                            return (
                                <div key={index} className="flex flex-col md:flex-row items-start md:items-start gap-4 border-b pb-4">
                                    <Image
                                        width={100}
                                        height={100}
                                        src={urlFor(items.image).url()}
                                        alt="Product Image"
                                        className="w-32 h-32 object-cover rounded-md"
                                    />
                                    <div className="flex flex-col md:flex-row justify-between flex-1 gap-6">
                                        <div>
                                            <p className="font-medium">{items.productName}</p>
                                            <p className="text-sm text-gray-600">
                                                {items.category}
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                {items.category}
                                            </p>
                                            <p className='mt-2'>Quantity: {items.quantity}</p>
                                        </div>
                                        <div className="flex items-center gap-4">

                                            <button className=' ml-6 mt-2' onClick={() => addToWishlist(items)}><Image alt="" src={love}>
                                            </Image></button>
                                            <button onClick={() => {
                                                removeFromCart(items._id)
                                            }
                                            }>
                                                <Image
                                                    src={dustbin}
                                                    alt="Save to Wishlist"
                                                    className="cursor-pointer w-6 h-6"
                                                />
                                            </button>
                                        </div>
                                    </div>
                                    <p className="text-right font-medium">MRP: ₹ {items.price}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Summary Section */}
                <div className="w-full lg:w-[350px] p-6  shadow-md">
                    <h2 className="text-2xl font-bold">Summary</h2>

                    {/* Subtotal and Delivery */}
                    <div className="flex justify-between mt-6 text-sm">
                        <p>Subtotal</p>
                        <p>₹ {getTotalPrice()}</p>
                    </div>
                    <div className="flex justify-between text-sm mt-2">
                        <p>Estimated Delivery & Handling</p>
                        <p>Free</p>
                    </div>

                    {/* Total */}
                    <div className="flex justify-between mt-6 text-lg border-t-2 border-b-2 border-gray-300 py-3 font-medium">
                        <p>Total</p>
                        <p>₹ {getTotalPrice()}</p>
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

export default Page;

