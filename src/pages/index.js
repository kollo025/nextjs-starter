import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState, useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  const API_ENDPOINT = "https://backend-6sli.api.codehooks.io/dev/flashCard"
  const API_KEY = "fa894a1a-dce3-43f2-ac61-ea5d77d70fc7"

  // Set states
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {console.log("I executed")});

  // Want to return a promise so you're able to cancel it
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(API_ENDPOINT, {
        'method':'GET',
        'headers': {'x-apikey': API_KEY}
      })
      const data = await response.json()
      // update state -- configured earlier.
      setPosts(data);
      setLoading(false);
    }
    fetchData();
  }, []);
  
  if (loading){
    return <span>Loading</span>
  }

  else {
    return (
      <>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <div className={styles.description}>
            <p>
              {posts[0].front}
              <code className={styles.code}>src/pages/index.js</code>
            </p>
          </div>
        </main>
      </>
    )
  }
}
