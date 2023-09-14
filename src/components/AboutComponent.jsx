// Importing Images
import about1 from "/images/about-1.jpg";
import about2 from "/images/about-2.jpg";

const AboutComponent = () => {
  return (
    <section className="about mt-8 lg:mt-24">
      <div className="lg:px-24 px-10">
        <div className="grid grid-cols-5 gap-0">
          <div className="py-14 lg:col-span-2 md:col-span-5 col-span-5 w-4/5">
            <h6 className="uppercase text-green-400 mb-2 font-semibold text-sm">
              About harbor lights hotel
            </h6>
            <h1 className="lg:text-4xl md:text-4xl text-3xl leading-normal font-bold">
              Harbor Lights Hotel the Most Recommended Hotel All Over the World
            </h1>
            <p className="text-gray-400 mt-8 tracking-wide leading-7">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
            <button className="mt-6 text-md bg-blue-500 py-2 px-3 text-white rounded-md hover:shadow hover:bg-blue-600 transition ease-in duration-300">
              Reserve Your Room Now
            </button>
          </div>

          <div className="lg:col-span-3 md:col-span-5 col-span-5 grid grid-cols-2 gap-4">
            <div className="w-full h-full relative lg:col-span-1 md:col-span-1 col-span-2">
              <div className="h-full">
                <img
                  src={about1}
                  className="object-cover h-full w-full"
                  alt="about hotel"
                />
              </div>
            </div>

            <div className="w-full h-full relative lg:col-span-1 md:col-span-1 col-span-2 hidden md:block">
              <div className="h-full">
                <img
                  src={about2}
                  className="object-cover h-full w-full"
                  alt="about hotel"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;
