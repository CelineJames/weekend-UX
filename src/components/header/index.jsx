import { useState } from "react";
import logo from "../../assets/logo.png";
import {
  MagnifyingGlassIcon,
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export default function Header() {
  const [selectedOption, setSelectedOption] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white px-4 md:px-8 lg:px-12 py-4 shadow-md fixed w-full top-0 left-0 z-50">
      <div className="flex items-center justify-between w-full flex-wrap gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-12 h-12 md:w-16 md:h-16" />
        </div>

        {/* Search + Select (always visible, responsive) */}
        <div className="flex flex-1 items-center justify-between gap-2 min-w-[] max-w-xl border border-gray-300 rounded-md px-3 py-2 mx-auto">
          {/* Search */}
          <div className="flex items-center flex-1">
            <MagnifyingGlassIcon className="h-5 w-5 text-primary mr-2" />
            <input
              type="text"
              placeholder="Want to learn?"
              className="w-full px-2 py-1 outline-none bg-white"
            />
          </div>

          {/* Dropdown */}
          <div className="relative w-32">
            <select
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              className="bg-primarylight text-primary font-bold outline-none w-full appearance-none px-2 py-1 rounded"
            >
              <option value="" disabled>
                Explore
              </option>
              <option value="option1">Option One</option>
              <option value="option2">Option Two</option>
              <option value="option3">Option Three</option>
            </select>
            <ChevronDownIcon className="pointer-events-none h-4 w-4 absolute top-1/2 right-2 -translate-y-1/2 text-primary" />
          </div>
        </div>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link to="/" className="text-gray-600 hover:text-black">
            Home
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-black">
            About
          </Link>
          <Link to="/courses" className="text-gray-600 hover:text-black">
            Courses
          </Link>
          <Link to="/contact-us" className="text-gray-600 hover:text-black">
            Contact Us
          </Link>
          <Link to="/faqs" className="text-gray-600 hover:text-black">
            FAQs
          </Link>
        </nav>

        {/* Hamburger icon (mobile only) */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6 text-primary" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-primary" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden mt-4 px-2 flex flex-col gap-3 font-medium text-gray-600">
          <Link
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-black"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-black"
          >
            About
          </Link>
          <Link
            to="/courses"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-black"
          >
            Courses
          </Link>
          <Link
            to="/contact-us"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-black"
          >
            Contact Us
          </Link>
          <Link
            to="/faqs"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-black"
          >
            FAQs
          </Link>
        </nav>
      )}
    </header>
  );
}
