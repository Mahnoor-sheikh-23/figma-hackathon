"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useWishlist } from "@/components/wishlistContext"; // Ensure the correct import path
import { urlFor } from "@/sanity/lib/image"; // Ensure this function is properly imported

const WishlistPage: React.FC = () => {
  const { wishlistItems, wishlistCount, removeFromWishlist } = useWishlist();

  return (
    <div>
      {/* Navbar and Header */}
      <Navbar />
      <Header />

      {/* Wishlist Section */}
      <div className="max-w-6xl mx-auto px-4 lg:px-8 py-10">
        {/* Page Heading */}
        <div className="text-center">
          <h1 className="text-3xl font-bold">
            {wishlistCount > 0 ? "Your Wishlist" : "Your Wishlist is Empty"}
          </h1>
          <p className="text-gray-600 mt-2">
            {wishlistCount > 0
              ? "Check out the items you’ve saved!"
              : "You don’t have any items in your wishlist yet. Start adding some!"}
          </p>
        </div>

        {/* Wishlist Content */}
        {wishlistItems.length > 0 ? (
          <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {wishlistItems.map((item, index) => (
              <div
                key={index}
                className="border rounded-lg shadow-sm p-4 hover:shadow-md transition"
              >
                {/* Product Image */}
                <Link href={`/store/${item._id}`}>

                  <Image
                    src={urlFor(item.image).url()} // Ensure URL generation works
                    alt={item.productName || "Product Image"}
                    width={200}
                    height={200}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                </Link>


                {/* Product Details */}
                <div className="mt-4">
                  <h3 className="text-lg font-medium">{item.productName}</h3>
                  <p className="text-sm text-gray-600">{item.category}</p>
                  <p className="text-right font-medium mt-2">MRP: ₹{item.price}</p>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeFromWishlist(item._id)}
                  className="w-full bg-black text-white text-sm py-2 mt-4 rounded-md hover:bg-gray-900 transition"
                >
                  Remove from Wishlist
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center mt-10">
            <Link href={"/items/category?category=all"} className="inline-block bg-black text-white px-6 py-3 rounded-full text-base font-bold transition hover:bg-gray-800">
              Start Shopping
            </Link>
          </div>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default WishlistPage;
