import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import CharactersList from '../components/CharacterList/CharactersList';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => (
  <div className={styles.container}>
    <Head>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
      <div>
        <h1 className={styles.title}>
          Apollo Client Sample App
        </h1>
        <div>
          <Link href="/about">
            Here
          </Link>
        </div>
        <CharactersList />
      </div>

    </main>

  </div>
);

export default Home;
