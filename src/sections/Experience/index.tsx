// Next
import dynamic from 'next/dynamic'

// Mocks
import { content } from '@/mocks'

// Dynamic Components
const CustomTitle = dynamic(async () => await import('@/components/CustomTitle'))

// Projects
export default function Experience (): JSX.Element {
  return (
    <>
      <section id="experience" className="experience">
        <CustomTitle center={false} number={content.experience.sectionNumber} customTitle={content.experience.title} />

        <div className="experience__container">
          <ul className="experience__list">
            <li className="experience__item">{content.experience.company}</li>
          </ul>

          <div className="experience__job">
            <div className="experience__top">
              <h3 dangerouslySetInnerHTML={{ __html: content.experience.position }} className="experience__position" />

              <p className="experience__time">{content.experience.time}</p>
            </div>

            <ul className="experience__tasks">
              {content.experience.tasks.map((task, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: task.description }} className="experience__task" />
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
