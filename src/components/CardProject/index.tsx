// React
import React from 'react'

// React Icons
import { VscLinkExternal } from 'react-icons/vsc'
import { SlSocialGithub, SlFolder } from 'react-icons/sl'

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
              <SlFolder size="3.2rem" className="card-project__icon" />
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
                  <SlSocialGithub size="2.4rem" className="card-project__icon" />
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
                  <VscLinkExternal size="2.4rem" className="card-project__icon" />
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
