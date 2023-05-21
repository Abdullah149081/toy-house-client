/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useContext, useState } from "react";
import { FaStream } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { TiTimesOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import nav from "../../../assets/nav.png";
import { AuthContext } from "../../../providers/AuthProviders";
import ActiveLink from "./ActiveLink";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut();
  };

  return (
    <div className="md:sticky top-0 z-10">
      <nav className="lg:px-36 2xl:px-80 relative bg-[#9363b5] py-4 flex  justify-between items-center pl-4 h-20">
        <img className="hidden lg:block absolute top-[80px] z-0 left-0 w-full" src={nav} alt="" />
        <div>
          <Link className="inline-flex items-center gap-2" to="/">
            <img className="h-8 lg:h-10" src={logo} alt="" />
            <h2 className="text-2xl lg:text-4xl font-bold text-[#ffff]">Toy House</h2>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <div className="nav-link-toy">
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
                open ? "top-22 left-0  z-10 w-1/2 text-left bg-[#9363B5] py-12  px-6 space-y-6  rounded-br-lg absolute" : "hidden"
              }`}
            >
              {user && (
                <div className="md:hidden mx-auto">
                  <p title={user?.displayName}>
                    <img className="w-10 h-10 rounded-full ring-offset-2 ring-2 ring-accent" src={user?.photoURL} alt="" />
                  </p>
                </div>
              )}
              <ActiveLink to="/">Home</ActiveLink>
              <ActiveLink to="/all-toys">All Toys</ActiveLink>
              <ActiveLink to="/blog">Blog</ActiveLink>
              {user && (
                <>
                  <ActiveLink to="/add-toy">Add A Toy</ActiveLink>
                  <ActiveLink to="/my-toys">My Toys</ActiveLink>
                </>
              )}
              {!user && <ActiveLink to="/sign-in">Sign in</ActiveLink>}
              {user && (
                <button onClick={handleLogOut} type="button" className="btn btn-toy   w-2/4 block  lg:hidden ">
                  <span className="inline-flex font-extrabold items-center gap-2 ">
                    logout <FiLogOut className="w-4 h-4" />
                  </span>
                </button>
              )}
            </div>
          </div>

          {/* lg: user Profile  */}
          {user && (
            <div className="hidden lg:inline-block">
              <div className="flex items-center gap-4">
                <div className="toy-user">
                  <p title={user?.displayName}>
                    <img className="w-10 h-10 rounded-full ring-offset-2 ring-2 ring-accent" src={user?.photoURL} alt="" />
                  </p>
                </div>
                <div className="logout">
                  <button onClick={handleLogOut} type="button" className="btn btn-toy  ">
                    <span className="inline-flex items-center gap-2 font-extrabold ">
                      logout <FiLogOut className="w-4 h-4" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
