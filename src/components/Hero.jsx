// Importing CSS file
import style from "../assets/css/hero.css";

const Hero = ({ page }) => {
  return (
    <section id="hero">
      <div
        className="heroBackground z-0 relative flex items-end justify-center"
      >
        <div className="z-10 absolute font-bold text-white mb-10">
          <h4 className="text-md uppercase text-center">
            Home <span className="ml-4 text-smallHeadings">{page}</span>
          </h4>
          <h1 className="text-5xl">{page}</h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
