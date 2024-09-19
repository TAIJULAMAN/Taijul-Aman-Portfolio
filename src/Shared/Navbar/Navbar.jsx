import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div className="overflow-hidden fixed z-10 w-full text-white bg-[#2e424d] px-[20px] md:px-[100px] lg:px-[100px] py-5">
      <div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center cursor-pointer">
            <Link to="/" spy={true} smooth={true} duration={500}>
              <h1 className="text-2xl font-semibold hover:text-[#98dad9]">
                Shah Aman
              </h1>
            </Link>
          </div>

          <nav className="hidden lg:flex flex-row items-center text-lg font-medium gap-8">
            <Link
              to="/"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-[#98dad9] transition-all cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="/about"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-white transition-all cursor-pointer"
            >
              About
            </Link>
            <Link
              to="/projects"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-[#98dad9] transition-all cursor-pointer"
            >
              Projects
            </Link>
            <Link
              to="/skills"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-[#98dad9] transition-all cursor-pointer"
            >
              Skills
            </Link>
            <Link
              to="/blogs"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-[#98dad9] transition-all cursor-pointer"
            >
              Blogs
            </Link>
          </nav>

          <div className=" hidden lg:flex">
            <Link to="/contact">
              <button className="text-[#2e424d] font-medium hover:bg-[#98dad9] bg-white px-4 py-2 rounded-md transition duration-300 ease-in-out">
                Contact
              </button>
            </Link>
          </div>

          <div className=" lg:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={28} onClick={handleChange} />
            ) : (
              <AiOutlineMenu size={28} onClick={handleChange} />
            )}
          </div>
        </div>
        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-[#2e424d] text-white  left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <Link
            to="/"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-[#98dad9] transition-all cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="/about"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#98dad9] transition-all cursor-pointer"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            to="/projects"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#98dad9] transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Projects
          </Link>
          <Link
            to="/skills"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-white transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Skills
          </Link>
          <Link
            to="/blogs"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-[#98dad9] transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Blogs
          </Link>
          <div className=" lg:hidden">
            <Link to="/contact">
              <button
                onClick={closeMenu}
                className="bg-base-500 text-[#2e424d] font-medium bg-white px-4 py-2 rounded-md hover:bg-[#98dad9] transition duration-300 ease-in-out"
              >
                Contact
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
