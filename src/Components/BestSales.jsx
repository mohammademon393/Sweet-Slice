import React from 'react';

const BestSales = () => {
  const salesProducts = [
    {
      id: 1,
      name: "Sweet Bread",
      price: 17.0,
      image: "https://i.ibb.co/DgL6XXCJ/Sweet-Bread-removebg-preview.png",
    },
    {
      id: 2,
      name: "Sweet Cake",
      price: 15.0,
      image: "https://i.ibb.co/F4MGgx4r/Sweet-Cake-removebg-preview.png",
    },
    {
      id: 3,
      name: "Soufflé Cake",
      price: 19.0,
      image: "https://i.ibb.co/yBqcG14c/Souffl-Cake-removebg-preview.png",
    },
    {
      id: 4,
      name: "Chocolate Cake",
      price: 20.0,
      image: "https://i.ibb.co/bMCr0MPQ/Chocolate-Cake-removebg-preview.png",
    },
    {
      id: 5,
      name: "Muffin",
      price: 17.0,
      image: "https://i.ibb.co/4ZgzRdjS/Muffin-removebg-preview.png",
    },
    {
      id: 6,
      name: "Party Cupcake",
      price: 21.0,
      image: "https://i.ibb.co/d4bSxgbZ/Party-Cupcake-removebg-preview.png",
    },
    {
      id: 7,
      name: "Meringue Cake",
      price: 19.0,
      image: "https://i.ibb.co/q34zrh2x/Meringue-Cake-removebg-preview.png",
    },
    {
      id: 8,
      name: "Spider Cupcakes",
      price: 18.0,
      image: "https://i.ibb.co/kgLWF8Pt/Spider-Cupcakes-removebg-preview.png",
    },
  ];


  return (
    <section className="py-16 bg-[#FFF5F7]">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Best Sales</h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {salesProducts.map((product) => (
            <div key={product.id} className="flex flex-col items-center">
              {/* Product Card */}
              <div className="w-full bg-white rounded-2xl p-6 shadow-sm mb-4 hover:shadow-md transition-shadow duration-300">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-48 object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Product Info */}
              <h3 className="text-gray-800 font-bold text-sm mb-2">{product.name}</h3>
              
              <div className="flex items-center justify-between w-full max-w-[180px]">
                <span className="text-pink-500 font-bold text-sm">${product.price.toFixed(2)}</span>
                
                {/* Quantity Input Mockup */}
                <div className="flex items-center border border-gray-200 rounded overflow-hidden">
                  <span className="px-2 py-1 text-xs text-gray-400 border-r border-gray-200">-</span>
                  <input 
                    type="text" 
                    value="1" 
                    readOnly 
                    className="w-8 text-center text-xs font-semibold focus:outline-none"
                  />
                  <span className="px-2 py-1 text-xs text-gray-400 border-l border-gray-200">+</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSales;