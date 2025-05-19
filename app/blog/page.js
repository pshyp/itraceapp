'use client';

import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { useState, useEffect } from "react";

const BlogPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postsDirectory = path.join(process.cwd(), "content/blog");
    const filenames = fs.readdirSync(postsDirectory);

    const postsData = filenames.map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);
      return { slug: filename.replace(".mdx", ""), ...data };
    });
    setPosts(postsData);
  }, []);

  return (
    <div>
      <h1>All Blog Posts</h1>
      
    </div>
  );
};
export default BlogPage;