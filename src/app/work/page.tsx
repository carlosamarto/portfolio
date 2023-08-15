// Next
import dynamic from 'next/dynamic'
import { inject } from '@vercel/analytics'

// Components
import Header from '@/layouts/Header'
import Main from '@/layouts/Main'
import Intro from '@/sections/Intro'

// Vercel Analytics
inject()

const Footer = dynamic(async () => await import('@/layouts/Footer'))
const Contact = dynamic(async () => await import('@/sections/Contact'))
const Projects = dynamic(async () => await import('@/sections/Projects'))

// Work Page
export default function Home (): JSX.Element {
  return (
    <>
      <Header />

      <Main>
        <Intro />

        <Projects />

        <Contact />
      </Main>

      <Footer />
    </>
  )
}
