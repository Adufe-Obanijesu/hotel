// Importing CSS
import "../../assets/css/restaurant.css";

const RestaurantAtom = ({ name, price, desc, image}) => {
  return (
    <div
      id="menu"
      className="bg-white transition ease-in duration-300 grid grid-cols-5 gap-0 md:shadow-lg shadow-md mb-4 md:mb-2 cursor-pointer hover:bg-blue-500 hover:text-white meal"
    >
      <div className="relative col-span-2">
        <img
          src={`/images/${image}`}
          className="w-full h-full object-cover"
          alt={name}
        />
      </div>

      <div className="col-span-3 py-8 px-6">
        <div className="md:grid grid-cols-5 gap-1">
          <div className="col-span-4">
            <h3 className="md:text-xl text-md font-semibold">{name}</h3>
            <p id="menuDesc" className="text-gray-600 text-sm mt-4 font-serif">
              {desc}
            </p>
          </div>

          <div className="col-span-1 md:mt-0 mt-2">
            <h3 id="priceTag" className="text-xl font-bold">
              {price}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantAtom;
