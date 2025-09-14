// app/blog/[slug]/page.js
import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import React from "react";
import styles from "../blog.module.css";

// MDX components
const components = {
  h1: (props) => <h1 {...props} />,
  h2: (props) => <h2 {...props} />,
  p: (props) => <p {...props} />,
  img: (props) => <img style={{ maxWidth: "100%", height: "auto" }} {...props} />,
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

  const { frontmatter, content } = await compileMDX({
    source: fileContents,
    components,
    options: {
      parseFrontmatter: true,
    },
  });

  return {
    title: frontmatter.title || "Untitled",
    content,
  };
}

export default async function BlogPage({ params }) {
  const { slug } = params;
  const blog = await getBlogBySlug(slug);

  return (
    <div className={styles.postContainer}>
      <h1 className={styles.postTitle}>{blog.title}</h1>
      <div className={styles.postContent}>{blog.content}</div>
    </div>
  );
}
