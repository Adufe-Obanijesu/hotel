import { Link } from "react-router-dom";
import diner from "/images/dining-img.png";

// Importing atoms
import RestaurantAtom from "./atoms/RestaurantAtom";

const RestaurantComponent = () => {
  return (
    <section id="restaurant" className="py-10 lg:py-24 bg-lightgray">
      <div>
        <h6 className="uppercase text-green-400 mb-2 font-bold text-sm text-center">
          restaurant
        </h6>
        <h1 className="lg:text-4xl md:text-4xl text-3xl leading-normal font-bold text-center">
          Our Diner
        </h1>

        <div className="relative h-72 px-6 my-6">
          <img
            src={diner}
            className="h-full w-full object-cover"
            alt="diner"
          />
        </div>

        <h1 className="lg:text-3xl md:text-3xl text-xl mt-12 leading-normal font-bold text-center">
          Our Specialties
        </h1>
        <div className="mt-12 md:grid lg:grid-cols-3 md:grid-cols-2 gap-4 px-6">
          <RestaurantAtom name="Ice Cream" price="$50" desc="Sweet sweet ice cream for the children" image="meal-1.jpg" />
          <RestaurantAtom name="Ice Cream" price="$50" desc="Sweet sweet ice cream for the children" image="meal-2.jpg" />
          <RestaurantAtom name="Ice Cream" price="$50" desc="Sweet sweet ice cream for the children" image="meal-3.jpg" />
          <RestaurantAtom name="Ice Cream" price="$50" desc="Sweet sweet ice cream for the children" image="meal-4.jpg" />
          <RestaurantAtom name="Ice Cream" price="$50" desc="Sweet sweet ice cream for the children" image="meal-5.jpg" />
          <RestaurantAtom name="Ice Cream" price="$50" desc="Sweet sweet ice cream for the children" image="meal-6.jpg" />
        </div>

        <div className="flex justify-center mt-6">
          <Link to="/restaurant">
              <button className="py-2 px-4 bg-green-400 hover:bg-green-500 rounded-md text-white transition ease-in duration-300">
                View All Menu
              </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RestaurantComponent;
