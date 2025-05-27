import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BlogPage = () => {
  const blogDirectory = path.join(process.cwd(), 'content', 'blog');
  const filenames = fs.readdirSync(blogDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(blogDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    return {
 title: data.title,
 date: data.date,
 image: data.image, // Assuming you add an 'image' field to your frontmatter
 description: data.description, // You might want to add a description field to your frontmatter as well
      slug: filename.replace('.mdx', ''),
    };
  });

  return (
    <div>
      <h1>All Blog Posts</h1>
      <div className="blog-posts-container">
        {posts.map((post) => (
          <div key={post.slug} className="blog-card">
            <h2>{post.title}</h2>
 {post.image && <img src={post.image} alt={post.title} />}
            <p>{post.date}</p>
            <p>{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default BlogPage;