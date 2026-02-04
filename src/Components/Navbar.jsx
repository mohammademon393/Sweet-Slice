import { CircleUser, House, ShoppingCart, UserRound } from 'lucide-react';
import React from 'react';
import { BiSolidContact } from 'react-icons/bi';
import { FcAbout } from 'react-icons/fc';
import { MdEmojiEvents, MdLocationCity } from 'react-icons/md';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    const Links = (
      <>
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "text-[#EB088B] font-semibold underline"
                : "text-textDark hover:text-[#C70776]"
            }
          >
            <House className="w-4 mr-[-5px]" />
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-[#EB088B] font-semibold underline"
                : "text-textDark hover:text-[#C70776]"
            }
          >
            <MdLocationCity className="w-4 mr-[-5px]" /> About
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/events"
            className={({ isActive }) =>
              isActive
                ? "text-[#EB088B] font-semibold underline"
                : "text-textDark hover:text-[#C70776]"
            }
          >
            <MdEmojiEvents className="w-4 mr-[-5px]" /> Events
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-[#EB088B] font-semibold underline"
                : "text-textDark hover:text-[#C70776]"
            }
          >
            <BiSolidContact className="w-4 mr-[-5px]" /> Contact Us
          </NavLink>
        </li>
      </>
    );


    return (
      <div className="bg-gradient-to-r from-[#FFC0CB] to-[#FFE4E1] shadow-md sticky top-0 z-50">
        <div className="navbar max-w-7xl mx-auto ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {Links}
              </ul>
            </div>

            <Link
              to={"/"}
              className="flex items-center gap-2 font-semibold text-2xl"
            >
              <img
                className="w-18 mr-[-20px] mt-1"
                src="https://i.ibb.co/HpR2Cqq7/pngtree-cake-logo.png"
                alt=""
              />{" "}
              Sweet<span className="text-[#EB088B] ml-[-7px]">Slice</span>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{Links}</ul>
          </div>
          <div className="navbar-end">
            <span className="btn border border-neutral-500 rounded-full bg-[#FFF5F7] btn-ghost btn-circle">
              <ShoppingCart />
            </span>
            <Link to="/login" className="btn btn-neutral ml-2">
              <CircleUser /> Login
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Navbar;