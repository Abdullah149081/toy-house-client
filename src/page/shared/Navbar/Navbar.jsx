/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react";
import { FaStream } from "react-icons/fa";
import { TiTimesOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import nav from "../../../assets/nav.png";
import ActiveLink from "./ActiveLink";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:sticky top-0 z-10">
      <nav className="lg:px-36 2xl:px-80 relative bg-[#9363b5] py-4 flex  justify-between items-center pl-4 ">
        <img className="hidden lg:block absolute top-[70px] z-0 left-0 w-full" src={nav} alt="" />
        <div>
          <Link to="/">
            <h2 className="text-4xl font-bold text-[#ffff]">Toy House</h2>
          </Link>
        </div>

        <div>
          <div
            onClick={() => {
              setOpen(!open);
            }}
            role="button"
            tabIndex="0"
          >
            <span className="pr-12 md:pr-0 ">
              {open ? <TiTimesOutline className="h-6 w-7 mt-7   md:hidden text-gray-900 cursor-pointer" /> : <FaStream className="  h-5 w-5 mt-7 md:hidden text-gray-900  cursor-pointer" />}
            </span>
          </div>

          <div
            className={`flex flex-col md:py-0 md:space-x-6  divide-neutral-300  divide-y lg:divide-y-0  lg:w-full font-bold text-[#ffff]  md:static md:flex-row  md:block ${
              open ? "top-22 left-0  w-1/2 text-left bg-[#9363B5] py-12  px-6 space-y-6  rounded-br-lg absolute" : "hidden"
            }`}
          >
            <ActiveLink to="/">Home</ActiveLink>
            <ActiveLink to="/all-toys">All Toys</ActiveLink>
            <ActiveLink to="/blog">Blog</ActiveLink>
            <ActiveLink to="/add-toy">Add A Toy</ActiveLink>
            <ActiveLink to="/my-toys">My Toys</ActiveLink>
            <ActiveLink to="/sing-in">Sing in</ActiveLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
