import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import React from 'react';
import styles from "../blog.module.css";

const components = {
  h1: (props) => <h1 {...props} />,
  h2: (props) => <h2 {...props} />,
  p: (props) => <p {...props} />,
  img: (props) => <img style={{ maxWidth: '100%', height: 'auto' }} {...props} />,
  a: (props) => <a {...props} />,
  ul: (props) => <ul {...props} />,
  li: (props) => <li {...props} />,
};

export async function generateStaticParams() {
  const contentDir = path.join(process.cwd(), "public/content");
  const filenames = fs.readdirSync(contentDir).filter((file) => file.endsWith(".mdx"));

  return filenames.map((filename) => ({
    slug: filename.replace(/\.mdx$/, ""),
  }));
}

async function getBlogBySlug(slug) {
  const contentDir = path.join(process.cwd(), "public/content");
  const filePath = path.join(contentDir, `${slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  const { content: compiledContent } = await compileMDX({
    source: content,
    components,
    options: {
      parseFrontmatter: false,
    },
  });

  return {
    title: data.title || "Untitled",
    content: compiledContent,
    author: data.author || "Anonymous",
    date: data.date || null,
  };
}

export default async function BlogPage({ params }) {
  const { slug } = params;
  const blog = await getBlogBySlug(slug);

  return (
    <div className={styles.postContainer}>
      <h1 className={styles.postTitle}>{blog.title}</h1>
      {blog.author && <p className={styles.postAuthor}>By {blog.author}</p>}
      <div className={styles.postContent}>{blog.content}</div>
    </div>
  );
}
