import client from '@/sanityClient';
import React from 'react';

interface Customer {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    contact: string;
    addressLine1?: string; // Optional if not all customers have these fields
    addressLine2?: string;
    addressLine3?: string;
    city: string;
    postalCode: string;
    createdAt: string;
}

interface ShippingRate {
    carrierFriendlyName: string;
    carrierDeliveryDays: number;
    shippingAmount: {
        currency: string;
        amount: number;
    };
}

interface ShippingAmount {
    currency: string;
    amount: number;
}

interface ShippingRate {
    carrierFriendlyName: string;
    carrierDeliveryDays: number;
    shippingAmount: ShippingAmount;
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


const page = async () => {
    const query = `*[_type == "customer"]{
            _id,
            firstName,
            lastName,
            email,
            contact,
            addressLine1,
            addressLine2,
            addressLine3,
            city,
            postalCode,
            createdAt
        }`;
    const data = await client.fetch(query);

    // Remove the [0] to fetch all orders
    const query2 = `*[_type == "order"] | order(createdAt desc) {
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
        shippingAddress
    }`;
    const orders = await client.fetch(query2);

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-6">Admin - Customer Orders</h1>
            {data.map((items: Customer, index: number) => {
                // Find the corresponding order for each customer based on the email
                const order = orders.find((order:Order) => order.customerEmail === items.email);

                return (
                    <div key={index} className="bg-white p-3 md:p-6 rounded-lg shadow-lg mb-6">
                        {/* Order Details */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-3 gap-2">
                            <div>
                                <strong className="text-lg">Name:</strong>
                                <p>{items.firstName} {items.lastName}</p>
                            </div>
                            <div>
                                <strong className="text-lg">Email:</strong>
                                <p>{items.email}</p>
                            </div>
                            <div>
                                <strong className="text-lg">Contact:</strong>
                                <p>{items.contact}</p>
                            </div>
                            <div>
                                <strong className="text-lg">Address:</strong>
                                <p>{items.addressLine1}, {items.addressLine2}, {items.addressLine3}</p>
                                <p>{items.city}, {items.postalCode}</p>
                            </div>
                            <div>
                                <strong className="text-lg">Order Date:</strong>
                                <p>
                                    {new Date(order.createdAt).toLocaleDateString('en-US', {
                                        weekday: 'long', // "Monday"
                                        year: 'numeric', // "2025"
                                        month: 'long', // "January"
                                        day: 'numeric', // "23"
                                    }) || "Invalid Date"}
                                </p>
                            </div>



                        </div>

                        {/* Shipping Rates */}
                        {order?.shippingData?.shippingRates?.length > 0 && (
                            <div className="mt-4">
                                <h3 className="font-semibold text-lg">Shipping Rates:</h3>
                                {order.shippingData.shippingRates.map((rate: ShippingRate, idx: number) => (
                                    <div key={idx} className="mt-2">
                                        <p><strong>Carrier:</strong> {rate.carrierFriendlyName}</p>
                                        <p><strong>Estimated Delivery:</strong> {rate.carrierDeliveryDays} days</p>
                                        <p><strong>Amount:</strong> {rate.shippingAmount.currency} {rate.shippingAmount.amount}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default page;
