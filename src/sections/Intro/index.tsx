'use client'

// Next
import { usePathname } from 'next/navigation'

// Mocks
import { content, work } from '@/mocks'

// Components
import Button from '@/components/Button'

// Intro
export default function Intro (): JSX.Element {
  // Get the path of the url
  const path = usePathname()

  // Use the path to verify if the content needs to change
  const pageContent = path === '/work' ? work : content

  return (
    <>
      <section id="intro" className="intro">
        <div className="intro__container">
          <h3 className="intro__subtitle">{content.intro.subtitle}</h3>

          <h1 className="intro__title">{content.intro.title}</h1>

          <p dangerouslySetInnerHTML={{ __html: pageContent.intro.text }} className="intro__text" />
        </div>

        <Button link={content.intro.buttonLink} external={false} text={content.intro.buttonText} />
      </section>
    </>
  )
}
