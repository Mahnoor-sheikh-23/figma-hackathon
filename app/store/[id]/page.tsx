"use client";
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useCart } from '@/components/CartContext';
import { urlFor } from '@/sanity/lib/image';
import group from "../../../public/image/Group.png";

// Define the type for each item
type Item = {
    _id: string;
    image: string;
    productName: string;
    category: string;
    color: number;
    price: number;
    description: string;
    inventory: number;
    quantity: number
};

const Page = () => {
    const { id } = useParams(); // Use useParams to get the dynamic id
    const [products, setProducts] = useState<Item | null>(null); // Ensure proper type handling
    const { addToCart } = useCart();
   

    const handleAddToCart = () => {
        if (!products) return; // Ensure product is available
        const productToAdd = {
            _id: products._id,
            productName: products.productName,
            price: products.price,
            image: products.image,
            quantity: 1,
            category: products.category,
            description: products.description,
            color: products.color,
            inventory: products.inventory
        };
        addToCart(productToAdd);
    };

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://shoe-nike-figma-hackathon.netlify.app/api/products/route.ts`);
                if (!response.ok) {
                    throw new Error('Failed to fetch product');
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        };

        fetchProduct();

    }, [id ]);

    if (!products) {
        return <div className="flex items-center justify-center h-screen">
        <div className="flex space-x-2">
          {/* Dot 1 */}
          <div className="w-4 h-4 bg-gray-600 rounded-full animate-bounce delay-[0ms]"></div>
          {/* Dot 2 */}
          <div className="w-4 h-4 bg-gray-600 rounded-full animate-bounce delay-[200ms]"></div>
          {/* Dot 3 */}
          <div className="w-4 h-4 bg-gray-600 rounded-full animate-bounce delay-[400ms]"></div>
        </div>
      </div>
    }
    const stockStatus = products.inventory > 0 ? "In Stock" : "Out of Stock"

    return (
        <div>
            <Navbar />
            <Header />
            <div>
                <div
                    key={products._id}
                    className="flex justify-center items-start py-8 px-4 sm:px-8 md:px-16 lg:px-36"
                >
                    <div className="flex flex-col lg:flex-row gap-11 justify-start items-start max-w-screen-xl w-full">
                        <div className="flex justify-center items-start w-full lg:w-1/2 mb-6 lg:mb-0">
                            <Image
                                src={urlFor(products.image).url()}
                                alt={products.productName}
                                width={653}
                                height={653}
                            />
                        </div>
                        <div className="w-full lg:w-1/2 text-left px-4">
                            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                                {products.productName}
                            </h1>
                            <p className="pb-2">{products.category}</p>
                            <p className="text-sm sm:text-base mb-6">{products.description}</p>
                            <p className={`text-sm sm:text-base mb-6 ${stockStatus === "Out of Stock" ? "text-red-600" : "text-green-600"}`}>
                                {stockStatus}
                            </p>
                            <p className="text-[20px] md:text-[36px] mb-6">
                                MRP: ₹ {products.price}
                            </p>
                            <div className="bg-black flex justify-center gap-2  h-[40px] w-[148px] text-center rounded-3xl float-start items-center">
                                <button
                                    onClick={handleAddToCart}
                                    disabled={products.inventory === 0} // Disable if out of stock
                                    className={`bg-black flex justify-center gap-3  text-white rounded-3xl mt- h-[20px] w-[120px] text-sm md:text-base transition duration-300 ${products.inventory === 0 ? "opacity-50 cursor-not-allowed" : ""
                                        }`}
                                >
                                    <Image alt="" src={group}></Image>
                                    Add To Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Page;
