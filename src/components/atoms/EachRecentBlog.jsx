const EachRecentBlog = () => {
  return (
    <div className="grid grid-cols-3 gap-2 mb-3">
      <div className="relative">
        <img src="/images/about.jpg" alt="blog" />
      </div>

      <div className="col-span-2">
        <p>
          Even the all-powerful Pointing has no control about the blind texts
        </p>
        <div className="grid grid-cols-3 gap-2"></div>
      </div>
    </div>
  );
};

export default EachRecentBlog;
