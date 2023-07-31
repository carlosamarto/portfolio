// Client Component
'use client'

// React
import React, { useContext } from 'react'

// Context
import { ThemeContext } from '@/context'

// Components
import CustomTitle from '@/components/CustomTitle'

// Projects
export default function Experience (): JSX.Element {
  // Accessing values from the context using useContext hook
  const { data } = useContext(ThemeContext)

  return (
    <>
      <section id="experience" className="experience">
        <CustomTitle
          center={false}
          alternative={false}
          number={data.experience.sectionNumber}
          customTitle={data.experience.title}
        />

        <div className="experience__container">
          <ul className="experience__list">
            <li className="experience__item">{data.experience.company}</li>
          </ul>

          <div className="experience__job">
            <div className="experience__top">
              <h3 dangerouslySetInnerHTML={{ __html: data.experience.position }} className="experience__position" />

              <p className="experience__time">{data.experience.time}</p>
            </div>

            <ul className="experience__tasks">
              {data.experience.tasks.map((task, index) => (
                <li dangerouslySetInnerHTML={{ __html: task.description }} className="experience__task" key={index} />
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
