import { useState } from "react";
import logo from "../assets/logo.png";
import hamburger from "../assets/hamburger.png";

const navLinks = ["Home", "Technologies", "Projects", "About", "Contact"];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-sm">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Hamburger Menu */}
        <button
          className="flex md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <img src={hamburger} alt="Menu" className="h-7 w-7" />
        </button>

        {/* Logo — centar hobe */}
        <div className="absolute left-1/2 -translate-x-1/2 md:static md:left-auto md:translate-x-0">
          <img src={logo} alt="DevStack Logo" className="h-9" />
        </div>

        {/* Nav Links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href="#"
                className={`text-sm font-medium transition-colors ${
                  link === "Home"
                    ? "text-pink-600"
                    : "text-gray-500 hover:text-pink-600"
                }`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Buttons */}
        <div className="flex items-center gap-6">
          <button className="text-sm font-medium text-gray-600 hover:text-pink-600">
            Sign In
          </button>
          <button className="rounded-full bg-pink-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-pink-700">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="border-t border-gray-100 bg-white px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className={`text-sm font-medium transition-colors ${
                    link === "Home"
                      ? "text-pink-600"
                      : "text-gray-500 hover:text-pink-600"
                  }`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;