import Hero from "./components/Hero";
import Services from "./components/Services";

// Importing Images
import bg1 from "/images/bg_1.jpg";
import bg2 from "/images/bg_2.jpg";
import bg3 from "/images/bg_3.jpg";

const Service = () => {
  return (
    <section>
      <Hero page="Services" />
      <Services />

      <div className="mt-24">
        <div className="grid grid-cols-1 gap-0 mx-4 md:mx-0">
          <div id="parent" className={`md:flex`}>
            <div className="relative h-48 md:h-auto md:w-1/2">
              <div className="">
                <img
                  src={bg1}
                  placeholder="blur"
                  alt={`Services`}
                />
              </div>
            </div>

            <div className="lg:p-20 md:p-10 p-6 md:w-1/2">
              <h1 className="md:text-4xl text-3xl font-bold mb-6">
                Our Swimming Pool
              </h1>
              <p className="leading-6 text-gray-400 tracking-wider">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Far far
                away, behind the word mountains, far from the countries Vokalia
                and Consonantia, there live the blind texts. Far far away,
                behind the word mountains, far from the countries Vokalia and
                Consonantia, there live the blind texts. Far far away, behind
                the word mountains, far from the countries Vokalia and
                Consonantia, there live the blind texts.
              </p>
            </div>
          </div>

          <div id="parent" className={`md:flex flex-row-reverse`}>
            <div className="relative h-48 md:h-auto md:w-1/2">
              <div className="">
                <img
                  src={bg2}
                  placeholder="blur"
                  alt={`Services`}
                />
              </div>
            </div>

            <div className="lg:p-20 md:p-10 p-6 md:w-1/2">
              <h1 className="md:text-4xl text-3xl font-bold mb-6">Our Bar</h1>
              <p className="leading-6 text-gray-400 tracking-wider">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Far far
                away, behind the word mountains, far from the countries Vokalia
                and Consonantia, there live the blind texts. Far far away,
                behind the word mountains, far from the countries Vokalia and
                Consonantia, there live the blind texts. Far far away, behind
                the word mountains, far from the countries Vokalia and
                Consonantia, there live the blind texts.
              </p>
            </div>
          </div>

          <div id="parent" className={`md:flex`}>
            <div className="relative h-48 md:h-auto md:w-1/2">
              <div className="">
                <img
                  src={bg3}
                  placeholder="blur"
                  alt={`Services`}
                />
              </div>
            </div>

            <div className="lg:p-20 md:p-10 p-6 md:w-1/2">
              <h1 className="md:text-4xl text-3xl font-bold mb-6">
                Our Laundry Service
              </h1>
              <p className="leading-6 text-gray-400 tracking-wider">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Far far
                away, behind the word mountains, far from the countries Vokalia
                and Consonantia, there live the blind texts. Far far away,
                behind the word mountains, far from the countries Vokalia and
                Consonantia, there live the blind texts. Far far away, behind
                the word mountains, far from the countries Vokalia and
                Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
