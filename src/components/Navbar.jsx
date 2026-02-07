const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 backdrop:blur-md">
      <div className="flex items-center justify-between py-4 px-8 bg-white">
        <div className="flex text-2xl text-primary items-center">
          <span
            style={{ fontSize: "2rem" }}
            className="material-symbols-outlined text-5xl"
          >
            terminal
          </span>
          <h1>WebDeveloper</h1>
        </div>

        <div className="block sm:hidden">
          <h1 className="material-symbols-outlined">menu</h1>
        </div>

        <div className="hidden sm:flex gap-8 transition duration-300">
          <a href="#home" className="hover:border-b-primary hover:border-b-2 cursor-pointer">
            Home
          </a>
          <a href="#about" className="hover:border-b-primary hover:border-b-2 cursor-pointer">
            About
          </a>
          <a href="#projects" className="hover:border-b-primary hover:border-b-2 cursor-pointer">
            Projects
          </a>
          <a href="#contact" className="hover:border-b-primary hover:border-b-2 cursor-pointer">
            Contact
          </a>
        </div>

        <div>
          <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-[#6679e6] transition-all hidden md:block">
            Hire Me
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
