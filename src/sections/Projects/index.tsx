// Client Component
'use client'

// React
import React, { useContext } from 'react'

// Next
import dynamic from 'next/dynamic'

// Context
import { ThemeContext } from '@/context'

// Components
const CustomTitle = dynamic(async () => await import('@/components/CustomTitle'))
const CardProject = dynamic(async () => await import('@/components/CardProject'))

// Projects
export default function Projects (): JSX.Element {
  // Accessing values from the context using useContext hook
  const { data } = useContext(ThemeContext)

  return (
    <>
      <section id="projects" className="projects">
        <CustomTitle center={false} number={data.projects.sectionNumber} customTitle={data.projects.title} />

        <ul className="projects__cards">
          {data.projects.cardProjects.map((cardProject) => (
            <CardProject
              key={cardProject.title}
              website={cardProject.website}
              github={cardProject.github}
              title={cardProject.title}
              description={cardProject.description}
              technologies={cardProject.technologies}
            />
          ))}
        </ul>
      </section>
    </>
  )
}
