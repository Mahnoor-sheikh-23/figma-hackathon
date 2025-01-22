"use client";
import Navbar from '@/components/Navbar'
import React from 'react';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import Image from 'next/image';
import frame from '../../../public/shoe-images/frame.png';
import down from '../../../public/shoe-images/down.png';
import upper from "../../../public/shoe-images/uppper.png"
import Footer from '@/components/Footer';
import { useWishlist } from "@/components/wishlistContext";
import Link from 'next/link';
import love from "../../../public/shoe-images/love.png"
import { urlFor } from '@/sanity/lib/image';
type Item = {
    _id: string;
    image: string;
    productName: string;
    price: number;
    category: string;
    status: string;
    colors: string[]
};

const ItemsPage = () => {
    const searchParams = useSearchParams(); // Get the query parameters from the URL
    const category = searchParams.get("category") || "all";
    const [data, setData] = useState<Item[]>([])
    const { addToWishlist } = useWishlist();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
               
                const response = await fetch(`https://shoe-nike-figma-hackathon.netlify.app/api/products?category=${encodeURIComponent(category)}`);
                console.log(response);
                if (!response.ok) {
                    throw new Error("Failed to fetch products");
                }
                const responses = await response.json();
               
                setData(responses.data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, [category]);
    return (
        <div>
            <Navbar />
            <Header />
            <div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 sm:px-8">
                    {/* Left Section */}
                    <div className="text-[20px] sm:text-[24px] font-medium mt-4 sm:mt-6">
                        <p>New (500)</p>
                    </div>

                    {/* Right Section */}
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-20 font-normal mt-4 sm:mt-6">
                        {/* Hide Filters */}
                        <div className="flex gap-2 h-[28px] w-auto sm:w-[137.91px] items-center">
                            <p className="text-[14px] sm:text-[15px]">Hide Filters</p>
                            <Image src={frame} alt="" />
                        </div>

                        {/* Sort By */}
                        <div className="flex gap-2 h-[28px] w-auto sm:w-[86px] items-center">
                            <p className="text-[14px] sm:text-[15px]">Sort By</p>
                            <div>
                                <Image src={down} alt="" className="mt-1" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex  justify-between'>
                    <div className='w-[260px] h-[449px] overflow-y-auto overflow-x-hidden  md:flex md:flex-row hidden flex-col gap-10'>
                        <div className='h-[1000px] w-[192px] flex flex-col m-8 gap-20'>
                            <div>
                                <ul className='space-y-5 font-medium text-sm'>
                                    <li>Shoes</li>
                                    <li>Sports Bars</li>
                                    <li>Tops & T-Shirts</li>
                                    <li>Hoodies & Sweatstshirt</li>
                                    <li>Jackets</li>
                                    <li>Trouser and Tights</li>
                                    <li>Shorts</li>
                                    <li>Tracksuits</li>
                                    <li>Jumpsuit and Rompers</li>
                                    <li>Skirts and Dresses</li>
                                    <li>Socks</li>
                                    <li>Accesorries & Eqipment</li>
                                </ul>
                            </div>
                            <div className='space-y-7'>
                                <div >
                                    <div className='flex justify-between border-t-2 border-gray-200'>
                                        <h1 className='text-sm font-medium mb-7'>Gender</h1>
                                        <div className='mt-2'>
                                            <Image src={upper} alt='' />
                                        </div>
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='p-1'>
                                            <input type="checkbox" name="option3" value="Option 3" />
                                            Men
                                        </label>
                                        <label className='p-1'>
                                            <input type="checkbox" name="option3" value="Option 3" />
                                            Women
                                        </label>
                                        <label className='p-1'>
                                            <input type="checkbox" name="option3" value="Option 3" />
                                            Unisex
                                        </label>
                                    </div>
                                </div>
                                <div >
                                    <div className='flex justify-between  border-t-2 border-gray-200'>
                                        <h1 className='text-sm font-medium mb-7'>Kids</h1>
                                        <div className='mt-2'>
                                            <Image src={upper} alt='' />
                                        </div>
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='p-1'>
                                            <input type="checkbox" name="option3" value="Option 3" />
                                            Boys
                                        </label >
                                        <label className='p-1'>
                                            <input type="checkbox" name="option3" value="Option 3" />
                                            Girls
                                        </label>

                                    </div>
                                </div>
                                <div>
                                    <div className='flex justify-between  border-t-2 border-gray-200'>
                                        <h1 className='text-sm font-medium mb-7'>Shop By Price</h1>
                                        <div className='mt-2'>
                                            <Image src={upper} alt='' />
                                        </div>
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='p-1'>
                                            <input type="checkbox" name="option3" value="Option 3" />
                                            Under ₹ 2 500.00
                                        </label >
                                        <label className='p-1'>
                                            <input type="checkbox" name="option3" value="Option 3" />
                                            ₹ 2 501.00 - ₹ 7 500.00
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full sm:w-[1092px]'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 '>
                            {data.map((items: Item) => (
                                <div key={items._id} className='h-[533px] flex p-3 md:p-0  '>
                                    <div className='w-full sm:w-[270px] h-[320px] '>
                                        <div className='md:h-[348px] md:w-[348px]  bg-gray-100 flex items-center justify-center'>
                                            <Link href={`/store/${items._id}`}>
                                                <Image alt='' src={urlFor(items.image).url()} className='object-cover' width={348} height={348} />
                                            </Link>
                                        </div>
                                        <div className='flex justify-between'>
                                            <div className='w-[201px] h-[84px] '>
                                                <p className='text-red-800 mt-9'>{items.status}</p>
                                                <p className='mt-2 font-medium text-[15px]'>{items.productName}</p>
                                                <p className=' font-normal text-[#757575] text-[15px]'>{items.category} </p>
                                                <p className=' font-normal text-[#757575] text-[15px]'>  {items.colors && items.colors.length > 0
                                                    ? items.colors.join(', ')
                                                    : 'No Colors Available'} Color</p>
                                                <Link className='text-black font-medium text-[15px]' href='/'>
                                                    MRP : ₹ {items.price}
                                                </Link>

                                                <button className=' ml-6 mt-5' onClick={() => addToWishlist(items)}><Image alt="" src={love}>
                                                </Image></button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ItemsPage;
