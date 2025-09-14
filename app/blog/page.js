import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./blog.module.css";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/content/index.json")
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error("Failed to load blog index:", err));
  }, []);

  return (
    <div className={styles.blogContainer}>
      <h1 className={styles.blogTitle}>Blog</h1>
      <div className={styles.blogGrid}>
        {posts.map(post => (
          <div key={post.slug} className={styles.blogCard}>
            {post.cover_image && (
              <Image
                src={post.cover_image}
                alt={post.title}
                width={300}
                height={200}
              />
            )}
            <h2>{post.title}</h2>
            <p className={styles.blogAuthor}>By {post.author}</p>
            <p className={styles.blogExcerpt}>{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`}>Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
}