import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import shoeImage from "../public/image/main-shoes-image.png"

const HeroSectionImage = () => {
    return (
        <div className="flex flex-col justify-center items-center  w-full">
            {/* Header Section */}
            <div className="flex flex-col justify-center items-center py-2 bg-[#F5F5F5] w-full">
                <p className="font-medium text-xs md:text-sm text-center">Hello Nike App</p>
                <p className="font-normal text-[9px] md:text-[11px] text-center whitespace-nowrap">
                    Download the app to access everything Nike &nbsp;
                    <Link className="underline" href="/">
                        Get Your Great
                    </Link>
                </p>
            </div>

            {/* Image Section */}
            <div className="w-full">
                <Link href='/items/all'>
                    <Image
                        src={shoeImage}
                        alt=""
                        className="w-full object-cover h-[300px] sm:h-[400px] md:h-[550px] lg:h-[550px]"
                    />
                </Link>
            </div>

            {/* Text Section */}
            <div className="flex flex-col justify-center items-center m-4 md:m-9 leading-7 md:leading-9 px-4">
                <div className="flex flex-col justify-center items-center">
                    <p className="text-base md:text-[15px] font-medium">First Look</p>
                    <h1 className="font-medium text-2xl md:text-[56px] text-center">
                        NIKE AIR MAX PULSE
                    </h1>
                </div>
                <div className="font-normal text-xs md:text-sm mt-4 md:mt-7 text-center">
                    <p>Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse</p>
                    <p>—designed to push you past your limits and help you go to the max.</p>
                </div>
                {/* Buttons Section */}
                <div className="gap-3 flex mt-4 items-center justify-center flex-wrap">
                    <button className="bg-black text-white rounded-3xl h-[39px] w-[138px]">
                        Notify Me
                    </button>
                    <button className="bg-black text-white rounded-3xl h-[39px] w-[138px]">
                        Shop Air Max
                    </button>
                </div>
            </div>
        </div>

    )
}

export default HeroSectionImage
