import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";

const ContactUs = () => {
  return (
    <section className="py-20 bg-[#FFF5F7]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-500">
            Have a question or want to order a custom cake? Reach out to us!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Left Side: Contact Information (Based on your Footer image) */}
          <div className="space-y-8 shadow-xl bg-white p-10 rounded-3xl">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <span className="text-pink-500">🍰</span> SweetSlice
                Headquarters
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Canada's most delicious cupcakes for business meetings,
                birthdays, weddings. Our cupcakes are baked daily using the
                finest ingredients.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white rounded-full shadow-sm text-pink-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium">Location</p>
                  <p className="text-gray-700 font-semibold">
                    Eight Avenue 487, New York
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-white rounded-full shadow-sm text-pink-500">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium">Phone</p>
                  <p className="text-gray-700 font-semibold">+387643932728</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-white rounded-full shadow-sm text-pink-500">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium">Email</p>
                  <p className="text-gray-700 font-semibold">
                    isticsfear@gmail.com
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media (Follow Us section from your image) */}
            <div className="pt-6 border-t border-pink-200">
              <p className="font-bold text-gray-800 mb-4">Follow Us</p>
              <div className="flex gap-4">
                <button className="p-2 bg-white rounded-lg shadow-sm hover:bg-pink-500 hover:text-white transition-all">
                  <Facebook size={20} />
                </button>
                <button className="p-2 bg-white rounded-lg shadow-sm hover:bg-pink-500 hover:text-white transition-all">
                  <Instagram size={20} />
                </button>
                <button className="p-2 bg-white rounded-lg shadow-sm hover:bg-pink-500 hover:text-white transition-all">
                  <Twitter size={20} />
                </button>
                <button className="p-2 bg-white rounded-lg shadow-sm hover:bg-pink-500 hover:text-white transition-all">
                  <Linkedin size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-white p-2 border border-gray-100 rounded-3xl shadow-2xl shadow-pink-100/50">
            <form className="p-8 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-600 ml-1">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-pink-300 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-600 ml-1">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-pink-300 outline-none transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-600 ml-1">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Custom Order Inquiry"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-pink-300 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-600 ml-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Tell us about your dream cake..."
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-pink-300 outline-none transition-all resize-none"
                ></textarea>
              </div>
              <button className="w-full py-4 bg-black text-white rounded-xl font-bold text-lg hover:bg-gray-800 transform hover:-translate-y-1 transition-all duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
