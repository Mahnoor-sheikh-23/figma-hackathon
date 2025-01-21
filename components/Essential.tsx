import React from 'react';
import Image from 'next/image';
import mens from "../public/shoe-images/for-mens.png";
import womens from "../public/shoe-images/for-women.png";
import kids from "../public/shoe-images/for-kids.png";
import Link from 'next/link';
const Essential = () => {
    return (
        <div>
            <div className="flex flex-col justify-center px-4 sm:px-8 lg:px-16">
                {/* Heading Section */}
                <div className="mb-6">
                    <p className="text-[20px] md:text-[23px] text-start font-medium">The Essentials</p>
                </div>
                {/* Image Section */}
                <div className="flex flex-wrap justify-center gap-4 items-center">
                    {/* Men's Image */}
                    <div className="flex-1 min-w-[150px] max-w-[300px] lg:max-w-none lg:w-[300px]">
                        <Link href={"/items/category?category=Men%27s%20Shoes"}>
                            <Image
                                src={mens}
                                alt="Men's Shoes"
                                className="w-full h-auto lg:h-[500px] object-cover rounded-md"
                            />
                        </Link>
                    </div>

                    {/* Women's Image */}
                    <div className="flex-1 min-w-[150px] max-w-[300px] lg:max-w-none lg:w-[300px]">
                        <Link href={"/items/category?category=Women%27s%20Shoes"}>
                            <Image
                                src={womens}
                                alt="Women's Shoes"
                                className="w-full h-auto lg:h-[500px] object-cover rounded-md"
                            />
                        </Link>
                    </div>

                    {/* Kids' Image */}
                    <div className="flex-1 min-w-[150px] max-w-[300px] lg:max-w-none lg:w-[300px]">
                        <Image
                            src={kids}
                            alt="Kids' Shoes"
                            className="w-full h-auto lg:h-[500px] object-cover rounded-md"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Essential;
