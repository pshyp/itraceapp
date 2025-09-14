// app/blog/[slug]/page.js
import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import React from "react";
import styles from "../blog.module.css";
import Link from "next/link";

// MDX components
const components = {
  h1: (props) => <h1 {...props} />,
  h2: (props) => <h2 {...props} />,
  p: (props) => <p {...props} />,
  img: (props) => <img style={{ maxWidth: "100%", height: "auto" }} {...props} />,
  a: ({ href, children, ...props }) => (
    <Link href={href} {...props}>
      {children}
    </Link>
  ),
  ul: (props) => <ul {...props} />,
  li: (props) => <li {...props} />,
};

export async function generateStaticParams() {
  try {
    const contentDir = path.join(process.cwd(), "public/content");
    const filenames = fs.readdirSync(contentDir).filter((file) => file.endsWith(".mdx"));

    console.log("✅ Found blog files:", filenames);

    return filenames.map((filename) => ({
      slug: filename.replace(/\.mdx$/, ""),
    }));
  } catch (err) {
    console.error("❌ Error in generateStaticParams:", err.message, err.stack);
    throw err;
  }
}

async function getBlogBySlug(slug) {
  try {
    const contentDir = path.join(process.cwd(), "public/content");
    const filePath = path.join(contentDir, `${slug}.mdx`);

    console.log("📂 Looking for file:", filePath);

    if (!fs.existsSync(filePath)) {
      console.error("❌ File does not exist:", filePath);
      throw new Error(`Blog file not found for slug: ${slug}`);
    }

    const fileContents = fs.readFileSync(filePath, "utf8");

    console.log("📄 Raw file contents (first 200 chars):", fileContents.slice(0, 200));

    const { frontmatter, content } = await compileMDX({
      source: fileContents,
      components,
      options: { parseFrontmatter: true },
    });

    console.log("✅ MDX compiled successfully.");
    console.log("📝 Frontmatter:", frontmatter);

    return {
      title: frontmatter?.title || "Untitled",
      content,
    };
  } catch (err) {
    console.error("❌ Error in getBlogBySlug:", err.message);
    console.error(err.stack);
    throw err;
  }
}

export default async function BlogPage({ params }) {
  try {
    console.log("📌 Rendering blog page for slug:", params.slug);

    const blog = await getBlogBySlug(params.slug);

    console.log("✅ Blog loaded successfully:", blog.title);

    return (
      <div className={styles.postContainer}>
        <h1 className={styles.postTitle}>{blog.title}</h1>
        <div className={styles.postContent}>{blog.content}</div>
      </div>
    );
  } catch (err) {
    console.error("❌ Error in BlogPage render:", err.message);
    console.error(err.stack);
    return (
      <div>
        ⚠️ Failed to load blog post for slug <b>{params.slug}</b>.  
        Check server logs for details.
      </div>
    );
  }
}
