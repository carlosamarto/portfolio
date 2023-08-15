'use client'

// Next
import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'

// Mocks
import { content, work } from '@/mocks'

// Components
const CustomTitle = dynamic(async () => await import('@/components/CustomTitle'))
const CardProject = dynamic(async () => await import('@/components/CardProject'))

// Projects
export default function Projects (): JSX.Element {
  // Get the path of the url
  const path = usePathname()

  // Use the path to verify if the content needs to change
  const pageContent = path === '/work' ? work : content

  return (
    <>
      <section id="projects" className="projects">
        <CustomTitle center={false} number={pageContent.projects.sectionNumber} customTitle={content.projects.title} />

        <ul className="projects__cards">
          {pageContent.projects.cardProjects.map((cardProject) => (
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
