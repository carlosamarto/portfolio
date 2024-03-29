'use client'

// Next
import dynamic from 'next/dynamic'

// Mocks
import { content } from '@/mocks'

// Dynamic Components
const Button = dynamic(async () => await import('@/components/Button'))

// Contact
export default function Contact (): JSX.Element {
  return (
    <>
      <section id="contact" className="contact">
        <div className="contact__container">
          <h3 className="contact__subtitle">{content.contact.subtitle}</h3>

          <h2 className="contact__title">{content.contact.title}</h2>

          <p dangerouslySetInnerHTML={{ __html: content.contact.text }} className="contact__text" />
        </div>

        <Button link={content.contact.buttonLink} external text={content.contact.buttonText} />
      </section>
    </>
  )
}
