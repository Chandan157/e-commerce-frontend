import BlogCard from "./BlogCard";

const data = [
  {
    
    img: "/src/images/post__1.webp",
    title:"Healthy food Healthy Life",
    date:"Aug 25, 2023",
    comment:1,
  },
  {
    
    img: "/src/images/post__2.webp",
    title:"Healthy food Healthy Life",
    date:"Apr 21, 2024",
    comment:1,
  },
  {
    
    img: "/src/images/post__3.webp",
    title:"Healthy food Healthy Life",
    date:"Aug 2, 2023",
    comment:1,
  },
];

const BlogSection = () => {
  return (
    <div className="container pt-16">
      <h2 className="font-bold text-2xl">Latest News</h2>
      <p className="text-gray-500">
        Best way to highlight interesting moments of your blog.
      </p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8">
        {data.map((e) => (
          <BlogCard
            key={e.date}
            img={e.img}
            title={e.title}
            date={e.date}
            comment={e.comment}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
