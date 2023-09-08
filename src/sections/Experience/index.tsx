'use client'

// React
import { useContext } from 'react'

// Next
import dynamic from 'next/dynamic'

// Context
import { ThemeContext } from '@/context'

// Mocks
import { content } from '@/mocks'

// Dynamic Components
const CustomTitle = dynamic(async () => await import('@/components/CustomTitle'))

// Projects
export default function Experience (): JSX.Element {
  // Accessing values from the context using useContext hook
  const { activeTab, handleClick } = useContext(ThemeContext)

  return (
    <>
      <section id="experience" className="experience">
        <CustomTitle center={false} number={content.experience.sectionNumber} customTitle={content.experience.title} />

        <div className="experience__container">
          <ul className="experience__list">
            {content.experience.jobs.map((job, index) => (
              <li key={job.company} className="experience__item">
                <button
                  type="button"
                  className={`experience__button ${activeTab === index ? 'experience__button--active' : ''}`}
                  onClick={() => {
                    handleClick(index)
                  }}
                >
                  {job.company}
                </button>
              </li>
            ))}
          </ul>

          <div className="experience__jobs">
            {content.experience.jobs.map((job, index) => (
              <div key={job.company} className={`experience__job ${activeTab === index ? 'experience__job--visible' : ''}`}>
                <div className="experience__top">
                  <h3 dangerouslySetInnerHTML={{ __html: job.position }} className="experience__position" />

                  <h4 dangerouslySetInnerHTML={{ __html: job.location }} className="experience__location" />

                  <p className="experience__time">{job.time}</p>
                </div>

                <ul className="experience__tasks">
                  {job.tasks.map((task, index) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: task.description }} className="experience__task" />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
