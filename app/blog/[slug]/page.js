
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";

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
    options: { parseFrontmatter: false },
  });

  return {
    title: data.title || "Untitled",
    content: compiledContent,
  };
}

export default async function BlogPage({ params }) {
  const { slug } = params;
  const blog = await getBlogBySlug(slug);

  return (
    <div>
      <h1>{blog.title}</h1>
      <div>{blog.content}</div>
    </div>
  );
}
