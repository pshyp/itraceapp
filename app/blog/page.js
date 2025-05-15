'use client';

import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { useEffect, useState } from 'react';

const BlogPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const postsDirectory = path.join(process.cwd(), 'content', 'blog');
      const filenames = fs.readdirSync(postsDirectory);

      const blogPosts = filenames.map((filename) => {
        const filePath = path.join(postsDirectory, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContents);
        const slug = filename.replace(/\.mdx$/, '');
        return { slug, ...data };
      });
      setPosts(blogPosts);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>All Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default BlogPage;