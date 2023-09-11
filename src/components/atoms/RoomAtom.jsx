// Importing Icons
import { HiArrowNarrowRight } from "react-icons/hi";

const RoomAtom = ({ type, price, img, reverse}) => {
  return (
    <div
      id="parent"
      className={`${reverse ? "md:flex-row-reverse" : "md:flex-row"} md:flex transition ease-in duration-300 cursor-pointer hover:bg-blue-400 hover:text-white`}
    >

      <div className="relative md:h-auto md:w-1/2">
        <div className="h-full">
          <img
            src={`/images/${img}`}
            className="object-cover h-full w-full md:h-full"
            alt="room"
          />
        </div>
      </div>

      <div className="lg:py-28 py-14 hover:text-white md:w-1/2">
        <div className="text-center">
          <span className="text-4xl md:text-xl font-semibold" id="priceTag">
            {price}.00
          </span>{" "}
          <span className="text-md">per night</span>
        </div>
        <h2 className="text-2xl font-semibold text-center mt-4">{type} Room</h2>
        <div className="flex justify-center mt-6">
          <button className="border-2 border-gray py-2 px-4 rounded flex">
            View Details{" "}
            <HiArrowNarrowRight className="inline mt-1 ml-1 text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomAtom;
