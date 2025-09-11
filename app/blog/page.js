
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import styles from './blog.module.css';

export default function Blog() {
  const contentDir = path.join(process.cwd(), 'public/content');
  const filenames = fs.readdirSync(contentDir);

  const blogs = filenames.map(filename => {
    const filePath = path.join(contentDir, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    return {
      slug: data.slug,
      title: data.title,
    };
  });

  return (
    <div className={styles.blogContainer}>
      <h1 className={styles.blogTitle}>Blog</h1>
      <ul>
        {blogs.map(blog => (
          <li key={blog.slug}>
            <Link href={`/blog/${blog.slug}`}>
              {blog.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
