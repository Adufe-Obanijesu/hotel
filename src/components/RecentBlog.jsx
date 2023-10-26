// Imporing Atoms
import EachRecentBlog from "./atoms/EachRecentBlog";

const RecentBlog = () => {
  return (
    <section className="ml-6">
      <h4>Recent Blog</h4>
      <div>
        <EachRecentBlog image="/images/image_1.jpg" />
        <EachRecentBlog image="/images/image_2.jpg" />
        <EachRecentBlog image="/images/image_3.jpg" />
        <EachRecentBlog image="/images/image_4.jpg" />
      </div>
    </section>
  );
};

export default RecentBlog;
