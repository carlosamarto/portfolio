'use client'

// Next
import dynamic from 'next/dynamic'

// Mocks
import { content } from '@/mocks'

// Dynamic Components
const CustomTitle = dynamic(async () => await import('@/components/CustomTitle'))
const CardProject = dynamic(async () => await import('@/components/CardProject'))

// Projects
export default function Projects (): JSX.Element {
  return (
    <>
      <section id="projects" className="projects">
        <CustomTitle center={false} number={content.projects.sectionNumber} customTitle={content.projects.title} />

        <ul className="projects__cards">
          {content.projects.cardProjects.map((cardProject) => (
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
