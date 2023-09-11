import { Link } from "react-router-dom";

import "../assets/css/footer.css";

// Importing Icons
import { MdLocationOn, MdLocalPhone, MdMail } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="z-10 text-white absolute md:p-24 p-12">
        <div className="md:grid lg:grid-cols-4 md:grid-cols-2 gap-10">
          <div className="mb-12">
            <h3 className="text-white text-3xl font-bold">Harbor Lights</h3>
            <p className="text-gray-200 mt-10 leading-8 tracking-wide text-md">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <div className="mt-4 flex">
              <span className="bg-blue-500 opacity-90 cursor-pointer hover:bg-blue-500 hover:opacity-100 text-xl rounded-full  w-12 h-12 flex justify-center items-center mr-3">
                <FaFacebookF />
              </span>
              <span className="bg-blue-500 opacity-90 cursor-pointer hover:bg-blue-500 hover:opacity-100 text-xl rounded-full  w-12 h-12 flex justify-center items-center mr-3">
                <FaTwitter />
              </span>
              <span className="bg-blue-500 opacity-90 cursor-pointer hover:bg-blue-500 hover:opacity-100 text-xl rounded-full  w-12 h-12 flex justify-center items-center">
                <FaInstagram />
              </span>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-white text-3xl font-bold">Useful Links</h3>
            <div className="mt-10 text-md">
              <ul>
              <li className="pb-4 text-gray-200 hover:text-white cursor-pointer">
                <Link className={`focus:outline-none active:outline-none`} to="/blog">
                      Blog
                  </Link>
              </li>
              <li className="pb-4 text-gray-200 hover:text-white cursor-pointer">
                <Link className={`focus:outline-none active:outline-none`} to="/rooms">
                      Rooms
                  </Link>
              </li>
              <li className="pb-4 text-gray-200 hover:text-white cursor-pointer">
                <Link className={`focus:outline-none active:outline-none`} to="/services">
                    
                  </Link>
              </li>
              </ul>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-white text-3xl font-bold">Know Us</h3>
            <div className="mt-10 text-md">
              <ul>
              <li className="pb-4 text-gray-200 hover:text-white cursor-pointer">
              <Link className={`focus:outline-none active:outline-none`} to="about">
                      About Us
                  </Link>
                  </li>
                  <li className="pb-4 text-gray-200 hover:text-white cursor-pointer">
                  <Link className={`focus:outline-none active:outline-none`} to="/contact">
                      Contact Us
                  </Link>
                  </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-white text-3xl font-bold">Have a Question?</h3>
            <div className="mt-10 text-md">
              <ul>
                <li className="pb-4 text-gray-200 flex">
                  <span>
                    <MdLocationOn className="ml-1 mb-1 text-lg text-white" />
                  </span>{" "}
                  <span className="ml-2">
                    203 Fake St. Mountain View, San Francisco, California, USA
                  </span>
                </li>
                <li className="pb-4 text-gray-200 flex">
                  <span>
                    <MdLocalPhone className="inline ml-1 mb-1 text-lg text-white" />
                  </span>{" "}
                  <span className="ml-2">+2 392 3929 210</span>
                </li>
                <li className="pb-4 text-gray-200 flex">
                  <span>
                    <MdMail className="inline ml-1 mb-1 text-lg text-white" />
                  </span>{" "}
                  <span className="ml-2">info@yourdomain.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
