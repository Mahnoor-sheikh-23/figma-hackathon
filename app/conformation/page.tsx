import React from "react";

const OrderConfirmation: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center mb-8">Thank you for your order</h1>

      {/* Order Details Section */}
      <div className="flex justify-between items-center border-b pb-4 mb-6">
        <div>
          <p className="text-sm font-semibold">Order Number: <span className="font-normal">V4013421451</span></p>
          <p className="text-sm font-semibold">Order Date: <span className="font-normal">Tue Jul 27 2021</span></p>
          <p className="text-sm font-semibold">Customer: <span className="font-normal">John Newman</span></p>
        </div>
        <button className="bg-black flex  gap-2 text-white py-2 px-4 rounded hover:bg-gray-800"> <i className="fa-solid fa-print mt-1"></i>PRINT</button>
      </div>

      {/* Shipping, Billing, and Payment Info */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="font-semibold text-lg mb-2">Shipping Address</h3>
          <p>John Newman</p>
          <p>2125 Chestnut St</p>
          <p>SAN FRANCISCO, CA 94123-2708 US</p>
          <p>6305305555</p>
          <p>John.Newman.Baymard2021@gmail.com</p>

          <h3 className="font-semibold text-lg mt-6 mb-2">Billing Address</h3>
          <p>John Newman</p>
          <p>2125 Chestnut St</p>
          <p>SAN FRANCISCO, CA 94123-2708 US</p>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2">Payment Method</h3>
          <p>Mastercard ************2418</p>
          <p>Exp: 03/2026</p>

          <h3 className="font-semibold text-lg mt-6 mb-2">Shipping Method</h3>
          <p>5-6 Business Days</p>
        </div>
      </div>

      {/* Order Summary */}
      <div className="border-t pt-6 mb-8">
        <h3 className="font-semibold text-lg mb-4">Order Summary</h3>
        <p className="text-sm"><strong>Subtotal:</strong> $10.00</p>
        <p className="text-sm"><strong>Shipping:</strong> $7.99</p>
        <p className="text-sm"><strong>Discounts:</strong> $0.00</p>
        <p className="text-sm"><strong>Order Total:</strong> $18.86</p>
        <p className="text-sm text-gray-600">Tax calculated in Checkout</p>

        <h4 className="font-semibold mt-4">Items Ordered</h4>
        <div className="flex items-center gap-4 mt-2">
          <img src="/jason-markk-mini.jpg" alt="Jason Mark Mini Starter Kit" className="w-16 h-16 object-cover" />
          <div>
            <p className="text-sm font-medium">Jason Markk Mini Starter Kit</p>
            <p className="text-sm text-gray-600">SKU: 004210</p>
            <p className="text-sm text-gray-600">Size undefined QTY 1</p>
          </div>
        </div>
        <p className="text-sm text-gray-600 mt-2">Arrives in 5-6 business days</p>
      </div>

      {/* Register Section */}
      <div className="border-t pt-6 mb-8">
        <h3 className="font-semibold text-lg mb-2">Register</h3>
        <p className="text-sm text-gray-600 mb-2">FASTER CHECKOUT EVERY TIME</p>
        <ul className="list-disc pl-4 text-sm text-gray-600">
          <li>Create Account or Sign In</li>
          <li>Save your info</li>
          <li>Checkout faster and enjoy special offers!</li>
        </ul>
      </div>

      {/* Sign Up Section */}
      <div className="border-t pt-6">
        <h3 className="font-semibold text-lg mb-4">Sign Up For Updates!</h3>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email*</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="dob" className="block text-sm font-medium">Date of Birth (MM/DD/YYYY)*</label>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="MM"
                maxLength={2}
                className="w-12 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="DD"
                maxLength={2}
                className="w-12 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="YYYY"
                maxLength={4}
                className="w-16 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
          >
            Sign Up
          </button>
        </form>
        <div className="flex justify-between items-center mt-4">
          <a href="#" className="text-sm text-blue-500 hover:underline">Privacy Statement</a>
          <a href="#" className="text-sm text-blue-500 hover:underline">Terms Of Use</a>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
