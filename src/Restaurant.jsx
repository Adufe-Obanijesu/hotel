// Importing Images
import diner from "/images/dining-img.png";

import Hero from "./components/Hero";
import RestaurantAtom from "./components/atoms/RestaurantAtom";
import Chef from "./components/Chef";

const Restaurant = ({ menu }) => {
  return (
    <section id="restaurant">
      <Hero page="Restaurant" />

      <div className="py-24 bg-lightgray">
        <h6 className="uppercase text-green-400 mb-2 font-bold text-sm text-center">
          restaurant
        </h6>
        <h1 className="lg:text-4xl md:text-4xl text-3xl leading-normal font-bold text-center">
          Our Diner
        </h1>

        <div className="relative h-72 mx-8 my-6">
          <img
            src={diner}
            className="h-full w-full object-cover"
            alt="diner"
          />
        </div>

        <h1 className="lg:text-3xl md:text-3xl text-xl leading-normal font-bold text-center">
          Our Specialties
        </h1>

        <div className="mt-12 md:grid lg:grid-cols-3 md:grid-cols-2 gap-4 mx-8">
          <RestaurantAtom name="Ice Cream" price="$50" desc="Sweet sweet ice cream for the children" image="meal-1.jpg" />
          <RestaurantAtom name="Ice Cream" price="$50" desc="Sweet sweet ice cream for the children" image="meal-2.jpg" />
          <RestaurantAtom name="Ice Cream" price="$50" desc="Sweet sweet ice cream for the children" image="meal-3.jpg" />
          <RestaurantAtom name="Ice Cream" price="$50" desc="Sweet sweet ice cream for the children" image="meal-4.jpg" />
          <RestaurantAtom name="Ice Cream" price="$50" desc="Sweet sweet ice cream for the children" image="meal-5.jpg" />
          <RestaurantAtom name="Ice Cream" price="$50" desc="Sweet sweet ice cream for the children" image="meal-6.jpg" />
        </div>

        <div className="flex justify-center mt-6">
          <button
            className="py-2 px-4 bg-green-400 hover:bg-green-500 rounded-md text-white transition ease-in duration-300"
          >
            View More
          </button>
        </div> 
      </div>

      <div className="py-24 md:px-24 px-8">
        <h1 className="lg:text-4xl md:text-4xl text-3xl leading-normal font-bold text-center">
          Meet Our Chefs
        </h1>

        <div className="md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-3 mt-12">
          <Chef image="staff-1.jpg" />
          <Chef image="staff-2.jpg" />
          <Chef image="staff-3.jpg" />
          <Chef image="staff-4.jpg" />
        </div>
      </div>
    </section>
  );
};

export default Restaurant;
