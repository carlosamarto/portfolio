// Client Component
'use client'

// React
import React, { useContext } from 'react'

// Next
import dynamic from 'next/dynamic'

// Context
import { ThemeContext } from '@/context'

// Components
const Button = dynamic(async () => await import('@/components/Button'))

// Contact
export default function Contact (): JSX.Element {
  // Accessing values from the context using useContext hook
  const { data } = useContext(ThemeContext)

  return (
    <>
      <section id="contact" className="contact">
        <div className="contact__container">
          <h3 className="contact__subtitle">{data.contact.subtitle}</h3>

          <h2 className="contact__title">{data.contact.title}</h2>

          <p dangerouslySetInnerHTML={{ __html: data.contact.text }} className="contact__text" />
        </div>

        <Button link={data.contact.buttonLink} external text={data.contact.buttonText} />
      </section>
    </>
  )
}
