import React from 'react';
import Link from 'next/link';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from 'next/image';


const Products = () => {

    const items = [
        {
            id: 1,
            img: "/shoe-images/shoes-1.png",
            para: "Nike Air Max Pulse",
            anker: "Women's  Shoes",
            price : "₹ 13 995"
        },
        {
            id: 2,
            // button: "-35%",
            img: "/shoe-images/shoes-3.png",
            para: "Nike Court Vision Low",
            anker: "₹ 15 895",
        },
        {
            id: 3,
            // button: "-30%",
            img: "/shoe-images/shoes-4.png",
            para: "Nike Air Force 1 PLT.AF.ORM",
            anker: "₹ 18 872",
        },
        {
            id: 4,
            // button: "-25%",
            img: "/shoe-images/rainbow.png",
            para: "Nike SB Zoom Janoski OG+",
            anker: "₹ 19 980",
        },
        {
            id: 5,
            // button: "-75%",
            img: "/shoe-images/shoes-10.png",
            para: "Nike Air Force 1 '07",
            anker: "₹ 15 230",
        },
        {
            id: 6,
            button: "-75%",
            img: "/shoe-images/orange.png",
            para: "HAVIT HV-G92 Gamepad",
            anker: "₹ 13 432",
        },
    ]

    return (
        <div>
            <div className="flex md:justify-center mb-6 ml-7 md:ml-16 h-[604.36px]  mt-14">
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

                    <CarouselContent>
                        {items.map((items) => ( 
                            <CarouselItem key={items.id} className='md:basis-1/4  lg:basis-[25%] flex-shrink-0 w-[300px] p-4'>
                                <div className='md:w-[1308px] md:h-[350px] flex   mt-10 custom:gap-9  h-auto w-auto '>
                                    <div className='w-[270px] h-[350px ] '>
                                        <div className='md:w-[270px]  h-auto w-auto md:h-[250px] items-center justify-center bg-gray-100   flex '>
                                            <Image alt='' src={items.img} width={441} height={441} />
                                        </div>
                                        <div className='flex'>
                                        <div className='w-[201px]  h-[84px] leading-8'>
                                            <p className='mt-3 font-medium text-[15px]'>{items.para}</p>
                                            <Link className="text-[#757575]  font-medium text-[15px]" href='/'>{items.anker}</Link>
                                        </div>
                                        <div>
                                            <p className='mt-3 text-black text-[15px] font-semibold'>{items.price}</p>
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
