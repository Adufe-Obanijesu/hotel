import Hero from "./components/Hero";
import RoomsComponent from "./components/RoomsComponent";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper modules
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

const Rooms = () => {
  return (
    <div>
      <Hero page="Rooms" />
      <div className="px-2 lg:px-28 py-12">
        <div className="grid lg:grid-cols-2 grid-cols-1 grid-rows-1">
          <div className="relative w-100 h-50 md:100" style={{ width: "100%" }}>
            <Swiper
              modules={[Autoplay]}
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
              harbor lights hotel
            </h4>
            <h1 className="text-4xl font-bold leading-10">
              Harbor Lights Hotel Rooms
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
      <RoomsComponent />
    </div>
  );
};

export default Rooms;