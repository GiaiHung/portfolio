import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Experience from '../components/Experience/Experience'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Skills from '../components/Skills/Skills'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Trương Giai Hưng</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="z-0 h-screen snap-y snap-mandatory overflow-scroll bg-[rgb(36,36,36)] text-white">
        <Header />

        <section id="hero" className="snap-start pt-[90px]">
          <Hero />
        </section>

        <section id="about" className="snap-center">
          <About />
        </section>

        <section id="experience" className='snap-center'>
          <Experience />
        </section>

        <section id='skills' className='snap-center'>
          <Skills />
        </section>
      </div>
    </>
  )
}

export default Home
