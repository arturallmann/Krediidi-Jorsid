import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a className={styles.titlecolor}>Krediidi-Jorsid!</a>
        </h1>

        <p className={styles.description}>
          Get started with taking a loan!
        </p>

        <div className={styles.grid}>
          <a href="/loan" src="/loan.js" className={styles.card}>
            <h2>Take a loan &rarr;</h2>
            <p>Take a loan as much as you need! Interest depends on the amount you have loaned, 9%-30%</p>
          </a>

          <a href="/pay" src="/pay.js" className={styles.card}>
            <h2>Pay an existing loan &rarr;</h2>
            <p>Pay back the money you have loaned from our firm</p>
          </a>
        </div>
      </main>
    </div>
  )
}
