import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import styles from "./blog.module.css";

export default function Blog({ blogs }) {
  return (
    <div className={styles.blogContainer}>
      <h1 className={styles.blogTitle}>Blog</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.slug}>
            <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const contentDir = path.join(process.cwd(), "public/content");

  // ✅ Only grab .mdx files
  const filenames = fs.readdirSync(contentDir).filter((file) => file.endsWith(".mdx"));

  const blogs = filenames.map((filename) => {
    const filePath = path.join(contentDir, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug: data.slug || filename.replace(/\.mdx$/, ""),
      title: data.title || "Untitled",
    };
  });

  return {
    props: {
      blogs,
    },
  };
}