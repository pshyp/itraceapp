
// scripts/generate-index.js
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "public", "content");
const INDEX_FILE = path.join(CONTENT_DIR, "index.json");

function generateIndex() {
  const files = fs.readdirSync(CONTENT_DIR).filter(f => f.endsWith(".mdx"));

  const posts = files.map(file => {
    const filePath = path.join(CONTENT_DIR, file);
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(raw);

    return {
      slug: data.slug || file.replace(/\.mdx$/, ""),
      title: data.title || "Untitled",
      author: data.author || "Unknown",
      date: data.date || null,
      excerpt: data.excerpt || "",
      cover_image: data.cover_image || null,
      keywords: data.keywords || []
    };
  });

  fs.writeFileSync(INDEX_FILE, JSON.stringify(posts, null, 2));
  console.log(`✅ Blog index generated at ${INDEX_FILE}`);
}

generateIndex();
