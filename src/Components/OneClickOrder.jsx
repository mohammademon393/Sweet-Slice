import React from "react";

const OneClickOrder = () => {
  return (
    <section className="bg-gradient-to-r from-[#FFC0CB] to-[#FFE4E1]">
      <section className="relative  max-w-7xl mx-auto md:px-20 overflow-hidden">
        {/* Background with Gradient matching your image */}
        <div className="rounded-3xl flex flex-col md:flex-row items-center p-8 md:p-6">
          {/* Text Content */}
          <div className="flex-1 text-left z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              One Dozen at One Click
            </h2>
            <p className="text-gray-700 text-sm md:text-base mb-6 max-w-md">
              Hit the add to cart button and we will pick out 12 delicious
              treats from our "always available" cupcakes.
            </p>
            <p className="text-[#D63384] text-2xl font-bold mb-6">$30/doz</p>
            <button className="bg-black text-white px-10 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300">
              Order Now
            </button>
          </div>

          {/* Product Image */}
          <div className="flex-1 flex justify-center mt-8 md:mt-0 relative">
            <img
              src="https://i.ibb.co/PZG76Dm0/Chocolate-Strawberry-Cake-removebg-preview.png"
              alt="Chocolate Drip Cake with Strawberry"
              className="w-full max-w-[300px] object-contain drop-shadow-2xl transform hover:rotate-3 transition-transform duration-500"
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default OneClickOrder;
