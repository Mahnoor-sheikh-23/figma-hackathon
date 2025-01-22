"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from 'next/image';
type Item = {
    _id: string;
    image: string;
    productName: string;
    category: string;
    colors: number;
    price: number;
    description: string;
    inventory: number;
    quantity: number
    status:string
};
import { urlFor } from '@/sanity/lib/image';


const Products =  () => {
    const [datas , setData] = useState([])
    useEffect(()=>{
        const fetchdata = async () =>{
            const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
            const res = await fetch(
                `${apiUrl}/api/products?category?category=Men%27s%20Shoes}`,
                { cache: "no-store" } 
            );
        
            if (!res.ok) {
                return <p>Error: Failed to fetch data</p>;
            }
        
            const { data } = await res.json();
            
            setData(data)
            
                if (!data.length) {
                    return <p>No data available</p>;
                }
        }
       fetchdata() 
    } ,[])
    return (
        <div>
            <div className="flex md:justify-center mb-6 ml-5 md:ml-16 h-[604.36px]  mt-14">
                <Carousel opts={{
                    align: "start",
                }}
                    className="relative w-full flex flex-col">
                    <div className="flex  justify-between items-center w-full">
                        <div className="text-[22px] whitespace-nowrap font-semibold">
                            Best Of Air Max
                        </div>
                        <div className="flex gap-9 ">
                            <CarouselPrevious className="bg-gray-300 p-2 rounded-full" />
                            <CarouselNext className="bg-gray-300 p-2 rounded-full" />
                        </div>
                    </div>
                      {/* carousel  */}
                      <CarouselContent>
                        {datas.map((items: Item) => (
                            <CarouselItem
                                key={items._id}
                                className="md:basis-1/3 flex justify-center md:mr-6 lg:mr-0 lg:basis-[25%] flex-shrink-0 w-[300px] p-4"
                            >
                                <div className="md:w-[1308px] md:h-[380px] flex mt-10 custom:gap-9 h-auto w-auto">
                                    <div className="w-[270px] h-[350px]">
                                        {/* Image Section */}
                                        <div className="md:w-[270px] h-auto w-auto md:h-[250px] items-center justify-center bg-gray-100 flex">
                                            <Link href={`/store/${items._id}`}>
                                                <Image
                                                    alt=""
                                                    src={urlFor(items.image).url()}
                                                    width={441}
                                                    height={441}
                                                />
                                            </Link>
                                        </div>
                                        {/* Details Section */}
                                        <div className="flex">
                                            <div className="w-[201px] h-[89px] leading-8">
                                                <p className="mt-3 font-medium text-[15px]">
                                                    {items.productName}
                                                </p>
                                                <Link
                                                    className="text-[#757575] font-medium text-[15px]"
                                                    href={`/store/${items._id}`}
                                                >
                                                    {items.category}
                                                </Link>
                                                <br />
                                                <Link
                                                    className="text-[#757575] font-medium text-[15px]"
                                                    href={`/store/${items._id}`}
                                                >
                                                    {`Colors Avaiable : ${items.colors}`}
                                                </Link>
                                                <Link
                                                    className="text-[#757575] font-medium text-[15px]"
                                                    href={`/store/${items._id}`}
                                                >
                                                    {items.status}
                                                </Link>
                                            </div>
                                            <div>
                                                <p className="mt-3 text-black text-[15px] font-semibold">
                                                    ₹ {items.price}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </div>

    )
}

export default Products
