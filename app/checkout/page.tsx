"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import nike from "../../public/image/nikeSign.png";
import bag from "../../public/image/bag.png";
import msg from "../../public/shoe-images/msgs.png";
import Footer from '@/components/Footer';
import { useCart } from '@/components/CartContext';
import { urlFor } from '@/sanity/lib/image';
import { z } from 'zod';
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
// Define the form data schema using Zod
const checkoutSchema = z.object({
    firstName: z.string().min(3, "First name is required"),
    lastName: z.string().min(3, "Last name is required"),
    contact: z.string().min(10, "Contact number should be 10 digits").max(10, "Contact number should be 10 digits"),
    email: z.string().email("Invalid email address"),
    PAN: z.string().optional(),
    addressLine1: z.string().min(1, "Address Line 1 is required"),
    addressLine2: z.string().optional(),
    addressLine3: z.string().optional(),
    city: z.string().min(4, "City is required"),
    postalCode: z.string().min(1, "Postal Code is required"),


});

type CheckoutFormData = z.infer<typeof checkoutSchema>;

const Checkout = () => {
    const [formData, setFormData] = useState<CheckoutFormData>({
        firstName: '',
        lastName: '',
        contact: '',
        email: '',
        addressLine1: '',
        addressLine2: '',
        addressLine3: '',
        city: '',
        postalCode: '',
        PAN:""

    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [success, setSuccess] = useState<string | null>(null);
    
    

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("sumbit");
        setErrors({});
        const validation = checkoutSchema.safeParse(formData);
        if (!validation.success) {
          const validationErrors: Record<string, string> = {};
          validation.error.errors.forEach((err) => {
            if (err.path[0]) validationErrors[err.path[0]] = err.message;
          });
          setErrors(validationErrors);
          return;
        }
       
            // Make API call to submit form data
            const response = await fetch('http://localhost:3000/api/customers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            console.log("sumbit",data);
            
            if (response.ok) {
                setSuccess(data.message);
            } else {
                setErrors({ server: data.error });
                setSuccess(null);
                console.log("error is here  " , data.server);
                
            }
       
    };

    const { cartItems, cartCount, getTotalPrice } = useCart();

    return (
        <div className="min-h-screen flex flex-col">
            {/* Header */}
            <header className="flex items-center justify-between p-3 bg-white shadow-md sticky top-0 z-50">
                <div className="flex md:flex-row flex-col w-full justify-between md:gap-96 items-center">
                    <div>
                        <div className="flex justify-start items-start">
                            <Link href={"/"}>
                                <Image src={nike} alt="Nike Logo" className="h-10 w-auto md:h-[78px]" />
                            </Link>
                        </div>
                    </div>
                    <div className="flex gap-10 md:gap-9 mr-14">
                        <p>00 800 100 9538</p>
                        <Image src={msg} alt="Bag Icon" className=" object-cover" />
                        <Image src={bag} alt="Bag Icon" className="object-cover" />
                    </div>
                </div>
            </header>
            <main className="flex flex-col lg:flex-row gap-6 p-4 md:p-8">
                <section className="flex-1 bg-gray-50 p-4 md:p-6 rounded-lg shadow">
                    <div>
                        <h1 className="font-medium text-[21px]">How would you like to get your order?</h1>
                        <p className="text-[#757575]">
                            Customs regulation for India require a copy of the recipient&apos;s KYC...
                        </p>
                        <div className="md:h-[82px] md:w-[440px] w-auto h-auto pb-3 border-black border rounded-lg mt-9 text-center">
                            <button className="mt-6">Deliver it</button>
                        </div>

                        <h1 className="py-6 text-[20px] font-medium">Enter Your Name and Address:</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="space-y-6">
                                <div>
                                    <input
                                        name="firstName"
                                        type="text"
                                        placeholder="First Name"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                    />
                                    {errors.firstName && <p className="text-red-600 text-sm">{errors.firstName}</p>}
                                </div>
                                <div>
                                    <input
                                        name="lastName"
                                        type="text"
                                        placeholder="Last Name"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                    />
                                    {errors.lastName && <p className="text-red-600 text-sm">{errors.lastName}</p>}
                                </div>
                                <div>
                                    <input
                                        name="addressLine1"
                                        type="text"
                                        placeholder="Address Line 1"
                                        value={formData.addressLine1}
                                        onChange={handleChange}
                                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                    />
                                    {errors.addressLine1 && <p className="text-red-600 text-sm">{errors.addressLine1}</p>}
                                </div>
                                <div>
                                    <input
                                        name="addressLine2"
                                        type="text"
                                        placeholder="Address Line 2"
                                        value={formData.addressLine2}
                                        onChange={handleChange}
                                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                    />
                                </div>
                                <div>
                                    <input
                                        name="addressLine3"
                                        type="text"
                                        placeholder="Address Line 3"
                                        value={formData.addressLine3}
                                        onChange={handleChange}
                                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                    />
                                </div>

                                <div className="flex space-x-6">
                                    <div className="mb-4">
                                        <input
                                            name="postalCode"
                                            type="text"
                                            value={formData.postalCode}
                                            onChange={handleChange}
                                            className="w-full focus:ring-black md:w-[350px] px-3 py-3 rounded-md text-black"
                                            placeholder="Postal Code"
                                        />
                                        {errors.postalCode && <p className="text-red-600 text-sm">{errors.postalCode}</p>}
                                    </div>
                                    <div className="mb-4">
                                        <input
                                            name="city"
                                            type="text"
                                            value={formData.city}
                                            onChange={handleChange}
                                            className="w-full md:w-[350px] focus:ring-black px-3 py-3 rounded-md text-black"
                                            placeholder="City"
                                        />
                                        {errors.city && <p className="text-red-600 text-sm">{errors.city}</p>}
                                    </div>
                                </div>
                                <label className='flex items-center text-sm'>
                                    <input
                                        type='checkbox'
                                        className='hidden peer'
                                    />
                                    <div className='w-8 h-6 border-2 border-gray-400 rounded-sm flex justify-center items-center peer-checked:bg-black'>
                                    </div>
                                    <span className='ml-3'>Safe this address to my profile</span>
                                </label>
                                <label className='flex items-center text-sm'>
                                    <input
                                        type='checkbox'
                                        className='hidden peer'
                                    />
                                    <div className='w-8 h-6 border-2 border-gray-400 rounded-sm flex justify-center items-center peer-checked:bg-black'>
                                    </div>
                                    <span className='ml-3'>Make this my preferred address</span>
                                </label>
                                <div>
                                    <h2 className='py-6 text-[20px] font-medium'>what&apos;s your contact information?</h2>
                                    <div className='space-y-6'>

                                        <div>
                                            <input
                                                type='email'
                                                name="email"
                                                required
                                                placeholder='Email'
                                                value={formData.email}
                                                onChange={handleChange}
                                                className='w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black'
                                            />
                                        </div>
                                        <p>A conformation email will be sent after checkout</p>
                                        <div>
                                            <input
                                                type='number'
                                                required
                                                placeholder='Phone Number '
                                                name="contact"
                                                value={formData.contact}
                                                onChange={handleChange}
                                                className='w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black'
                                            />
                                        </div>
                                        <p>A carier might contact to you confrom delivery</p>
                                    </div>

                                </div>

                                <h2 className='py-6 text-[20px] font-medium'>What&apos;s your PAN</h2>
                                <div className='space-y-6'>
                                    <div>
                                        <input
                                          
                                            placeholder='PAN'
                                            value={formData.PAN}
                                            onChange={handleChange}
                                            name="PAN"
                                            type='number'
                                            className='w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black'
                                        />
                                    </div>
                                    <p>Enter your PAN to enable payment with UPI, Net Banking or local card methods</p>
                                    <label className='flex items-center text-sm'>
                                        <input
                                            type='checkbox'
                                            className='hidden peer'
                                        />
                                        <div className='w-8 h-6 border-2 border-gray-400 rounded-sm flex justify-center items-center peer-checked:bg-black'>

                                        </div>
                                        <span className='ml-3'>Save PAN details to Nike Profile</span>
                                    </label>
                                    <label className='flex items-center text-sm'>
                                        <input
                                            type='checkbox'
                                            className='hidden peer'
                                        />
                                        <div className='w-10 h-6 border-2 border-gray-400 rounded-sm flex justify-center items-center peer-checked:bg-black'>
                                        </div>
                                        <span className='ml-3'>I have read and consent to eShopWorld processing my information in accordance with the Privacy Statement and Cookie Policy. eShopWorld is a trusted Nike partner.</span>
                                    </label>
                                    {/* <button className='md:w-full w-auto bg-gray-200 text-black  md:py-3 text-base font-bold p-3 rounded-3xl md:rounded-3xl transition duration-300'>Continue</button> */}
                                </div>
                                <div className="mb-4 mt-12">
                                    <label htmlFor="delivery-method" className="block text-2xl font-medium mb-4">
                                        Payment Method
                                    </label>
                                    <p>All transactions are secure and encrypted.</p>

                                    {/* Bank Deposit */}
                                    <div className="w-full md:w-[670px] border border-gray-300 rounded-md p-3 bg-white flex items-center mt-3">
                                        <input
                                            type="radio"
                                            // value={formData.isChecked}
                                            onChange={handleChange}
                                               name="paymentMethod"
                                            className="mr-3"
                                            required
                                        />
                                        <label htmlFor="cash-deposit" className="text-black">
                                            Bank Deposit
                                        </label>
                                    </div>

                                    {/* Cash on Delivery */}
                                    <div className="w-full md:w-[670px] border border-gray-300 rounded-md p-3 bg-white flex items-center mt-3">
                                        <input
                                            // value={formData.isChecked}
                                            onChange={handleChange}
                                            type="radio"
                                               name="paymentMethod"
                                            className="mr-3"
                                            required
                                        />
                                        <label htmlFor="cash-on-delivery" className="text-black">
                                            Cash on Delivery
                                        </label>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full md:w-[670px] text-2xl mt-5 text-white py-4 bg-black rounded-md transition duration-300"
                                >
                                    Complete Order
                                </button>


                                <div className="mt-6 text-center">
                                    {success && <p className="text-green-600 ">{success}</p>}
                                    {errors.server && <p className="text-red-600 mt-3">{errors.server}</p>}
                                </div>
                            </div>
                        </form>
                    </div>
                </section>

                {/* Sidebar for cart */}
                <section className="w-full lg:w-[470px] flex-col  md:flex bg-gray-50 p-4 md:p-6 rounded-lg shadow">
                    <div>
                        <p className='text-[21px] font-medium'>Order Summary</p>
                        <div className="flex justify-between mt-6 text-sm">
                            <p>Subtotal</p>
                            <p>₹ {getTotalPrice()}</p>
                        </div>
                        <div className="flex justify-between text-sm mt-2">
                            <p>Estimated Delivery & Handling</p>
                            <p>Free</p>
                        </div>

                        {/* Total */}
                        <div className="flex justify-between mt-6 text-lg border-t-2 border-b-2 border-gray-300 py-3 font-medium">
                            <p>Total</p>
                            <p>₹ {getTotalPrice()}</p>
                        </div>
                        <p className='text-[10px] mt-5'>(The total reflects the price of your order, including all duties and taxes)</p>
                    </div>
                    {/* <h2 className='text-[15px] font-bold p-9 mt-10'>Arrives Mon, 27 Mar - Wed, 12 Apr</h2> */}
                    {cartCount > 0 ? (
                        cartItems.map((items: Item, inndex: number) => {
                            return (
                                <div key={inndex} className=' md:w-[330px] w-auto  mt-3 md:ml-10 flex md:flex flex-col'>
                                    <div>
                                        <div className='space-y-4'>
                                            <div className='flex '>
                                                <Image src={urlFor(items.image).url()} alt='' width={200} height={200} className='w-32 h-32 md:w-[200px] md:h-[200px]  ' />
                                                <div className='flex flex-col p-2'>
                                                    <p >{items.productName}</p>
                                                    <p className='mt-2'>Quantity: {items.quantity}</p>
                                                    <p className='mt-2'>Price : ₹ {items.price}</p>
                                                  
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            )
                        })
                    ) : <p className='text-3xl'>Your Cart Is Currently Empty</p>
                    }
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default Checkout;


