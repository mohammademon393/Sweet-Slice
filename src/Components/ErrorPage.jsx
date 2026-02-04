import React from "react";
import { Link } from "react-router";
import { GiCupcake } from "react-icons/gi";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFF5F7] px-4">
      <div className="text-center max-w-md">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <GiCupcake className="text-6xl text-[#EB088B]" />
        </div>

        {/* 404 */}
        <h1 className="text-6xl font-bold text-[#EB088B] mb-2">404</h1>

        {/* Message */}
        <p className="text-xl font-semibold text-[#572722] mb-2">
          Page Not Found
        </p>
        <p className="text-gray-600 mb-6">
          Looks like this page went missing from our bakery.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-block px-6 py-2 bg-[#EB088B] text-white rounded-lg hover:bg-[#C70776] transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
