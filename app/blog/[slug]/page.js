import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { getAllPostSlugs, getPostBySlug } from '@/lib/posts';

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function Post({ params }) {
  const { slug } = params;
  const { data, content } = getPostBySlug(slug);
  const mdxSource = await serialize(content, { scope: data });

  return (
    <div>
      <h1>{data.title}</h1>
      <MDXRemote {...mdxSource} />
    </div>
  );
}