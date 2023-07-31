// Client Component
'use client'

// React
import React, { useContext } from 'react'

// Context
import { ThemeContext } from '@/context'

// Components
import Button from '@/components/Button'

// Contact
export default function Contact (): JSX.Element {
  // Accessing values from the context using useContext hook
  const { data } = useContext(ThemeContext)

  return (
    <>
      <section id="contact" className="contact">
        <h3 className="contact__subtitle">{data.contact.subtitle}</h3>

        <h2 className="contact__title">{data.contact.title}</h2>

        <p dangerouslySetInnerHTML={{ __html: data.contact.text }} className="contact__text" />

        <Button link={data.contact.buttonLink} external text={data.contact.buttonText} />
      </section>
    </>
  )
}
