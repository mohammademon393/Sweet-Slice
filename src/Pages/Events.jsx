import React from "react";
import { Calendar, Gift, Star, Clock } from "lucide-react";
import { Link } from "react-router";

const Events = () => {
  const eventList = [
    {
      id: 1,
      title: "Valentine's Special",
      date: "Feb 14, 2026",
      desc: "Celebrate love with our signature heart-shaped strawberry cakes and custom gift boxes.",
      image: "https://i.ibb.co/N2pRg8sy/Valentine-Cake.jpg",
      tag: "Trending",
    },
    {
      id: 2,
      title: "Birthday Bash Combo",
      date: "Available Always",
      desc: "Get a customized theme cake with 12 matching cupcakes. Perfect for any age!",
      image: "https://i.ibb.co/69cXbSk/Birthday-Cake.avif",
      tag: "Best Seller",
    },
    {
      id: 3,
      title: "Mother's Day Tea",
      date: "May 10, 2026",
      desc: "A delicate collection of floral-themed cupcakes and premium tea-infused sponges.",
      image: "https://i.ibb.co/RkJGD9LR/Mothers-Day-Cake.webp",
      tag: "Upcoming",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFF5F7]">
      {/* 1. Hero Header */}
      <section className="py-20 text-center bg-white rounded-b-[4rem] shadow-sm">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          Celebrations & <span className="text-pink-500">Events</span>
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto px-4">
          Make your special moments unforgettable with SweetSlice's exclusive
          event collections.
        </p>
      </section>

      {/* 2. Events Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {eventList.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl shadow-pink-100/50 group hover:-translate-y-3 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-pink-600 px-4 py-1 rounded-full text-xs font-bold shadow-sm">
                  {event.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-2 text-pink-400 mb-3 text-sm font-medium">
                  <Calendar size={16} />
                  <span>{event.date}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {event.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {event.desc}
                </p>
                <button className="w-full py-3 border-2 border-pink-100 text-pink-500 font-bold rounded-2xl hover:bg-pink-500 hover:text-white hover:border-pink-500 transition-all">
                  View Collection
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Custom Event Booking Section (Stacked Design) */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="bg-black text-white rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-md">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Planning a Big Event?
            </h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-pink-500 rounded-lg">
                  <Star size={20} />
                </div>
                <p>Weddings & Corporate Catering</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-2 bg-pink-500 rounded-lg">
                  <Clock size={20} />
                </div>
                <p>Order at least 7 days in advance</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-2 bg-pink-500 rounded-lg">
                  <Gift size={20} />
                </div>
                <p>Customized Packaging Included</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-8 rounded-[2rem] border border-white/20 text-center">
            <p className="text-pink-300 font-bold mb-2">Need Help?</p>
            <h4 className="text-2xl font-bold mb-6">Book a Consultation</h4>
            <Link to="/contact" className="bg-white text-black px-10 py-4 rounded-2xl font-bold hover:bg-pink-500 hover:text-white transition-all">
              Contact Us 
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
