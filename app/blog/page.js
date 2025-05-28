import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Image from 'next/image'; // Import the Image component

const BlogPage = () => {
  const blogDirectory = path.join(process.cwd(), 'content', 'blog');
  const filenames = fs.readdirSync(blogDirectory);

  const posts = filenames
    .filter((filename) => filename.endsWith('.mdx')) // Filter for MDX files
    .map((filename) => {
      const filePath = path.join(blogDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);

      return {
        title: data.title || 'Untitled Post', // Provide a fallback title
        date: data.date ? new Date(data.date).toLocaleDateString() : 'No date', // Format the date
        image: data.image || null, // Default to null if no image
        description: data.description || 'No description available.', // Provide a fallback description
        slug: filename.replace('.mdx', ''),
      };
    });

  return (
    <div>
      <h1>All Blog Posts</h1>
      <div className="blog-posts-container">
        {posts.map((post) => (
          <div key={post.slug} className="blog-card"> {/* Consider adding unique keys */}
            {post.image && (
              <Image src={post.image} alt={post.title} width={500} height={300} objectFit="cover" /> // Use next/image for optimization
            )}
            <h2>{post.title}</h2>
            <p>{post.date}</p>
            <p>{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default BlogPage;