// Importing CSS file
import "./assets/css/homepage.css";

// Importing Components
import Services from "./components/Services";
import AboutComponent from "./components/AboutComponent";
import TestimonyComponent from "./components/TestimonyComponent";
import RoomsComponent from "./components/RoomsComponent";
import RestaurantComponent from "./components/RestaurantComponent";
import BlogComponent from "./components/BlogComponent";
import GalleryComponent from "./components/GalleryComponent";

const Homepage = () => {

  return (
    <main className="">
      <section>
        <div
          className="heroBackgroundHomepage z-0 relative flex items-center lg:justify-end md:justify-start sm:justify-center"
        >
          <div className="z-10 absolute font-bold lg:w-2/6 md:w-2/3 px-8 lg:px-0 text-white lg:mr-40">
            <h4 className="text-lg text-smallHeadings uppercase">
              More than a hotel... an experience
            </h4>
            <h1 className="lg:text-8xl text-5xl">
              Hotel for the whole family all year
            </h1>
          </div>
        </div>
      </section>

      <section className="lg:bg-lightgray lg:pl-24 pl-6 w-11/12 inline-block sm:flex justify-center">
        <form className="lg:flex justify-between w-full h-100">
          <div className="lg:py-10 py-4">
            <h6 className="uppercase text-green-400 text-sm font-bold">
              check-in date
            </h6>
            <input
              type="date"
              className="sm:w-full bg-transparent py-3 font-bold w-full lg:w-auto"
            />
          </div>

          <div className="lg:py-10 py-4">
            <h6 className="uppercase text-green-400 text-sm font-bold">
              check-out date
            </h6>
            <input
              type="date"
              className="sm:w-full bg-transparent py-3 font-bold w-full lg:w-auto"
            />
          </div>

          <div className="lg:py-10 py-4">
            <h6 className="uppercase text-green-400 text-sm font-bold">room</h6>
            <select className="bg-transparent sm:w-full w-full lg:w-auto py-3 font-bold">
              <option value="Suite">Suite</option>
              <option value="Deluxe Room">Deluxe Room</option>
              <option value="Family Room">Family Room</option>
              <option value="Luxury Room">Luxury Room</option>
              <option value="Classic Room">Classic Room</option>
            </select>
          </div>

          <div className="lg:py-10 py-4">
            <h6 className="uppercase text-green-400 text-sm font-bold">
              guests
            </h6>
            <select className="bg-transparent py-3 font-bold sm:w-full w-full lg:w-auto">
              <option value="1 Guest">1 Guest</option>
              <option value="2 Guests">2 Guests</option>
              <option value="3 Guests">3 Guests</option>
              <option value="4 Guests">4 Guests</option>
              <option value="5 Guests">5 Guests</option>
            </select>
          </div>
          <button className="bg-green-400 hover:bg-green-500 transition ease-in duration-300 h-100 md:px-10 px-6 text-white md:py-7 py-3 w-full lg:w-auto">
            <span className="uppercase">check availability</span>
            <br />
            <span>Best Price Guaranteed</span>
          </button>
        </form>
      </section>

      <Services />

      <AboutComponent />

      <TestimonyComponent />

      <RoomsComponent />

      <RestaurantComponent />

      <BlogComponent />

      <GalleryComponent />

    </main>
  );
};

export default Homepage;