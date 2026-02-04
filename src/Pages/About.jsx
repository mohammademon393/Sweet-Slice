import React from "react";
import { Users, ShoppingBag, Zap, ShieldCheck } from "lucide-react";
import { Link } from "react-router";

const About = () => {
  const sections = [
    {
      title: "Who We Are",
      content:
        "SweetSlice is a modern online bakery platform where customers can easily browse, select, and order cakes and cupcakes. Our goal is to make cake ordering simple, fast, and enjoyable.",
      icon: <Users className="text-pink-500" size={28} />,
      bgColor: "bg-white",
    },
    {
      title: "What We Offer",
      content:
        "We offer a wide variety of freshly baked cakes and cupcakes, including birthday cakes, event-based cakes, and special combo offers. Each product is carefully prepared to ensure quality and taste.",
      icon: <ShoppingBag className="text-pink-500" size={28} />,
      bgColor: "bg-pink-50",
    },
    {
      title: "Why SweetSlice",
      content:
        "SweetSlice focuses on user-friendly design, clear product categories, and smooth ordering experience. Customers can explore products easily and place orders with confidence.",
      icon: <Zap className="text-pink-500" size={28} />,
      bgColor: "bg-white",
    },
    {
      title: "Our Promise",
      content:
        "We are committed to freshness, quality, and customer satisfaction. Every order is handled with care to ensure a delightful experience.",
      icon: <ShieldCheck className="text-pink-500" size={28} />,
      bgColor: "bg-pink-50",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFF5F7] text-[#572722] pb-20">
      {/* 1. Stacked Header Section */}
      <section className="relative text-center py-24 px-4 bg-white rounded-b-[3rem] shadow-sm">
        <div className="max-w-3xl mx-auto">
          <span className="bg-pink-100 text-[#D63384] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
            Our Journey
          </span>
          <h1 className="text-3xl md:text-3xl font-bold mt-4 mb-6">
            About <span className="text-pink-500">SweetSlice</span>
          </h1>
          <p className="text-gray-500 text-lg italic">
            "Baked with Love, Delivered with Joy"
          </p>
        </div>
        {/* Decorative Circle */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-pink-50 rounded-full -z-0 blur-xl"></div>
      </section>

      {/* 2. Content Stacks */}
      <section className="max-w-5xl mx-auto px-6 -mt-10 space-y-8">
        {sections.map((item, index) => (
          <div
            key={index}
            className={`${item.bgColor} p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-pink-100/20 border border-white flex flex-col md:flex-row gap-8 items-center transform transition-all duration-500 hover:-translate-y-2`}
          >
            {/* Icon Circle */}
            <div className="w-20 h-20 shrink-0 bg-[#FFF5F7] rounded-full flex items-center justify-center shadow-inner">
              {item.icon}
            </div>

            {/* Text Content */}
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold mb-3 text-gray-800 tracking-tight">
                {item.title}
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* 3. Bottom CTA Stack */}
      <section className="max-w-5xl mx-auto px-6 mt-16 text-center">
        <div className="bg-gradient-to-r from-pink-400 to-rose-400 p-1 rounded-[2.5rem]">
          <div className="bg-white rounded-[2.3rem] p-10">
            <h2 className="text-3xl font-bold mb-4">
              Ready to taste the magic?
            </h2>
            <p className="text-gray-500 mb-8">
              Join thousands of happy customers who trust SweetSlice for their
              special moments.
            </p>
            <Link to="/" className="bg-black text-white px-12 py-4 rounded-2xl font-bold hover:bg-pink-600 transition-all shadow-lg">
              Order Your Cake Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
