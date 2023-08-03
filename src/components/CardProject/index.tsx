// React Icons
import { FiFolder } from '@react-icons/all-files/fi/FiFolder'
import { FiGithub } from '@react-icons/all-files/fi/FiGithub'
import { FiExternalLink } from '@react-icons/all-files/fi/FiExternalLink'

// CardProject
export default function CardProject ({
  website,
  github,
  title,
  description,
  technologies
}: {
  website: string
  github: string
  title: string
  description: string
  technologies: string[]
}): JSX.Element {
  return (
    <>
      <li className="card-project">
        <header className="card-project__header">
          <div className="card-project__top">
            <div className="card-project__folder">
              <FiFolder size="3.2rem" className="card-project__icon" />
            </div>

            <div className="card-project__icons">
              {github !== '' && (
                <a
                  href={github}
                  aria-label="Project Github"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-project__links"
                >
                  <FiGithub size="2.4rem" className="card-project__icon" />
                </a>
              )}

              {website !== '' && (
                <a
                  href={website}
                  aria-label="Project Website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-project__links"
                >
                  <FiExternalLink size="2.4rem" className="card-project__icon" />
                </a>
              )}
            </div>
          </div>

          <h2 className="card-project__title">
            <a href={website === '' ? github : website} target="_blank" rel="noopener noreferrer" className="card-project__url">
              {title}
            </a>
          </h2>

          <p className="card-project__description">{description}</p>
        </header>

        <footer className="card-project__footer">
          <ul className="card-project__list">
            {technologies.map((technology) => (
              <li key={technology} className="card-project__technologies">
                <span className="card-project__technology">{technology}</span>
              </li>
            ))}
          </ul>
        </footer>
      </li>
    </>
  )
}
