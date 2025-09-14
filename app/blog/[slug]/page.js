import { compileMDX } from 'next-mdx-remote/rsc'
import fs from 'fs'
import path from 'path'
import styles from '../blog.module.css'
import Link from 'next/link'
import Image from 'next/image'

const CONTENT_DIR = path.join(process.cwd(), 'public', 'content')
const INDEX_FILE = path.join(CONTENT_DIR, 'index.json')

const components = {
  h1: (props) => <h1 {...props} />,
  h2: (props) => <h2 {...props} />,
  p: (props) => <p {...props} />,
  img: (props) => <img style={{ maxWidth: '100%', height: 'auto' }} {...props} />,
  a: ({ href, children, ...props }) => (
    <Link href={href} {...props}>
      {children}
    </Link>
  ),
  ul: (props) => <ul {...props} />,
  li: (props) => <li {...props} />,
}

export async function generateStaticParams() {
  try {
    if (!fs.existsSync(INDEX_FILE)) {
      console.warn("⚠️ index.json not found. Run 'node scripts/generate-index.js' before building.");
      return [];
    }
    const index = JSON.parse(fs.readFileSync(INDEX_FILE, 'utf-8'));
    return index.map(post => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

async function getBlogBySlug(slug) {
  try {
    const index = JSON.parse(fs.readFileSync(INDEX_FILE, 'utf-8'));
    const postData = index.find(post => post.slug === slug);

    if (!postData) {
      throw new Error(`Blog post with slug '${slug}' not found in index.`);
    }

    const filePath = path.join(CONTENT_DIR, postData.file)
    const fileContents = fs.readFileSync(filePath, 'utf-8')

    const { frontmatter, content } = await compileMDX({
      source: fileContents,
      components,
      options: { parseFrontmatter: true },
    })

    return {
      frontmatter,
      content,
    }
  } catch (err) {
    console.error('❌ Error in getBlogBySlug:', err)
    throw err
  }
}

export default async function BlogPage({ params }) {
  try {
    const blog = await getBlogBySlug(params.slug)

    return (
      <div className={styles.postContainer}>
        {blog.frontmatter.cover_image && (
          <Image
            src={blog.frontmatter.cover_image}
            alt={blog.frontmatter.title}
            width={800}
            height={400}
            className={styles.postCoverImage}
            priority
          />
        )}
        <h1 className={styles.postTitle}>{blog.frontmatter.title}</h1>
        <div className={styles.postMeta}>
          <span>By {blog.frontmatter.author}</span>
          <span> | </span>
          <span>{new Date(blog.frontmatter.date).toLocaleDateString()}</span>
        </div>
        <div className={styles.postContent}>{blog.content}</div>
      </div>
    )
  } catch (err) {
    console.error('❌ Error in BlogPage render:', err)
    return (
      <div>
        ⚠️ Failed to load blog post for slug <b>{params.slug}</b>. Check server
        logs for details.
      </div>
    )
  }
}
