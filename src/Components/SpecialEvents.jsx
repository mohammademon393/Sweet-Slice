import React from "react";

const SpecialEvents = () => {
  const events = [
    {
      id: 1,
      title: "Valentine Cake",
      image: "https://i.ibb.co/N2pRg8sy/Valentine-Cake.jpg",
    },
    {
      id: 2,
      title: "Birthday Cake",
      image: "https://i.ibb.co/69cXbSk/Birthday-Cake.avif",
    },
    {
      id: 3,
      title: "Mother Day",
      image: "https://i.ibb.co/RkJGD9LR/Mothers-Day-Cake.webp",
    },
    {
      id: 4,
      title: "Wedding Cake",
      image: "https://i.ibb.co/YBWgHp0q/Wedding-Cake.jpg",
    },
    {
      id: 5,
      title: "Anniversary Cake",
      image: "https://i.ibb.co/gFtWpDrc/Anniversary-Cake.jpg",
    },
  ];

  return (
    <section className="py-16 bg-[#FFF5F7]">
      <div className="container mx-auto px-4 relative group">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Special Events & Festivals
        </h2>

        {/* Carousel Container */}
        <div className="carousel carousel-center w-full p-4 space-x-6 bg-transparent rounded-box overflow-x-hidden scroll-smooth">
          {events.map((event, index) => (
            <div
              key={event.id}
              id={`event-item-${index}`}
              className="carousel-item w-full md:w-[calc(33.333%-1rem)] flex flex-col"
            >
              {/* Card Design (Ager Moto) */}
              <div className="group cursor-pointer">
                <div className="overflow-hidden rounded-2xl shadow-sm bg-white aspect-[4/3]">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-700 text-left">
                  {event.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows - ১টি করে স্লাইড করার লজিক */}
        <div className="absolute inset-y-0 left-0 flex items-center">
          {/* Previous Button */}
          <button
            onClick={() => {
              const container = document.querySelector(".carousel");
              container.scrollBy({
                left: -container.offsetWidth / 3,
                behavior: "smooth",
              });
            }}
            className="btn btn-circle bg-white border-none shadow-md hover:bg-pink-500 hover:text-white transition-all ml-2"
          >
            ❮
          </button>
        </div>

        <div className="absolute inset-y-0 right-0 flex items-center">
          {/* Next Button */}
          <button
            onClick={() => {
              const container = document.querySelector(".carousel");
              container.scrollBy({
                left: container.offsetWidth / 3,
                behavior: "smooth",
              });
            }}
            className="btn btn-circle bg-white border-none shadow-md hover:bg-pink-500 hover:text-white transition-all mr-2"
          >
            ❯
          </button>
        </div>

        
      </div>
    </section>
  );
};

export default SpecialEvents;
