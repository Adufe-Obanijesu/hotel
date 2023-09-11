// Importing Icons
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Chef = ({ image }) => {
  return (
    <div className="border border-1 border-gray-200 mb-4 md:mb-0">
      <div className="relative h-60">
        <img
          src={`/images/${image}`}
          className="w-full h-full object-cover"
          alt="chef"
        />
      </div>
      <h3 className="text-center font-semibold 3xl mt-4">Andrew Arnold</h3>
      <div className="mt-4 flex justify-center mb-4">
        <span className="cursor-pointer hover:bg-blue-500 hover:text-white transition duration-300 ease-in shadow text-lg rounded-full w-10 h-10 flex justify-center items-center mr-3">
          <FaFacebookF />
        </span>
        <span className="cursor-pointer hover:bg-blue-500 hover:text-white transition duration-300 ease-in shadow text-lg rounded-full w-10 h-10 flex justify-center items-center mr-3">
          <FaTwitter />
        </span>
        <span className="cursor-pointer hover:bg-blue-500 hover:text-white transition duration-300 ease-in shadow text-lg rounded-full w-10 h-10 flex justify-center items-center">
          <FaInstagram />
        </span>
      </div>
    </div>
  );
};

export default Chef;
