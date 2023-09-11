import { GiHotMeal } from "react-icons/gi";
import { MdRoomService } from "react-icons/md";
import { FaCarAlt, FaSpa, FaBed } from "react-icons/fa";

const Services = () => {
  return (
    <section className="mt-24">
      <h5 className="text-center text-lg font-semibold text-green-500">
        Welcome to Harbor Lights Hotel
      </h5>
      <h1 className="text-center text-4xl font-bold tracking-wider mt-4">
        You&apos;ll Never Want To Leave
      </h1>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 mt-10 lg:px-24 px-10 gap-3">
        <div className="serviceContainer">
          <div className="flex justify-center">
            <div className="w-24 h-24 rounded-full bg-white shadow -mb-12 flex justify-center items-center">
              <MdRoomService className="text-green-400 text-5xl" />
            </div>
          </div>
          <div className="flex justify-center bg-lightgray p-10 py-14 service">
            <h4 className="text-lg text-black font-semibold">
              Friendly Service
            </h4>
          </div>
        </div>

        <div className="serviceContainer">
          <div className="flex justify-center">
            <div className="w-24 h-24 rounded-full bg-white shadow -mb-12 flex justify-center items-center">
              <GiHotMeal className="text-green-400 text-5xl" />
            </div>
          </div>
          <div className="flex justify-center bg-lightgray p-10 py-14 service">
            <h4 className="text-lg text-black font-semibold">Get Breakfast</h4>
          </div>
        </div>

        <div className="serviceContainer">
          <div className="flex justify-center">
            <div className="w-24 h-24 rounded-full bg-white shadow -mb-12 flex justify-center items-center">
              <FaCarAlt className="text-green-400 text-5xl" />
            </div>
          </div>
          <div className="flex justify-center bg-lightgray p-10 py-14 service">
            <h4 className="text-lg text-black font-semibold">Transfers</h4>
          </div>
        </div>

        <div className="serviceContainer">
          <div className="flex justify-center">
            <div className="w-24 h-24 rounded-full bg-white shadow -mb-12 flex justify-center items-center">
              <FaSpa className="text-green-400 text-5xl" />
            </div>
          </div>
          <div className="flex justify-center bg-lightgray p-10 py-14 service">
            <h4 className="text-lg text-black font-semibold">Suits & SPA</h4>
          </div>
        </div>

        <div className="serviceContainer">
          <div className="flex justify-center">
            <div className="w-24 h-24 rounded-full bg-white shadow -mb-12 flex justify-center items-center">
              <FaBed className="text-green-400 text-5xl" />
            </div>
          </div>
          <div className="flex justify-center bg-lightgray p-10 py-14 service">
            <h4 className="text-lg text-black font-semibold">Cozy Room</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
