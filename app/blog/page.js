import styles from './blog.module.css';

export default function Blog() {
  return (
    <div className={styles.blogContainer}>
      <h1 className={styles.blogTitle}>Blog</h1>
      <p>This is the blog page.</p>
    </div>
  );
}
