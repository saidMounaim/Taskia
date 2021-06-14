import Head from 'next/head'

// Sections
import Hero from '../components/Hero';

export default function Home() {
  return (
    <>
      <Head>
        <title>Taskia | Landing Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />

    </>
  )
}
