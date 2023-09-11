import Hero from "./components/Hero";
import BlogAtom from "./components/atoms/BlogAtom";

// Importing Icons
import { HiArrowNarrowRight, HiArrowNarrowLeft } from "react-icons/hi";

const Blog = ({blog}) => {
  
  
  return (
    <div>
      <Hero page="Blog" />
      <section id="blog" className="my-24">
        <div>
          <h6 className="uppercase text-green-400 mb-2 font-bold text-sm text-center">
            read blog
          </h6>
          <h1 className="lg:text-4xl md:text-4xl text-3xl leading-normal font-bold text-center">
            Recent Blog
          </h1>

          <div className="mt-12 lg:px-24 px-8">
          <div className="md:grid lg:grid-cols-3 md:grid-cols-3 gap-4">
              <BlogAtom name="New Renovations" date="Mon, 25th August 2022" content="Great work has been done in spicing things up here in the hotel. We have reconstructed the conference room" image="image_1.jpg" />
              <BlogAtom name="New Renovations" date="Sat, 23rd August 2022" content="Great work has been done in spicing things up here in the hotel. We have reconstructed the conference room" image="image_2.jpg" />
              <BlogAtom name="New Renovations" date="Tue, 19th August 2022" content="Great work has been done in spicing things up here in the hotel. We have reconstructed the conference room" image="image_3.jpg" />
          </div>
        </div>

           <div className="mt-6 flex justify-center">
            <div className="w-12 h-12 flex justify-center items-center mr-1 rounded-full border border-green-400 text-green-400 cursor-pointer bg-white hover:bg-green-400 hover:text-white transition ease-in duration-200">
              <HiArrowNarrowLeft className="inline text-lg" />
            </div>
            <div className="w-12 h-12 flex justify-center items-center mr-1 rounded-full border border-green-400 text-green-400 cursor-pointer bg-white hover:bg-green-400 hover:text-white transition ease-in duration-200">
              1
            </div>
            <div className="w-12 h-12 flex justify-center items-center mr-1 rounded-full border border-green-400 text-green-400 cursor-pointer bg-white hover:bg-green-400 hover:text-white transition ease-in duration-200">
              2
            </div>
            <div className="w-12 h-12 flex justify-center items-center mr-1 rounded-full border border-green-400 text-green-400 cursor-pointer bg-white hover:bg-green-400 hover:text-white transition ease-in duration-200">
              3
            </div>
            <div className="w-12 h-12 flex justify-center items-center mr-1 rounded-full border border-green-400 text-green-400 cursor-pointer bg-white hover:bg-green-400 hover:text-white transition ease-in duration-200">
              4
            </div>
            <div className="w-12 h-12 flex justify-center items-center mr-1 rounded-full border border-green-400 text-green-400 cursor-pointer bg-white hover:bg-green-400 hover:text-white transition ease-in duration-200">
              5
            </div>
            <div className="w-12 h-12 flex justify-center items-center mr-1 rounded-full border border-green-400 text-green-400 cursor-pointer bg-white hover:bg-green-400 hover:text-white transition ease-in duration-200">
              <HiArrowNarrowRight className="inline text-lg" />
            </div>
          </div> 
        </div>
      </section>
    </div>
  );
};

export const getServerSideProps = async () => {
  const blogResponse = await fetch("http://localhost:3000/api/client/blog");
  const blog = await blogResponse.json();

  return {
    props: {
      blog,
    },
  };
};

export default Blog;
