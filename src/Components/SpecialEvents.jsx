import React from "react";

const SpecialEvents = () => {
  const events = [
    {
      id: 1,
      title: "Valentine Cake",
      image: "/path-to-valentine-cake.jpg", // আপনার ইমেজ পাথ এখানে দিন
    },
    {
      id: 2,
      title: "Birthday Cake",
      image: "/path-to-birthday-cake.jpg",
    },
    {
      id: 3,
      title: "Mother Day",
      image: "/path-to-mother-day-cake.jpg",
    },
  ];

  return (
    <section className="py-16 bg-[#FFF5F7]">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Special Events & Festivals
        </h2>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {events.map((event) => (
            <div key={event.id} className="group cursor-pointer">
              <div className="overflow-hidden rounded-2xl shadow-sm bg-white aspect-[4/3]">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-700 text-left md:text-center">
                {event.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Slider Dots */}
        <div className="flex justify-center items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-pink-200"></span>
          <span className="w-3 h-3 rounded-full bg-[#D63384]"></span>
          <span className="w-3 h-3 rounded-full bg-pink-200"></span>
        </div>
      </div>
    </section>
  );
};

export default SpecialEvents;
