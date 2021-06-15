import Head from 'next/head'

// Sections
import Hero from '../components/Hero';
import Services from '../components/Services';


export default function Home() {
  return (
    <>
      <Head>
        <title>Taskia | Landing Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />

      <Services />

    </>
  )
}
