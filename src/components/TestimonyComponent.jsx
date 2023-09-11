// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import SwiperCore from "swiper";

import { AiFillStar } from "react-icons/ai";

// Importing Image
import testimonyImg from "/images/testimony-img.jpg";

// install Swiper modules
SwiperCore.use();

const TestimonyComponent = ({ testimony }) => {
  return (
    <section id="testimony" className="relative">
      
      <div className="lg:px-24 md:px-10 mt-16 lg:mt-0">
        <div className="grid grid-cols-5 gap-0">
          <div className="md:col-span-2 hidden md:block lg:block">
            <div className="w-full h-96 relative">
              <img
                src={testimonyImg}
                alt="testimony"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="md:col-span-3 col-span-5">
            <div className="md:p-14 p-6 py-20">
              <h6 className="text-green-400 text-md font-semibold uppercase mb-4">
                testimony
              </h6>
              <h1 className="md:text-4xl text-2xl font-bold">
                Happy Customers
              </h1>
              <Swiper
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
                      <p className="text-gray-400 mt-8 text-md tracking-wide leading-7">
                        I had such a wonderful time here. It was a great experience! Looking forward to lodging here next summer for our annual conference
                      </p>
                      <div className="flex mt-8 mb-4 items-center">
                        <div className="ml-4">
                          <h3 className="text-xl text-blue-500 font-bold">
                            James Lou
                          </h3>
                                <AiFillStar
                                  className="text-yellow-600 hover:text-yellow-800 cursor-pointer inline"
                                />
                                <AiFillStar
                                  className="text-yellow-600 hover:text-yellow-800 cursor-pointer inline"
                                />
                                <AiFillStar
                                  className="text-yellow-600 hover:text-yellow-800 cursor-pointer inline"
                                />
                                <AiFillStar
                                  className="text-yellow-600 hover:text-yellow-800 cursor-pointer inline"
                                />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default TestimonyComponent;
