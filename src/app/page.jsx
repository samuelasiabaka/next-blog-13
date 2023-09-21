import BlogCard from "@/components/blogCard/BlogCard";
import classes from "./page.module.css";

export async function fetchBlogs() {
  const res = await fetch("https://next-blog-13.vercel.app/api/blog", {
    cache: "no-store",
  });

  return res.json();
}

export default async function Home() {
  const blogs = await fetchBlogs();

  return (
    <div className={classes.container}>
      {blogs?.length > 0 && <h2>WebDevMania&apos;s Blog Website</h2>}
      <div className={classes.wrapper}>
        {blogs?.length > 0 ? (
          blogs.map((blog) => <BlogCard key={blog._id} blog={blog} />)
        ) : (
          <h3 className={classes.noBlogs}>
            No blogs are currently in the database
          </h3>
        )}
      </div>
    </div>
  );
}
