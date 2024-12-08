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


const Gear = () => {

    const items = [
        {
            id: 1,
            // button: "-40%",
            img: "/shoe-images/shoes-1.png",
            para: "Nike Air Max Pulse",
            anker: "Women's  Shoes",
            stars: '/images/Five star.png',
            price : "₹ 13 995"
        },
        {
            id: 2,
            // button: "-35%",
            img: "/shoe-images/black.png",
            para: "AK-900 Wierd Keyboard",
            anker: "$960",
            stars: '/images/Five star.png'
        },
        {
            id: 3,
            // button: "-30%",
            img: "/shoe-images/night.png",
            para: "IPS LCD Gaming Monitor",
            anker: "$320",
            stars: '/images/Five star.png'
        },
        {
            id: 4,
            // button: "-25%",
            img: "/shoe-images/t-shirt.png",
            para: "S-Series Comfort Chair",
            anker: "$375",
            stars: '/images/Five star.png'
        },
        {
            id: 5,
            // button: "-75%",
            img: "/shoe-images/orange.png",
            para: "HAVIT HV-G92 Gamepad",
            anker: "$120",
            stars: '/images/Five star.png'
        },
        {
            id: 6,
            button: "-75%",
            img: "/shoe-images/shoes-1.png",
            para: "HAVIT HV-G92 Gamepad",
            anker: "$120",
            stars: '/images/Five star.png'
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
                            Gear Up
                        </div>
                        <div className="flex gap-9   ">
                            <CarouselPrevious className="bg-gray-300 p-2 rounded-full" />
                            <CarouselNext className="bg-gray-300 p-2 rounded-full" />
                        </div>
                    </div>
                    <CarouselContent>
                        {items.map((items) => (
                            <CarouselItem key={items.id} className='md:basis-1/4  lg:basis-[25%] flex-shrink-0 w-[300px] p-4'>
                                <div className='w-[1308px] h-[350px] flex  mt-10 '>
                                    <div className='w-[270px] h-[350px ]  '>
                                        <div className='w-[270px] h-[250px] items-center justify-center bg-gray-100   flex '>
                                            <Image alt='' src={items.img} width={441} height={441} />
                                        </div>
                                        <div className='flex'>
                                        <div className='w-[201px] h-[84px] leading-8'>
                                            <p className='mt-3 font-medium text-[15px]'>{items.para}</p>
                                            <Link  className="text-[#757575]  font-medium text-[15px]" href='/'>{items.anker}</Link>
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

export default Gear

