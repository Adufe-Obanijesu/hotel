// Importing Icon
import { MdMessage } from "react-icons/md";

const BlogAtom = ({ title, date, content, image }) => {
  return (
    <div className="mb-6">
      <div className="relative h-60 w-100">
          <img
            className="rounded-md w-full h-full object-cover"
            src={`/images/${image}`}
            alt="title"
          />
      </div>
      <div className="text-center my-4">
        <div className="flex gap-2 cursor-pointer text-blue-500 hover:text-blue-300 transition ease-in duration-300">
          <p>{date}</p>
          <div>
            <MdMessage className="inline ml-1 mb-1" />
            <span className="text-sm">3</span>
          </div>
        </div>
      </div>
      <div className="text-center text-xl font-bold hover:text-green-500 cursor-pointer transition ease-in duration-300">
        {title}
      </div>
      <p className="text-gray-400 mt-4 tracking-wide leading-7">
        {content}
      </p>
      <button className="mt-6 text-md bg-blue-500 py-2 px-3 text-white rounded-md hover:shadow hover:bg-blue-600 transition ease-in duration-300">
        Read more
      </button>
    </div>
  );
};

export default BlogAtom;
