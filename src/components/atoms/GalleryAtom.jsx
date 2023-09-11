const GalleryAtom = ({ galleryImage }) => {
  return (
    <div className="relative h-60 w-100">
      <img
        className="cursor-pointer h-full w-full object-cover"
        src={`/images/${galleryImage}`}
        alt={`gallery`}
      />
    </div>
  );
};

export default GalleryAtom;
