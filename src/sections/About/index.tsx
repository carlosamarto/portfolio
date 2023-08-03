// Next
import Image from 'next/image'
import dynamic from 'next/dynamic'

// Mocks
import { content } from '@/mocks'

// Components
const CustomTitle = dynamic(async () => await import('@/components/CustomTitle'))

// About
export default function About (): JSX.Element {
  return (
    <>
      <section id="about" className="about">
        <div className="about__container">
          <div className="about__content">
            <CustomTitle center={false} number={content.about.sectionNumber} customTitle={content.about.title} />

            <p dangerouslySetInnerHTML={{ __html: content.about.description }} className="about__description" />

            <p dangerouslySetInnerHTML={{ __html: content.about.descriptionb }} className="about__description" />

            <p dangerouslySetInnerHTML={{ __html: content.about.descriptionc }} className="about__description" />

            <ul className="about__list">
              {content.about.technologies.map((technology) => (
                <li key={technology.technologyName} className="about__technologies">
                  <span dangerouslySetInnerHTML={{ __html: technology.technologyName }} className="about__technology" />
                </li>
              ))}
            </ul>
          </div>

          <figure className="about__figure">
            <Image
              src={content.about.imageProfile}
              alt={content.about.imageCaption}
              title={content.about.imageCaption}
              width="0"
              height="0"
              sizes="100vw"
              quality={60}
              priority
              className="about__image"
            />
          </figure>
        </div>
      </section>
    </>
  )
}
