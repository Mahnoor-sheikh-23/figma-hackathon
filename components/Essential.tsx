import React from 'react';
import Image from 'next/image';
import mens from "../public/shoe-images/for-mens.png";
import womens from "../public/shoe-images/for-women.png";
import kids from "../public/shoe-images/for-kids.png";

const Essential = () => {
    return (
        <div>
            <div className="flex flex-col justify-center px-4 sm:px-8 lg:px-16">
                {/* Heading Section */}
                <div className=" mb-6">
                    <p className="text-[20px] md:text-[23px] font-medium">The  Essentials</p>
                </div>

                {/* Image Section */}
                <div className="flex md:flex-row flex-col justify-center gap-2 items-center">
                    <Image
                        src={mens }
                        alt=""
                        className="object-cover "
                    />
                    <Image
                        src={womens }
                        alt=""
                        className="object-cover "
                    />
                    <Image
                        src={kids }
                        alt=""
                        className="object-cover "
                    />
                </div>

                
            </div>
        </div>
    )
}

export default Essential
