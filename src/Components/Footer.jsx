import React from "react";
import { Facebook, Linkedin, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 px-6 md:px-20 border-t border-pink-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* 1. Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl text-white"></span>
              <Link className="flex items-center gap-2 font-semibold text-2xl">
                <img
                  className="w-18 mr-[-20px] mt-1"
                  src="https://i.ibb.co/HpR2Cqq7/pngtree-cake-logo.png"
                  alt=""
                />{" "}
                Sweet<span className="text-[#EB088B] ml-[-7px]">Slice</span>
              </Link>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Canada's most delicious cupcakes for business meetings, birthdays,
              weddings.
            </p>
          </div>

          {/* 2. Get In Touch Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-100">Get In Touch</h3>
            <div className="text-gray-400 text-sm space-y-2">
              <p>Eight Avenue 487, New York</p>
              <p>+387643932728</p>
              <p className="hover:text-pink-500 cursor-pointer transition-colors">
                istieiftear@gmail.com
              </p>
            </div>
          </div>

          {/* 3. Follow Us Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-100">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-200 hover:bg-pink-500 hover:text-white hover:border-pink-500 transition-all duration-300"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-200 hover:bg-pink-500 hover:text-white hover:border-pink-500 transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-200 hover:bg-pink-500 hover:text-white hover:border-pink-500 transition-all duration-300"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-200 hover:bg-pink-500 hover:text-white hover:border-pink-500 transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-pink-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-6 text-sm font-semibold text-gray-300">
            <a href="#" className="hover:text-pink-500 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-pink-500 transition-colors">
              Terms & Condition
            </a>
          </div>

          <p className="text-sm text-gray-300">
            © Copyright 2022 | Design By{" "}
            <span className="text-pink-400 font-medium">Istie Iftear</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
