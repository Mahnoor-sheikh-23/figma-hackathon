"use client";
import { useCart } from "@/components/CartContext";
import client from "@/sanityClient";
import React, { useEffect, useState } from "react";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
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

interface ShippingRate {
  carrierFriendlyName: string;
  carrierDeliveryDays: number;
  shippingAmount: {
    currency: string;
    amount: number;
  };
}

interface ShippingData {
  labelUrl: string;
  trackingNumber: string;
  shippingRates: ShippingRate[];
}

interface Order {
  _id: string;
  customerName: string;
  customerEmail: string;
  customerContact: string;
  shippingData: ShippingData;
  shippingRate: string;
  orderStatus: string;
  createdAt: string;
  shippingAddress: string;
}

const OrderConfirmation: React.FC = () => {
  const [order, setOrder] = useState<Order | null>(null);
  const { cartItems, getTotalPrice, cartCount } = useCart()

  useEffect(() => {
    const fetchOrder = async () => {
      const query = `
        *[_type == "order"] | order(createdAt desc)[0] {
          _id,
          customerName,
          customerEmail,
          customerContact,
          shippingData {
            labelUrl,
            trackingNumber,
            shippingRates[] {
              carrierFriendlyName,
              carrierDeliveryDays,
              shippingAmount {
                currency,
                amount
              }
            }
          },
          shippingRate,
          orderStatus,
          createdAt,
          shippingAddress, // Assuming this field contains the user's address
        }
      `;
      const data = await client.fetch(query);
      setOrder(data);
    };

    fetchOrder();
  }, []);

  if (!order) return <div>Loading...</div>;


  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Thank you for your order!</h1>

      {/* Order Details */}
      <div className="border-b pb-4 mb-6">
        <p className="text-sm font-semibold">
          <strong>Order Number:</strong> {order._id}
        </p>
        <p className="text-sm font-semibold">
          <strong>Order Date:</strong> {new Date(order.createdAt).toLocaleDateString('en-US', {
            weekday: 'long', // "Monday"
            year: 'numeric', // "2025"
            month: 'long', // "January"
            day: 'numeric', // "23"
          }) || "Invalid Date"}
        </p>
        <p className="text-sm font-semibold">
          <strong>Customer Name:</strong> {order.customerName}
        </p>
        <p className="text-sm font-semibold">
          <strong>Email:</strong> {order.customerEmail}
        </p>
        <p className="text-sm font-semibold">
          <strong>Contact:</strong> {order.customerContact}
        </p>
        <button
          onClick={() => window.print()}
          className="mt-3 bg-black flex items-center gap-2 text-white py-2 px-4 rounded hover:bg-gray-800"
        >
          <i className="fa-solid fa-print"></i> Print Order
        </button>

      </div>

      {/* Shipping Info */}
      <div className="border-b pb-4 mb-6">
        <h3 className="font-semibold text-lg mb-2">Shipping Information</h3>
        <p>
          <strong>Shipping Method:</strong> {order.shippingRate || "N/A"}
        </p>
        <p>
          <strong>Tracking Number:</strong>{" "}
          {order.shippingData?.trackingNumber || "N/A"}
        </p>
        <p>
          <strong>Label:</strong>{" "}
          {order.shippingData?.labelUrl ? (
            <Link
              href={order.shippingData.labelUrl}
              target="_blank"
              className="text-blue-500 underline"
            >
              View Shipping Label
            </Link>
          ) : (
            "N/A"
          )}
        </p>
        {order.shippingData?.shippingRates?.[0] && (
          <p>
            <strong>Estimated Delivery:</strong>{" "}
            {order.shippingData.shippingRates[0].carrierDeliveryDays} days
          </p>
        )}
      </div>

      {/* From and To Address */}
      <div className="border-b pb-4 mb-6">
        <h3 className="font-semibold text-lg mb-2">Shipping Details</h3>
        <p>
          <strong>From (Company):</strong> Nike Shoes
        </p>
        <p>
          <strong>To (Shipping Address):</strong> {order.customerName || "N/A"}
        </p>
      </div>

      {/* Order Status */}
      <div className="border-b pb-4 mb-6">
        <h3 className="font-semibold text-lg mb-2">Order Status</h3>
        <p>{order.orderStatus}</p>
      </div>

      {/* Summary */}
      <div>
        {order.shippingData?.shippingRates?.[0]?.shippingAmount ? (
          <div>
            <p className='text-[21px] font-medium'>Order Summary</p>
            <div className="flex justify-between mt-6 text-sm">
              <p>Subtotal</p>
              <p>₹{getTotalPrice()}</p>
            </div>
            <div className="flex justify-between text-sm mt-2">
              <p>Estimated Delivery & Handling</p>
              <p> {order.shippingData.shippingRates[0].shippingAmount.amount}</p>
            </div>

            {/* Total */}
            <div className="flex justify-between mt-6 text-lg border-t-2 border-b-2 border-gray-300 py-3 font-medium">
              <p>Total</p>
              <p>₹ {getTotalPrice() + order.shippingData.shippingRates[0].shippingAmount.amount}</p>
            </div>
            <p className='text-[10px] mt-5'>(The total reflects the price of your order, including all duties and taxes)</p>


          </div>
        ) : (
          <p>Total Cost: N/A</p>
        )}

        {cartCount > 0 ? (
          cartItems.map((items: Item, inndex: number) => {
            return (
              <div key={inndex} className=' md:w-[330px] w-auto  mt-3 md:ml-10 flex md:flex flex-col'>
                <div>
                  <div className='space-y-4 '>
                    <div className="flex" >
                      <Image src={urlFor(items.image).url()} alt='' width={100} height={100} className='w-32 h-32 md:w-[100px] md:h-[100px]  ' />
                      <div className='flex flex-col  p-2'>
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
      </div>
    </div>
  );
};

export default OrderConfirmation;
