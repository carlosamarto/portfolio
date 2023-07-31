// React
import React from 'react'

// Layouts
import Main from '@/layouts/Main'
import Header from '@/layouts/Header'
import Footer from '@/layouts/Footer'

// Sections
import Intro from '@/sections/intro'
import About from '@/sections/About'
import Contact from '@/sections/Contact'
import Projects from '@/sections/Projects'
import Experience from '@/sections/Experience'

// Page
export default function Home (): JSX.Element {
  return (
    <>
      <Header />

      <Main>
        <Intro />

        <About />

        <Experience />

        <Projects />

        <Contact />
      </Main>

      <Footer />
    </>
  )
}
