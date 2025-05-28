// pages/blog/index.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Image from 'next/image';
import styles from './blog.module.css'; // optional, for styling

export async function getStaticProps() {
  const blogDirectory = path.join(process.cwd(), 'content', 'blog');
  const filenames = fs.readdirSync(blogDirectory);

  const posts = filenames
    .filter((filename) => filename.endsWith('.mdx'))
    .map((filename) => {
      const filePath = path.join(blogDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);

      return {
        title: data.title || 'Untitled Post',
        date: data.date ? new Date(data.date).toLocaleDateString() : 'No date',
        image: data.image || null,
        description: data.description || 'No description available.',
        slug: filename.replace('.mdx', ''),
      };
    });

  return {
    props: { posts },
  };
}

const BlogPage = ({ posts }) => {
  return (
    <div>
      <h1>All Blog Posts</h1>
      <div className="blog-posts-container">
        {posts.map((post) => (
          <div key={post.slug} className="blog-card">
            {post.image && (
              <div style={{ position: 'relative', width: '100%', height: '300px' }}>
                <Image
                  src={post.image}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
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
