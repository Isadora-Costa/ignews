import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.contentContainer}>
        <div className={styles.posts}>
          <a href="">
            <time>12 de março de 2021</time>
            <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
            <p>
              In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared <br />
              build, test, and release process.
            </p>
          </a>

          <a href="">
            <time>08 de março de 2021</time>
            <strong>How Stripe Designs Beautiful Websites</strong>
            <p>
              Examining the tips and tricks used to make Stripe's website design a notch above the rest.
            </p>
          </a>

          <a href="">
            <time>04 de março de 2021</time>
            <strong>Past, Present, and Future of React State Management</strong>
            <p>
              Learn about the history of state management in React and what the preferred solutions are today.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}