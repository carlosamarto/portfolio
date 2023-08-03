// Mocks
import { content } from '@/mocks'

// Components
import Button from '@/components/Button'

// Intro
export default function Intro (): JSX.Element {
  return (
    <>
      <section id="intro" className="intro">
        <div className="intro__container">
          <h3 className="intro__subtitle">{content.intro.subtitle}</h3>

          <h1 className="intro__title">{content.intro.title}</h1>

          <p dangerouslySetInnerHTML={{ __html: content.intro.text }} className="intro__text" />
        </div>

        <Button link={content.intro.buttonLink} external={false} text={content.intro.buttonText} />
      </section>
    </>
  )
}
