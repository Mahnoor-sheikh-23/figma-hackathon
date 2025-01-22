"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import nike from "../public/image/nikeSign.png";
import search from "../public/image/search.png";
import heart from "../public/image/heart.png";
import bag from "../public/image/bag.png";
import { useCart } from "./CartContext";
import { urlFor } from "@/sanity/lib/image";
import { useWishlist } from "./wishlistContext";

// Define the Product type
type Product = {
    _id: string;
    productName: string;
    category: string;
    image: string;
    description: string;
    price: number;
};

const Header = () => {
    const { cartCount } = useCart();
    const { wishlistCount } = useWishlist()

    // State to manage search input and search results
    const [searchTerm, setSearchTerm] = useState<string>(""); // Search term from user input
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]); // Filtered products from API

    // Fetch and filter products based on search term
    useEffect(() => {
        const fetchProducts = async () => {
            if (!searchTerm.trim()) {
                setFilteredProducts([]); // Clear results when search is empty
                return;
            }
            try {
                const res = await fetch(`/api/products?search=${searchTerm}`, {
                    cache: "no-store",
                });
                if (res.ok) {
                    const { data } = await res.json();
                    setFilteredProducts(data); // Update state with API response
                } else {
                    console.error("Failed to fetch products");
                }
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchProducts();
    }, [searchTerm]);


    return (
        <div className="px-4 md:px-6 bg-white shadow-sm">
            {/* First Row: Logo and Icons */}
            <div className="flex justify-between items-center w-full">
                <Link href={"/"}>
                    <Image src={nike} alt="Nike Logo" className="h-10 w-auto md:h-[78px]" />
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex space-x-8 text-lg font-medium">
                    <ul className="flex space-x-6">
                        <li><Link href="/items/category?category=all">New & Featured</Link></li>
                        <li><Link href="/items/category?category=Men's%20Shoes">Men</Link></li>
                        <li><Link href="/items/category?category=Women's%20Shoes">Women</Link></li>
                        <li><Link href="/items/kids">Kids</Link></li>
                        <li><Link href="/items/sale">Sale</Link></li>
                        <li><Link href="/items/snkrs">SNKRS</Link></li>
                    </ul>
                </div>

                {/* Icons */}
                <div className="flex items-center space-x-5">
                    <div className="relative hidden mt-3 md:flex border-none">
                        {/* Search Bar */}
                        <div className="flex items-center h-10 bg-gray-100 px-3 rounded-full w-full">
                            <Image src={search} alt="Search Icon" className="h-6 w-6" />
                            <input
                                className="bg-gray-100 focus:outline-none text-sm px-2 w-full"
                                type="text"
                                placeholder="Search"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        {/* Dropdown Results */}
                        {filteredProducts.length > 0 && (
                            <div className="absolute top-12 left-0  w-[300px] overflow-y-auto h-[350px] bg-white shadow-lg z-50 rounded-lg">
                                <div className="py-2">
                                    {filteredProducts.map((product, index: number) => (
                                        <div key={index} className="px-4 py-2 hover:bg-gray-100 ">
                                            <Link
                                                href={`/store/${product._id}`}  // Navigate to product detail page
                                                className="flex items-center space-x-4"
                                            >
                                                <Image
                                                    src={urlFor(product.image).url()}
                                                    alt=""
                                                    width={40}
                                                    height={40}
                                                    className="rounded-full"
                                                />
                                                <div>
                                                    <p className="font-medium">{product.productName}</p>
                                                    <p className="text-sm text-gray-500">${product.price.toFixed(2)}</p>
                                                </div>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                    <Link href={"/wishlist"}>

                        <Image src={heart} alt="Wishlist Icon" className="h-9 w-9" />
                        <span className="absolute top-[64px] right-[98px] md:right-[74px] bg-gray-600 text-white text-xs rounded-full px-1">
                            {wishlistCount}
                        </span>
                    </Link>
                    <Link
                        href={cartCount > 0 ? "/cartItems" : "#"}
                        onClick={(e) => {
                            if (cartCount === 0) {
                                e.preventDefault(); // Prevent navigation if cartCount is 0

                                alert("Your cart is empty! Add items to proceed.");
                            }
                        }}
                        className="relative"
                    >
                        <Image src={bag} alt="Bag Icon" className="md:h-7 md:w-8" />
                        <span className="absolute top-[-5px] right-[-7px] bg-gray-600 text-white text-xs rounded-full px-1">
                            {cartCount}
                        </span>
                    </Link>


                    {/* Hamburger Menu */}
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
                                <ul className="space-y-4 mt-6 text-xl font-medium">
                                    <li><Link href="/items/category?category=all">New & Featured</Link></li>
                                    <li><Link href="/items/category?category=Men's%20Shoes">Men</Link></li>
                                    <li><Link href="/items/category?category=Women's%20Shoes">Women</Link></li>
                                    <li><Link href="/items/kids">Kids</Link></li>
                                    <li><Link href="/items/sale">Sale</Link></li>
                                    <li><Link href="/items/snkrs">SNKRS</Link></li>
                                </ul>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>

            </div>
            <div className="relative mt-0 mb-4 md:mb-0 md:hidden flex border-none">
                {/* Search Bar */}
                <div className="flex items-center h-10 bg-gray-100 px-3 rounded-full w-full">
                    <Image src={search} alt="Search Icon" className="h-6 w-6" />
                    <input
                        className="bg-gray-100 focus:outline-none text-sm px-2 w-full"
                        type="text"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {/* Dropdown Results */}
                {filteredProducts.length > 0 && (
                    <div className="absolute top-12 left-0  w-auto overflow-y-auto h-[350px] bg-white shadow-lg z-50 rounded-lg">
                        <div className="py-2">
                            {filteredProducts.map((product, index: number) => (
                                <div key={index} className="px-4 py-2 hover:bg-gray-100">
                                    <Link
                                        href={`/store/${product._id}`} // Navigate to product detail page
                                        className="flex items-center space-x-4"
                                    >
                                        <Image
                                            src={urlFor(product.image).url()}
                                            alt=""
                                            width={40}
                                            height={40}
                                            className="rounded-full"
                                        />
                                        <div>
                                            <p className="font-medium">{product.productName}</p>
                                            <p className="text-sm text-gray-500">${product.price.toFixed(2)}</p>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;









