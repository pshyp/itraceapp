import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import styles from "./blog.module.css";

function getBlogs() {
  const contentDir = path.join(process.cwd(), "public/content");
  const filenames = fs.readdirSync(contentDir).filter((file) => file.endsWith(".mdx"));

  const blogs = filenames.map((filename) => {
    const filePath = path.join(contentDir, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);
    return {
      slug: data.slug || filename.replace(/\.mdx$/, ""),
      title: data.title || "Untitled",
      author: data.author || "Anonymous",
    };
  });
  return blogs;
}

export default function Blog() {
  const blogs = getBlogs();
  return (
    <div className={styles.blogContainer}>
      <h1 className={styles.blogTitle}>Blog</h1>
      <div className={styles.blogGrid}>
        {blogs.map((blog) => (
          <div key={blog.slug} className={styles.blogCard}>
            <h2>{blog.title}</h2>
            <p className={styles.blogAuthor}>By {blog.author}</p>
            <Link href={`/blog/${blog.slug}`}>Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
