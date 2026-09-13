import { useState } from "react";
import logo from "../assets/logo.png";
import hamburger from "../assets/hamburger.png";

const navLinks = ["Home", "Technologies", "Projects", "About", "Contact"];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-sm">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 md:py-4">
        
        {/* Hamburger */}
        <button
          className="flex md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <img src={hamburger} alt="Menu" className="h-7 w-7" />
        </button>

        {/* Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 md:static md:left-auto md:translate-x-0">
          <img src={logo} alt="DevStack Logo" className="h-7 md:h-9" />
        </div>

        {/* Nav */}
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

        {/* Right Buttons er kaj */}
        <div className="flex items-center gap-6">
          <button className="hidden text-sm font-medium text-gray-600 hover:text-pink-600 md:block">
            Sign In
          </button>
          <button className="rounded-full bg-pink-600 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-pink-700 md:px-5 md:py-2 md:text-sm">
            Sign Up
          </button>
        </div>
      </div>

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

          {/* Sign In mobile*/}
          <button className="mt-4 w-full rounded-full border border-gray-300 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-50">
            Sign In
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;