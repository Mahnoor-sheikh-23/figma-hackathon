import Navbar from '@/components/Navbar'
import React from 'react';
import Header from '@/components/Header';
import Image from 'next/image';
import frame from '../../public/shoe-images/frame.png';
import down from '../../public/shoe-images/down.png';
import upper from "../../public/shoe-images/uppper.png"
import Footer from '@/components/Footer';
import Link from 'next/link';
type Item = {
    id: number;
    img: string;
    para: string;
    para2: string;
    para3: string;
    anker: string;
};
const page = () => {

    const item: Item[] = [
        {
            id: 1,
            img: "/shoe-images/jordan-1.png",
            para: "Nike Air Force 1 Mid '07",
            para2: "Men's shoes",
            para3: "1 Color",
            anker: "MRP : ₹ 10 795.00",
          
        },
        {
            id: 2,
            img: "/shoe-images/shoes-3.png",
            para: "Nike Air Force 1 Mid '07",
            para2: "Men's shoes",
            para3: "1 Color",
            anker: "MRP : ₹ 10 795.00",
          
        },
        {
            id: 3,
            img: "/shoe-images/shoes-4.png",
            para: "Nike Air Force 1 Mid '07",
            para2: "Men's shoes",
            para3: "1 Color",
            anker: "MRP : ₹ 10 795.00",
          
        },
        {
            id: 4,
            img: "/shoe-images/shoes-5.png",
            para: "Nike Air Force 1 Mid '07",
            para2: "Men's shoes",
            para3: "1 Color",
            anker: "MRP : ₹ 10 795.00",
          
        },
        {
            id: 5,
            img: "/shoe-images/shoes-6.png",
            para: "Nike Air Force 1 Mid '07",
            para2: "Men's shoes",
            para3: "1 Color",
            anker: "MRP : ₹ 10 795.00",
          
        },
        {
            id: 7,
            img: "/shoe-images/night.png",
            para: "Nike Air Force 1 Mid '07",
            para2: "Men's shoes",
            para3: "1 Color",
            anker: "MRP : ₹ 10 795.00",
          
        },
        {
            id: 8,
            img: "/shoe-images/shoes-7.png",
            para: "Nike Air Force 1 Mid '07",
            para2: "Men's shoes",
            para3: "1 Color",
            anker: "MRP : ₹ 10 795.00",
          
        },
        {
            id: 9,
            img: "/shoe-images/t-shirt.png",
            para: "Nike Air Force 1 Mid '07",
            para2: "Men's shoes",
            para3: "1 Color",
            anker: "MRP : ₹ 10 795.00",
          
        },
        {
            id: 10,
            img: "/shoe-images/shoes-8.png",
            para: "Nike Air Force 1 Mid '07",
            para2: "Men's shoes",
            para3: "1 Color",
            anker: "MRP : ₹ 10 795.00",
          
        },
        {
            id: 11,
            img: "/shoe-images/shoes-9.png",
            para: "Nike Air Force 1 Mid '07",
            para2: "Men's shoes",
            para3: "1 Color",
            anker: "MRP : ₹ 10 795.00",
          
        },
        {
            id: 12,
            img: "/shoe-images/shoes-10.png",
            para: "Nike Air Force 1 Mid '07",
            para2: "Men's shoes",
            para3: "1 Color",
            anker: "MRP : ₹ 10 795.00",
          
        },
        {
            id: 13,
            img: "/shoe-images/black.png",
            para: "Nike Air Force 1 Mid '07",
            para2: "Men's shoes",
            para3: "1 Color",
            anker: "MRP : ₹ 10 795.00",
          
        },
        {
            id: 14,
            img: "/shoe-images/red-shoes.png",
            para: "Nike Air Force 1 Mid '07",
            para2: "Men's shoes",
            para3: "1 Color",
            anker: "MRP : ₹ 10 795.00",
          
        },
        {
            id: 15,
            img: "/shoe-images/orange.png",
            para: "Nike Air Force 1 Mid '07",
            para2: "Men's shoes",
            para3: "1 Color",
            anker: "MRP : ₹ 10 795.00",
          
        },
        {
            id: 16,
            img: "/shoe-images/rainbow.png",
            para: "Nike Air Force 1 Mid '07",
            para2: "Men's shoes",
            para3: "1 Color",
            anker: "MRP : ₹ 10 795.00",
          
        },
    ];

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
                        <div className='h-[2145px] w-[192px] flex flex-col m-8 gap-20'>
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
                            {item.map((items) => (
                                <div key={items.id} className='h-[533px] flex p-3 md:p-0  '>
                                    <div className='w-full sm:w-[270px] h-[320px] '>
                                        <div className='md:h-[348px] md:w-[348px]  bg-gray-100 flex items-center justify-center'>
                                            <Link href={`/store/${items.id}`}>
                                                <Image alt='' src={items.img} className='object-cover' width={348} height={348} />
                                            </Link>
                                        </div>
                                        <div className='flex justify-between'>
                                            <div className='w-[201px] h-[84px] '>
                                                <p className='text-red-800'>Just In</p>
                                                <p className='mt-2 font-medium text-[15px]'>{items.para}</p>
                                                <p className=' font-normal text-[#757575] text-[15px]'>{items.para2}</p>
                                                <p className=' font-normal text-[#757575] text-[15px]'>{items.para3}</p>
                                                <Link className='text-black font-medium text-[15px]' href='/'>
                                                    {items.anker}
                                                </Link>  
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

export default page;
