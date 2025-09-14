// app/blog/[slug]/page.js
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

// Instead of reading files from disk, we assume you’ll define slugs manually
// or fetch them from an index.json (if you create one).
// For now, we’ll leave generateStaticParams as empty to avoid fs usage.
export async function generateStaticParams() {
  return []; // You can hardcode [{ slug: "my-first-post" }, ...] if needed
}

async function getBlogBySlug(slug) {
  try {
    // Build static URL to the file in /public/content
    const fileUrl = `${process.env.NEXT_PUBLIC_SITE_URL || ""}/content/${slug}.mdx`;

    console.log("🌍 Fetching static MDX file:", fileUrl);

    const res = await fetch(fileUrl);
    if (!res.ok) {
      throw new Error(`Failed to fetch file: ${fileUrl}, status: ${res.status}`);
    }

    const fileContents = await res.text();

    console.log("📄 Raw file contents (first 200 chars):", fileContents.slice(0, 200));

    // Compile MDX
    const { frontmatter, content } = await compileMDX({
      source: fileContents,
      components,
      options: { parseFrontmatter: true },
    });

    console.log("✅ MDX compiled. Frontmatter:", frontmatter);

    return {
      title: frontmatter?.title || "Untitled",
      content,
    };
  } catch (err) {
    console.error("❌ Error in getBlogBySlug:", err);
    throw err;
  }
}

export default async function BlogPage({ params }) {
  try {
    console.log("📌 Rendering blog page for slug:", params.slug);
    const blog = await getBlogBySlug(params.slug);

    return (
      <div className={styles.postContainer}>
        <h1 className={styles.postTitle}>{blog.title}</h1>
        <div className={styles.postContent}>{blog.content}</div>
      </div>
    );
  } catch (err) {
    console.error("❌ Error in BlogPage render:", err);
    return (
      <div>
        ⚠️ Failed to load blog post for slug <b>{params.slug}</b>. Check server logs for details.
      </div>
    );
  }
}
