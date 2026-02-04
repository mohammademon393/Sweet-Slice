import React from "react";
import { Link } from "react-router";

const Banner = () => {
  return (
    <section className="bg-[#FFF5F7] ">
      <section className="relative max-w-7xl mx-auto min-h-[500px]  flex items-center px-8 md:px-10 overflow-hidden">
        <div className="container mx-auto grid md:grid-cols-2 items-center gap-10">
          {/* Left Content Column */}
          <div className="z-10 order-2 md:order-1">
            <p className="text-[#D63384] font-medium mb-2">
              Suggestion for you
            </p>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Baked with Love, <span className="text-[#D63384]">Delivered</span>{" "}
              with Joy{" "}
            </h1>
            <p className="text-gray-600 max-w-md leading-relaxed mb-8">
              Freshly baked cakes for every celebration and sweet craving. Order
              now and indulge in a slice of happiness!
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <Link to="/order" className="px-8 py-3 border-2 border-black rounded-lg font-bold hover:bg-black hover:text-white transition-all duration-300">
                Order Now
              </Link>
              <a
                href="tel:647-478-9464"
                className="flex items-center gap-2 text-[#D63384] font-bold text-lg"
              >
                <span className="p-2 bg-white rounded-full shadow-sm">📞</span>
                647-478-9464
              </a>
            </div>

            <div className="mt-16 hidden md:block">
              <p className="text-sm text-gray-400 uppercase tracking-widest animate-bounce">
                Scroll Down
              </p>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="relative order-1 md:order-2 flex justify-center">
            <img
              src="https://i.ibb.co/cSj7N4fj/delicious-cake-with-fruits-removebg-preview.png"
              alt="Delicious Strawberry Cake"
              className="w-full max-w-[400px] object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Banner;
