// app/blog/[slug]/page.js
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import React from "react";
import styles from "../blog.module.css";

// Define components to render MDX elements
const components = {
  h1: (props) => <h1 {...props} />,
  h2: (props) => <h2 {...props} />,
  p: (props) => <p {...props} />,
  img: (props) => (
    <img style={{ maxWidth: "100%", height: "auto" }} {...props} />
  ),
  a: (props) => <a {...props} />,
  ul: (props) => <ul {...props} />,
  li: (props) => <li {...props} />,
};

export async function generateStaticParams() {
  try {
    const contentDir = path.join(process.cwd(), "public/content");
    const filenames = fs.readdirSync(contentDir).filter((file) =>
      file.endsWith(".mdx")
    );

    console.log("📝 Found blog files:", filenames);

    return filenames.map((filename) => ({
      slug: filename.replace(/\.mdx$/, ""),
    }));
  } catch (err) {
    console.error("❌ Error in generateStaticParams:", err);
    throw err;
  }
}

async function getBlogBySlug(slug) {
  try {
    const contentDir = path.join(process.cwd(), "public/content");
    const filePath = path.join(contentDir, `${slug}.mdx`);
    console.log("📂 Trying to load file:", filePath);

    if (!fs.existsSync(filePath)) {
      console.error("❌ File does not exist:", filePath);
      throw new Error(`File not found: ${filePath}`);
    }

    const fileContents = fs.readFileSync(filePath, "utf8");
    console.log("📄 File loaded successfully, length:", fileContents.length);

    const { data, content } = matter(fileContents);
    console.log("🔑 Frontmatter parsed:", data);

    const compiled = await compileMDX({
      source: content,
      components,
      options: {
        parseFrontmatter: false,
      },
    });

    console.log("✅ MDX compiled successfully");

    return {
      title: data.title || "Untitled",
      content: compiled.content,
    };
  } catch (err) {
    console.error("❌ Error in getBlogBySlug:", err);
    console.error("🔎 Full error stack:", err.stack);
    throw err;
  }
}

export default async function BlogPage({ params }) {
  const { slug } = params;

  try {
    const blog = await getBlogBySlug(slug);

    return (
      <div className={styles.postContainer}>
        <h1 className={styles.postTitle}>{blog.title}</h1>
        <div className={styles.postContent}>{blog.content}</div>
      </div>
    );
  } catch (err) {
    console.error("❌ Error rendering blog page for slug:", slug, err);
    return (
      <div className={styles.postContainer}>
        <h1 className={styles.postTitle}>Error Loading Blog</h1>
        <pre style={{ color: "red", whiteSpace: "pre-wrap" }}>
          {err.message}
        </pre>
      </div>
    );
  }
}
