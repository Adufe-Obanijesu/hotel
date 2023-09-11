// Importing Images
import diner from "/images/dining-img.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import SwiperCore from "swiper";

// install Swiper modules
SwiperCore.use();

import Hero from "./components/Hero";
import RestaurantAtom from "./components/atoms/RestaurantAtom";
import Chef from "./components/Chef";

const Restaurant = ({ menu }) => {
  return (
    <section id="restaurant">
      <Hero page="Restaurant" />

      <div className="px-2 lg:px-28 py-20">
        <div className="grid lg:grid-cols-2 grid-cols-1 grid-rows-1">
          <div className="relative w-100 h-50 md:100" style={{ width: "100%" }}>
            <Swiper
              style={{ height: "100%" }}
              className="mySwiper"
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              spaceBetween={50}
              slidesPerView={1}
              pagination={{ clickable: true }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <div>
                  <img
                    className="cursor-pointer"
                    src={`/images/room-1.jpg`}
                    alt={``}
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div>
                  <img
                    className="cursor-pointer"
                    src={`/images/room-2.jpg`}
                    alt={``}
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div>
                  <img
                    className="cursor-pointer"
                    src={`/images/room-3.jpg`}
                    alt={``}
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="px-12 py-8">
            <h4 className="text-green-400 uppercase text-sm font-semibold mb-2">
              about harbor lights hotel
            </h4>
            <h1 className="text-4xl font-bold leading-10">
              Harbor Lights Hotel Restaurants
            </h1>

            <div>
              <p className="text-gray-400 mt-6 leading-7">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>

              <p className="text-gray-400 mt-6 leading-7">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>

              <button className="mt-6 text-md bg-blue-500 py-2 px-3 text-white rounded-md hover:shadow hover:bg-blue-600 transition ease-in duration-300">
                More info
              </button>
            </div>
          </div>
        </div>
      </div>

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
