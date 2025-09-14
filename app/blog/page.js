// app/blog/page.js
import Link from "next/link";
import Image from "next/image";
import styles from "./blog.module.css";

// Utility to fetch and parse frontmatter from MDX files
async function getBlogs() {
  try {
    // IMPORTANT: maintain a list of your blog slugs
    // Option 1: Hardcode them
    const slugs = [
      "nissan-note-comprehensive-review",
      "the-rise-of-hybrid-vehicles",
      // add more here
    ];

    // Option 2 (more advanced): create a `index.json` in public/content listing all posts
    // and fetch it instead of hardcoding.

    const images = [
      "/sample1.jpg",
      "/sample2.jpg",
      "/sample3.webp",
    ]; // all images must be in /public

    const blogs = [];

    for (const slug of slugs) {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SITE_URL || ""}/content/${slug}.mdx`
      );
      if (!res.ok) {
        console.warn(`⚠️ Could not load MDX for slug: ${slug}`);
        continue;
      }

      const fileContents = await res.text();

      // crude frontmatter extraction (since we aren’t using gray-matter with fs)
      const frontmatterMatch = /^---\n([\s\S]*?)\n---/.exec(fileContents);
      let frontmatter = {};
      if (frontmatterMatch) {
        const lines = frontmatterMatch[1].split("\n");
        lines.forEach((line) => {
          const [key, ...rest] = line.split(":");
          if (key && rest.length > 0) {
            frontmatter[key.trim()] = rest.join(":").trim();
          }
        });
      }

      const randomImage = images[Math.floor(Math.random() * images.length)];

      blogs.push({
        slug,
        title: frontmatter.title || "Untitled",
        author: frontmatter.author || "Anonymous",
        image: randomImage,
      });
    }

    return blogs;
  } catch (err) {
    console.error("❌ Error loading blogs:", err);
    return [];
  }
}

export default async function Blog() {
  const blogs = await getBlogs();

  return (
    <div className={styles.blogContainer}>
      <h1 className={styles.blogTitle}>Blog</h1>
      <div className={styles.blogGrid}>
        {blogs.map((blog) => (
          <div key={blog.slug} className={styles.blogCard}>
            <Image
              src={blog.image}
              alt={blog.title}
              width={300}
              height={200}
            />
            <h2>{blog.title}</h2>
            <p className={styles.blogAuthor}>By {blog.author}</p>
            <Link href={`/blog/${blog.slug}`}>Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
