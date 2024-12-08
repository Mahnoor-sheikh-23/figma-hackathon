import React from 'react';
import Image from 'next/image';
import ManRun from "../public/shoe-images/man-run.png";
import Link from 'next/link';

const AfterProductc = () => {
    return (
       

        <div className="flex flex-col justify-center px-4 sm:px-8 lg:px-16">
            {/* Heading Section */}
            <div className="ml-4 md:ml-6 mb-6">
                <p className="text-[20px] md:text-[23px] font-medium">Featured</p>
            </div>

            {/* Image Section */}
            <div className="flex justify-center items-center">
                <Image
                    src={ManRun}
                    alt=""
                    className="object-cover "
                />
            </div>

            {/* Text Section */}
            <div className="text-center flex flex-col mt-8 md:mt-12 lg:mt-16 justify-center leading-[40px] md:leading-[50px] lg:leading-[70px] px-4">
                <h1 className="font-medium text-[28px] md:text-[42px] lg:text-[54px]">
                    STEP INTO WHAT FEELS GOOD
                </h1>
                <p className="text-[14px] md:text-[16px] lg:text-[18px]">
                    Cause everyone should know the feeling of running in that perfect pair.
                </p>
            </div>

            {/* Button Section */}
            <div className="flex justify-center mt-6 md:mt-8  mb-6 md:mb-9">
              
                
                <button className="bg-black text-white rounded-3xl h-[39px] w-[138px] text-sm md:text-base hover:bg-gray-800 transition duration-300">
                   
                   <Link href={"/store"}>find your shoes</Link>
                </button>
               
            </div>
        </div>

    )
}

export default AfterProductc
