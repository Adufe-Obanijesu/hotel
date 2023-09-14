import { useState } from "react";
import { Link } from "react-router-dom";

// Importing Icons
import { MdMenu } from "react-icons/md";

const Navbar = () => {
  const [toggleNavigation, setToggleNavigation] = useState(false);

  const toggle = () => {
    setToggleNavigation(!toggleNavigation);
  };

  return (
    <div className={`sticky top-0 z-20 bg-white shadow`}>
      <nav>
        <div className="">
          <div className="flex justify-between">
            <Link onClick={toggle} to="/" className="px-7 py-5 text-green-500 font-bold">
              Hotel
            </Link>
            <ul
              className={`absolute lg:static flex flex-col lg:flex-row right-1 lg:px-0 lg:mt-0 lg:py-0 lg:shadow-none px-6 mt-14 py-2 bg-white shadow ${
                toggleNavigation === false ? "hidden lg:flex" : "flex"
              } transition duration-500 ease-in`}
            >
              
              <Link onClick={toggle} className="py-5 text-gray-500 px-7 border-b-4 border-transparent duration-300 cursor-pointer hover:border-green-500 transition-border ease-in hover:text-green-500" to="/">
                  Home
              </Link>
              
              <Link onClick={toggle} className="py-5 text-gray-500 px-7 border-b-4 border-transparent duration-300 cursor-pointer hover:border-green-500 transition-border ease-in hover:text-green-500" to="/rooms">
                  Our Rooms
              </Link>
              
              <Link onClick={toggle} className="py-5 text-gray-500 px-7 border-b-4 border-transparent duration-300 cursor-pointer hover:border-green-500 transition-border ease-in hover:text-green-500" to="/services">
                  Services
              </Link>
              
              <Link onClick={toggle} className="py-5 text-gray-500 px-7 border-b-4 border-transparent duration-300 cursor-pointer hover:border-green-500 transition-border ease-in hover:text-green-500" to="/restaurant">
                  Restaurant
              </Link>
              
              <Link onClick={toggle} className="py-5 text-gray-500 px-7 border-b-4 border-transparent duration-300 cursor-pointer hover:border-green-500 transition-border ease-in hover:text-green-500" to="/about">
                  About us
              </Link>
              
              <Link onClick={toggle} className="py-5 text-gray-500 px-7 border-b-4 border-transparent duration-300 cursor-pointer hover:border-green-500 transition-border ease-in hover:text-green-500" to="/blog">
                  Blog
              </Link>
              
              <Link onClick={toggle} className="py-5 text-gray-500 px-7 border-b-4 border-transparent duration-300 cursor-pointer hover:border-green-500 transition-border ease-in hover:text-green-500" to="/contact">
                  Contact
              </Link>

              <button
                className={`px-7 bg-blue-500 hover:bg-blue-600 text-white transition ease-in duration-300 hidden lg:block`}
                style={{ height: "100%" }}
              >
                Book Now
              </button>
            </ul>

            <MdMenu
              onClick={toggle}
              className="lg:hidden my-5 text-3xl mr-4 cursor-pointer border hover:border-gray-300 text-gray-500"
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
