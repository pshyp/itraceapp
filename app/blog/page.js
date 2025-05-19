import fs from "fs";
import path from "path";
import matter from "gray-matter";

async function getBlogPosts() {
  const postsDirectory = path.join(process.cwd(), "content/blog");
  const filenames = fs.readdirSync(postsDirectory);
  const postsData = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);
    return { slug: filename.replace(".mdx", ""), ...data };
  });
  return postsData;
}
const BlogPage = async () => {
  const posts = await getBlogPosts();

  return (
    <div>
      <h1>All Blog Posts</h1>
    </div>
  );
};
export default BlogPage;