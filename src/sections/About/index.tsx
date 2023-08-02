// Client Component
'use client'

// React
import React, { useContext } from 'react'

// Next
import Image from 'next/image'
import dynamic from 'next/dynamic'

// Context
import { ThemeContext } from '@/context'

// Components
const CustomTitle = dynamic(async () => await import('@/components/CustomTitle'))

// About
export default function About (): JSX.Element {
  // Accessing values from the context using useContext hook
  const { data } = useContext(ThemeContext)

  return (
    <>
      <section id="about" className="about">
        <div className="about__container">
          <div className="about__content">
            <CustomTitle center={false} number={data.about.sectionNumber} customTitle={data.about.title} />

            <p dangerouslySetInnerHTML={{ __html: data.about.description }} className="about__description" />

            <p dangerouslySetInnerHTML={{ __html: data.about.descriptionb }} className="about__description" />

            <p dangerouslySetInnerHTML={{ __html: data.about.descriptionc }} className="about__description" />

            <ul className="about__list">
              {data.about.technologies.map((technology) => (
                <li key={technology.technologyName} className="about__technologies">
                  <span dangerouslySetInnerHTML={{ __html: technology.technologyName }} className="about__technology" />
                </li>
              ))}
            </ul>
          </div>

          <figure className="about__figure">
            <Image
              src={data.about.imageProfile}
              alt={data.about.imageCaption}
              title={data.about.imageCaption}
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
