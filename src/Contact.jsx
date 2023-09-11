import Hero from "./components/Hero";

const Contact = () => {
  return (
    <section>
      <Hero page="Contact" />
      <div className="bg-lightgray lg:p-28 px-6 py-20">
        <h1 className="text-3xl font-semibold">Contact Information</h1>
        <div className="md:grid grid-cols-2 gap-2">
        <div className="mt-8 text-lg px-6">
          <div className="bg-white text-gray-400 shadow mb-4 p-8">
            <span className="text-black">Address:</span> 198 West 21th Street,
            Suite 721 New York NY 10016
          </div>

          <div className="bg-white text-gray-400 shadow mb-4 p-8">
            <span className="text-black">Phone:</span>{" "}
            <span
              className="text-blue-400 font-semibold"
              style={{ fontSize: "16px" }}
            >
              + 1235 2355 98
            </span>
          </div>

          <div className="bg-white text-gray-400 shadow mb-4 p-8">
            <span className="text-black">Email:</span>{" "}
            <span
              className="text-blue-400 font-semibold"
              style={{ fontSize: "16px" }}
            >
              info@yoursite.com
            </span>
          </div>

          <div className="bg-white text-gray-400 shadow mb-4 p-8">
            <span className="text-black">Website:</span>{" "}
            <span
              className="text-blue-400 font-semibold"
              style={{ fontSize: "16px" }}
            >
              yoursite.com
            </span>
          </div>
        </div>

        <div className="">
          <div className="bg-white px-6 py-8">
            <div>
              <form>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="focus:outline-none border border-gray-200 block p-3 focus:border-black mb-4"
                  style={{ width: "100%" }}
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="focus:outline-none border border-gray-200 block p-3 focus:border-black mb-4"
                  style={{ width: "100%" }}
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="focus:outline-none border border-gray-200 block p-3 focus:border-black mb-4"
                  style={{ width: "100%" }}
                />
                <textarea
                  rows="7"
                  className="border border-gray-200 block p-3 focus:border-black mb-4"
                  style={{ width: "100%" }}
                ></textarea>
                <button className="text-md bg-green-400 py-4 px-8 text-white hover:shadow hover:bg-green-500 transition ease-in duration-300">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
