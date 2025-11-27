import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBagShopping, FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

const navItems = [
  { path: "/", label: "Furniture" },
  { path: "/shop", label: "Shop" },
  { path: "/about", label: "About Us" },
  { path: "/contact", label: "Contact" },
];

const NavItems = ({ toggleMenu }) => {
  return (
    <ul className="flex flex-col md:flex-row items-center md:space-x-8 gap-8">
      {navItems.map((item, index) => (
        <li key={index} onClick={toggleMenu}>
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              isActive ? "text-primary font-bold" : "hover:text-primary"
            }
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  // when scroll add bg to navbar
  useEffect(() => {
    const handelScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handelScroll);
    return () => {
      window.addEventListener("scroll", handelScroll);
    };
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition duration-300 ease-in-out ${
        isScrolled
          ? "bg-white shadow-md text-black"
          : " bg-transparent text-white"
      }`}
    >
      <nav className="flex justify-between items-center font-poppins py-6 px-4 container mx-auto max-w-screen-2xl">
        {/* logo */}
        <Link to="/" className="font-bold">
          Panto
        </Link>
        {/* hamburger menu for mobile */}
        <div
          onClick={toggleMenu}
          className="md:hidden text-xl hover:text-primary"
        >
          {isMenuOpen ? null : <FaBars />}
        </div>
        {/* desktop menu items */}
        <div className="hidden md:flex">
          <NavItems />
        </div>
        {/* mobile menu items */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-black/80 flex flex-col items-center justify-center space-y-8 text-white transition-transform transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
        >
          <div
            className="cursor-pointer absolute top-6 right-4 text-xl"
            onClick={toggleMenu}
          >
            <FaTimes />
          </div>
          <NavItems toggleMenu={toggleMenu} />
        </div>
        {/* cart icom */}
        <div className="hidden md:block cursor-pointer relative">
          <FaBagShopping className="text-xl" />
          <sup className="absolute top-0 -right-3 bg-primary text-white w-5 h-5 rounded-full flex items-center justify-center text-sm ">
            0
          </sup>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
