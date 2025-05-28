import fs, { readFileSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';

export async function generateStaticParams() {
  const postsDirectory = join(process.cwd(), 'content/blog');
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => ({
    slug: filename.replace(/\.mdx$/, ''),
  }));
}

export default async function Post({ params }) {
  const { slug } = params;
  const postFilePath = join(process.cwd(), 'content/blog', `${slug}.mdx`);
  const source = readFileSync(postFilePath);

  const { content, data } = matter(source);
  const mdxSource = await serialize(content, { scope: data });

  return (
    <div>
      <h1>{data.title}</h1>
      <MDXRemote {...mdxSource} />
    </div>
  );
}