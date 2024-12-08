import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import nike from "../public/image/nikeSign.png";
import search from "../public/image/search.png";
import heart from "../public/image/heart.png";
import bag from "../public/image/bag.png";
import { GiHamburgerMenu } from "react-icons/gi";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";



const Header = () => {
    return (
       

        <div className="flex justify-between items-center px-4  md:px-6 bg-white shadow-sm">
            {/* Logo Section */}
            <div>
                <Link href={"/"}>
                    <Image src={nike} alt="Nike Logo" className='h-10 w-auto md:h-[78px]' />
                </Link>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex space-x-8 text-lg font-medium">
                <ul className="flex space-x-6">
                    <li>
                        <Link href="/">New & Featured</Link>
                    </li>
                    <li>
                        <Link href="/mens">Men</Link>
                    </li>
                    <li>
                        <Link href="/">Women</Link>
                    </li>
                    <li>
                        <Link href="/">Kids</Link>
                    </li>
                    <li>
                        <Link href="/">Sale</Link>
                    </li>
                    <li>
                        <Link href="/">SNKRS</Link>
                    </li>
                </ul>
            </div>

            {/* Search and Icons */}
            <div className="flex items-center space-x-4">
                {/* Search Bar */}
                <div className="hidden md:flex items-center h-10 bg-gray-100 px-3 rounded-full">
                    <Image src={search} alt="Search Icon" className="h-5 w-5" />
                    <input
                        className="bg-gray-100 focus:outline-none text-sm px-2 w-full"
                        type="text"
                        placeholder="Search"
                    />
                </div>

                {/* Icons */}
                <div className="flex items-center space-x-4">
                    <Image src={heart} alt="Wishlist Icon" className="h-6 w-6" />
                    <Image src={bag} alt="Bag Icon" className="h-6 w-6" />

                    {/* Hamburger Menu for Mobile */}
                    <div className="md:hidden">
                        <Sheet>
                            <SheetTrigger>
                                <GiHamburgerMenu className="text-xl mt-1 cursor-pointer" />
                            </SheetTrigger>
                            <SheetContent>
                                <SheetHeader>
                                    <SheetTitle>Menu</SheetTitle>
                                    <SheetDescription>
                                        Explore all categories and options below.
                                    </SheetDescription>
                                </SheetHeader>
                                {/* Mobile Links */}
                                <ul className="space-y-4 mt-6 text-xl font-medium">
                                    <li>
                                        <Link href="/">New & Featured</Link>
                                    </li>
                                    <li>
                                        <Link href="/mens">Men</Link>
                                    </li>
                                    <li>
                                        <Link href="/">Women</Link>
                                    </li>
                                    <li>
                                        <Link href="/">Kids</Link>
                                    </li>
                                    <li>
                                        <Link href="/">Sale</Link>
                                    </li>
                                    <li>
                                        <Link href="/">SNKRS</Link>
                                    </li>
                                </ul>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Header
