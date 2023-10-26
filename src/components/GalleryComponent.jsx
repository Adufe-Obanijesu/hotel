// Importing Atom
import GalleryAtom from "./atoms/GalleryAtom";

const GalleryComponent = () => {
  return (
    <section id="gallery" className="mt-10 lg:mt-24">
      <div>
        <h6 className="uppercase text-green-400 mb-2 font-bold text-sm text-center">
          gallery
        </h6>
        <h1 className="lg:text-4xl md:text-4xl text-3xl leading-normal font-bold text-center">
          Photos
        </h1>

        <div className="grid md:mt-12 mt-8 md:grid-cols-4 grid-cols-2 gap-0">
          <GalleryAtom galleryImage="insta-2.jpg" />
          <GalleryAtom galleryImage="insta-3.jpg" />
          <GalleryAtom galleryImage="insta-4.jpg" />
          <GalleryAtom galleryImage="insta-5.jpg" />
        </div>
      </div>
    </section>
  );
};

export default GalleryComponent;
