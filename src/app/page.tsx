// Next
import dynamic from 'next/dynamic'

// Components
import Header from '@/layouts/Header'
import Main from '@/layouts/Main'
import Intro from '@/sections/Intro'

const Footer = dynamic(async () => await import('@/layouts/Footer'))
const About = dynamic(async () => await import('@/sections/About'))
const Contact = dynamic(async () => await import('@/sections/Contact'))
const Projects = dynamic(async () => await import('@/sections/Projects'))
const Experience = dynamic(async () => await import('@/sections/Experience'))

// Home Page
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
