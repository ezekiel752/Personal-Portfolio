const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 ">
      <div className="flex items-center justify-between py-4 px-8">
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
          <a className="hover:border-b-primary hover:border-b-2 cursor-pointer">
            Home
          </a>
          <a className="hover:border-b-primary hover:border-b-2 cursor-pointer">
            About
          </a>
          <a className="hover:border-b-primary hover:border-b-2 cursor-pointer">
            Projects
          </a>
          <a className="hover:border-b-primary hover:border-b-2 cursor-pointer">
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
