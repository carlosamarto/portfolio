'use client'

// React
import React, { useEffect } from 'react'

// Next
import dynamic from 'next/dynamic'

// Layouts
import Main from '@/layouts/Main'
import Header from '@/layouts/Header'
import Footer from '@/layouts/Footer'

// Sections
import Intro from '@/sections/Intro'
const About = dynamic(async () => await import('@/sections/About'))
const Contact = dynamic(async () => await import('@/sections/Contact'))
const Projects = dynamic(async () => await import('@/sections/Projects'))
const Experience = dynamic(async () => await import('@/sections/Experience'))

// Page
export default function Home (): JSX.Element {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      void navigator.serviceWorker.register('/service-worker.js').then((registration) => {
        console.log('scope is: ', registration.scope)
      })
    }
  }, [])

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
