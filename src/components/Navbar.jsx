import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-background-light/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between py-4 px-8 sm:px-6 lg:px-8 ">
          {/* Desktop Nav */}
          <div className="flex text-2xl text-primary items-center">
            <span
              style={{ fontSize: "2rem" }}
              className="material-symbols-outlined text-5xl"
            >
              terminal
            </span>
            <h1>WebDev</h1>
          </div>

          <div className="hidden sm:flex gap-8 *:transition *:duration-300 *:ease-in-out">
            <a
              href="#home"
              className="hover:border-b-primary hover:border-b-2 cursor-pointer"
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:border-b-primary hover:border-b-2 cursor-pointer"
            >
              About
            </a>
            <a
              href="#projects"
              className="hover:border-b-primary hover:border-b-2 cursor-pointer"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:border-b-primary hover:border-b-2 cursor-pointer"
            >
              Contact
            </a>
          </div>

          <div>
            <button className="bg-primary hover:shadow-2xl text-white px-4 py-2 rounded-md hover:bg-[#6679e6] transition-all hidden md:block">
              Hire Me
            </button>
          </div>
          <div className="block sm:hidden">
            <span
              className="material-symbols-outlined cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? "close" : "menu"}
            </span>
          </div>

          {/* Mobile Nav */}
          <div
            className={`sm:hidden flex flex-col overflow-hidden transition-all duration-300 ease-in-out ${!isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
          >
            <div className="px-8 py-4 space-y-4 bg-white/95 backdrop-blur-md border-t border-gray-200">
              <a
                onClick={() => setIsMenuOpen(false)}
                href="#home"
                className="hover:border-b-primary hover:border-b-2 cursor-pointer"
              >
                Home
              </a>
              <a
                onClick={() => setIsMenuOpen(false)}
                href="#about"
                className="hover:border-b-primary hover:border-b-2 cursor-pointer"
              >
                About
              </a>
              <a
                onClick={() => setIsMenuOpen(false)}
                href="#projects"
                className="hover:border-b-primary hover:border-b-2 cursor-pointer"
              >
                Projects
              </a>
              <a
                onClick={() => setIsMenuOpen(false)}
                href="#contact"
                className="hover:border-b-primary hover:border-b-2 cursor-pointer"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
