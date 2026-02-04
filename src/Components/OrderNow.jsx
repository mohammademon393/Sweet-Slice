import React, { useState } from "react";
import { CreditCard, Truck, ShoppingCart, CheckCircle2 } from "lucide-react";

const OrderNow = () => {
  const [orderPlaced, setOrderPlaced] = useState(false);

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-[#FFF5F7] flex items-center justify-center p-6">
        <div className="bg-white p-10 rounded-[3rem] shadow-2xl text-center max-w-lg animate-in fade-in zoom-in duration-500">
          <CheckCircle2 size={80} className="text-green-500 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Sweet Success!
          </h2>
          <p className="text-gray-500 mb-8">
            Your delicious order is being prepared with love. We'll notify you
            when it's out for delivery.
          </p>
          <button
            onClick={() => (window.location.href = "/")}
            className="bg-black text-white px-10 py-4 rounded-2xl font-bold hover:bg-pink-600 transition-all"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF5F7] py-12 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-10 text-center">
          Complete Your <span className="text-pink-500">Order</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left: Delivery & Payment Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Delivery Section */}
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-pink-50">
              <div className="flex items-center gap-3 mb-6">
                <Truck className="text-pink-500" />
                <h2 className="text-2xl font-bold text-gray-800">
                  Delivery Details
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                required
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-pink-300 outline-none"
                />
                <input
                required
                  type="text"
                  placeholder="Phone Number"
                  className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-pink-300 outline-none"
                />
                <input
                required
                  type="text"
                  placeholder="Address"
                  className="w-full md:col-span-2 px-5 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-pink-300 outline-none"
                />
                <input
                required
                  type="text"
                  placeholder="City"
                  className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-pink-300 outline-none"
                />
                <input
                required
                  type="text"
                  placeholder="Postal Code"
                  className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-pink-300 outline-none"
                />
              </div>
            </div>

            {/* Payment Section */}
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-pink-50">
              <div className="flex items-center gap-3 mb-6">
                <CreditCard className="text-pink-500" />
                <h2 className="text-2xl font-bold text-gray-800">
                  Payment Method
                </h2>
              </div>
              <div className="flex flex-wrap gap-4">
                <button className="flex-1 py-4 border-2 border-pink-500 text-pink-500 rounded-2xl font-bold bg-pink-50">
                  Cash on Delivery
                </button>
                <button className="flex-1 py-4 border-2 border-gray-100 text-gray-400 rounded-2xl font-bold hover:border-pink-200 transition-all">
                  Card / Mobile Pay
                </button>
              </div>
            </div>
          </div>

          {/* Right: Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-pink-100/50 sticky top-24">
              <div className="flex items-center gap-3 mb-6 border-b pb-4">
                <ShoppingCart className="text-pink-500" />
                <h2 className="text-2xl font-bold text-gray-800">Summary</h2>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://i.ibb.co/cSj7N4fj/delicious-cake-with-fruits-removebg-preview.png"
                      className="w-12 h-12 rounded-lg bg-pink-50 object-contain"
                      alt="item"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      Strawberry Cupcake x 2
                    </span>
                  </div>
                  <span className="font-bold">$34.00</span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-dashed">
                  <span className="text-gray-500">Subtotal</span>
                  <span className="font-semibold">$34.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Delivery</span>
                  <span className="text-green-500 font-semibold">FREE</span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <span className="text-xl font-bold text-gray-800">Total</span>
                  <span className="text-2xl font-bold text-pink-500">
                    $34.00
                  </span>
                </div>
              </div>

              <button
                onClick={() => setOrderPlaced(true)}
                className="w-full bg-black text-white py-5 rounded-2xl font-bold text-lg hover:bg-pink-600 shadow-lg transform active:scale-95 transition-all"
              >
                Place Order Now
              </button>
              <p className="text-center text-xs text-gray-400 mt-4">
                By placing order, you agree to our Terms of Service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderNow;
