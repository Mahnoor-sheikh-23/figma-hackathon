"use client";
import Link from "next/link";
import React from "react";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-6 sm:px-6 lg:px-8">
        <div className="bg-white shadow-xl rounded-lg p-8">
          <h1 className="text-4xl font-semibold text-center text-gray-800 mb-8">
            Welcome to the Admin Dashboard
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-600 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
              <Link
                href="/studio/structure"
                className="block text-center text-white font-semibold text-xl hover:underline"
              >
                Manage Products
              </Link>
            </div>
            <div className="bg-green-600 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
              <Link
                href="/viewOrders"
                className="block text-center text-white font-semibold text-xl hover:underline"
              >
                View Orders
              </Link>
            </div>
            <div className="bg-yellow-600 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
              <Link
                href="/admin/users"
                className="block text-center text-white font-semibold text-xl hover:underline"
              >
                Manage Users
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
