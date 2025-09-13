import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";
import styles from "./blog.module.css";

function getBlogs() {
  const contentDir = path.join(process.cwd(), "public/content");
  const filenames = fs.readdirSync(contentDir).filter((file) => file.endsWith(".mdx"));

  const publicDir = path.join(process.cwd(), "public");
  const images = fs.readdirSync(publicDir).filter((file) =>
    /\.(png|jpg|jpeg|webp)$/i.test(file)
  );

  const blogs = filenames.map((filename) => {
    const filePath = path.join(contentDir, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);
    const randomImage = images[Math.floor(Math.random() * images.length)];

    return {
      slug: data.slug || filename.replace(/\.mdx$/, ""),
      title: data.title || "Untitled",
      author: data.author || "Anonymous",
      image: `/${randomImage}`,
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
            <Image src={blog.image} alt={blog.title} width={300} height={200} />
            <h2>{blog.title}</h2>
            <p className={styles.blogAuthor}>By {blog.author}</p>
            <Link href={`/blog/${blog.slug}`}>Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
