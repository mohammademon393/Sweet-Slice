import React from "react";
import { ShoppingBag, Search, Heart } from "lucide-react"; // lucide-react আইকন লাইব্রেরি ব্যবহার করা হয়েছে

const FeaturedProducts = () => {
  const products = [
    { id: 1, image: "https://i.ibb.co/FLzW6JKh/simple4-removebg-preview.png" },
    { id: 2, image: "https://i.ibb.co/qYBsM843/simple3-removebg-preview.png" },
    { id: 3, image: "https://i.ibb.co/BKs8gPrg/simple2-removebg-preview.png" },
    { id: 4, image: "https://i.ibb.co/8LGJLLtM/simplw5-removebg-preview.png" },

  ];

  return (
    <section className="py-16 bg-[#FFF5F7]">
      <div className="container mx-auto px-4 text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Our Featured</h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative group bg-white rounded-xl p-4 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              {/* Product Image */}
              <div className="aspect-square flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden">
                <img
                  src={product.image}
                  alt="Cupcake"
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Hover Overlay Icons (আপনার ইমেজের মতো কার্ডের নিচে ভেসে উঠবে) */}
              <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                <button className="p-2 bg-white rounded-md shadow-lg hover:bg-pink-500 hover:text-white transition-colors">
                  <ShoppingBag size={20} />
                </button>
                <button className="p-2 bg-white rounded-md shadow-lg hover:bg-pink-500 hover:text-white transition-colors">
                  <Search size={20} />
                </button>
                <button className="p-2 bg-white rounded-md shadow-lg hover:bg-pink-500 hover:text-white transition-colors">
                  <Heart size={20} />
                </button>
              </div>

              {/* Pink Overlay for the last card as per image */}
              {product.id === 4 && (
                <div className="absolute inset-0 bg-pink-300/20 pointer-events-none"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
