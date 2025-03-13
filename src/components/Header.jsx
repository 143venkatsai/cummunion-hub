import React, { useState } from "react";
import { FiMenu, FiX, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const navLinks = [
  {
    path: "/",
    text: "Home",
  },
  {
    path: "/events",
    text: "Events",
  },
  {
    path: "/about",
    text: "About",
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white fixed w-full top-0 z-50 sm:px-40 px-6">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <Link to="/">
          <img
            src="https://communionhub.org/static/media/Logocommunion.0485ada0760e4748313f.png"
            alt="Communion App"
            className="h-7"
          />
        </Link>

        <ul className="hidden md:flex space-x-6 text-gray-800 font-semibold text-md">
          <li>
            <Link to="/" className="hover:text-blue-500 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/events" className="hover:text-blue-500 transition">
              Events
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-500 transition">
              About
            </Link>
          </li>
        </ul>

        <button
          className="md:hidden text-gray-700 text-2xl focus:outline-none transition-transform duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <FiX className="transform rotate-180 transition-transform duration-300" />
          ) : (
            <FiMenu />
          )}
        </button>
      </nav>

      <div
        className={`md:hidden bg-white transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col space-y-4 py-4 pl-6">
          {navLinks.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center text-gray-700 text-lg hover:text-blue-500 transition pr-6"
            >
              <Link
                to={item.path}
                className="w-full"
                onClick={() => setIsOpen(false)}
              >
                {item.text}
              </Link>
              <FiArrowRight />
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
