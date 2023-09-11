// Importing atoms
import BlogAtom from "./atoms/BlogAtom";

const BlogComponent = ({ blogs }) => {
  return (
    <section id="blog" className="py-10 lg:py-24">
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

        <div className="flex justify-center mt-6">
          <button className="py-2 px-4 bg-green-400 hover:bg-green-500 rounded-md text-white transition ease-in duration-300">
            View All Blogs
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogComponent;
